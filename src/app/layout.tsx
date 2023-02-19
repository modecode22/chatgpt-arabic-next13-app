import ClientProvider from '@/components/ClientProvider'
import LogInPage from '@/components/LogInPage'
import SessionProvider from '@/components/SessionProvider'
import SideBar from '@/components/SideBar'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import {getServerSession} from 'next-auth'
import './globals.css'
import { Cairo } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

const session = await getServerSession(authOptions)

  return (
    <html lang="en" className={cairo.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gray-900 text-lime-50 h-screen">
        <SessionProvider session={session}>
          {!session ? (
            <>
              <LogInPage />
            </>
          ) : (
            <>
              <SideBar />
              <main className="ml-16 p-5 h-full flex flex-col justify-center items-center gap-5">
              <ClientProvider/>
                {children}
              </main>
            </>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
