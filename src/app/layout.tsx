import LogInPage from '@/components/LogInPage'
import SessionProvider from '@/components/SessionProvider'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import {getServerSession} from 'next-auth'
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gray-900 text-lime-50 h-screen">
        <SessionProvider session={session}>
        {!session ?(
          <LogInPage/>
        ):(
          <>
          {children}
          </>
        )}
     </SessionProvider>
      </body>
    </html>
  );
}
