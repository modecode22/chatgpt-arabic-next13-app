import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/Collapsible";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <main className="  shadow-md hover:shadow-sm duration-100 p-5 bg-black/60 w-full h-full rounded-2xl border border-lime-50/20 hover:border-lime-50/40 overflow-auto flex flex-col  items-center justify-between gap-2 ">
        <main className=" w-full flex flex-col gap-5">
          <Collapsible className="shadow-md shadow-black bg-gray-900/20 select-none border  border-lime-50/20 hover:border-lime-50/60 w-full p-5 rounded-2xl">
            <CollapsibleTrigger
              className="hover:text-lime-500 group gap-5 w-full flex justify-center items-center hbeforeAll(() => {
              request = supertest(app)
            })"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:border rounded-full p-1 border-lime-50/40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <h1 className="group-hover:underline ">ماهاذا ؟</h1>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <h2 className="mt-5 flex text-center w-full justify-center items-center">
                نسخة معربة لتطبيق
              </h2>
            </CollapsibleContent>
            <CollapsibleContent>
              <h2 className="flex text-center w-full justify-center items-center">
                ChatGPT
              </h2>
            </CollapsibleContent>
            <CollapsibleContent>
              <h2 className="flex text-center w-full justify-center items-center">
                التابع لــ
              </h2>
            </CollapsibleContent>
            <CollapsibleContent>
              <h2 className="flex text-center w-full justify-center items-center">
                OpenAI
              </h2>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="shadow-md shadow-black bg-gray-900/20 select-none border  border-lime-50/20 hover:border-lime-50/60 w-full p-5 rounded-2xl">
            <CollapsibleTrigger className="hover:text-lime-500 group gap-5 w-full flex justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:border rounded-full p-1 border-lime-50/40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <h1 className="group-hover:underline ">من صنعه ؟</h1>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <h2 className="mt-5 flex text-center w-full justify-center items-center">
                Moncef Aissaoui
              </h2>
            </CollapsibleContent>
            <CollapsibleContent>
              <h2 className="flex text-center w-full justify-center items-center">
                ChatGPT
              </h2>
            </CollapsibleContent>
            <CollapsibleContent>
              <h2 className="flex text-center w-full justify-center items-center">
                19/02/2023
              </h2>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="shadow-md shadow-black bg-gray-900/20 select-none border  border-lime-50/20 hover:border-lime-50/60 w-full p-5 rounded-2xl">
            <CollapsibleTrigger className="hover:text-lime-500 group gap-5 w-full flex justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:border rounded-full p-1 border-lime-50/40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <h1 className="group-hover:underline ">ماذا استعمل ؟</h1>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <section className="flex-wrap mt-5 flex text-center w-full justify-center items-center gap-2">
                <div className=" bg-lime-500/20 text-lime-400 border border-lime-50/20 px-1 rounded-full hover:text-lime-300 hover:bg-lime-500/10 hover:border-lime-50/80 duration-100 transition-all">
                  Next Auth
                </div>
                <div className="bg-lime-500/20 text-lime-400 border border-lime-50/20 px-1 rounded-full hover:text-lime-300 hover:bg-lime-500/10 hover:border-lime-50/80 duration-100 transition-all">
                  Firebase +9
                </div>
                <div className="bg-lime-500/20 text-lime-400 border border-lime-50/20 px-1 rounded-full hover:text-lime-300 hover:bg-lime-500/10 hover:border-lime-50/80 duration-100 transition-all">
                  SWR
                </div>

                <div className="bg-lime-500/20 text-lime-400 border border-lime-50/20 px-1 rounded-full hover:text-lime-300 hover:bg-lime-500/10 hover:border-lime-50/80 duration-100 transition-all">
                  OpenAI API
                </div>

                <div className="bg-lime-500/20 text-lime-400 border border-lime-50/20 px-1 rounded-full hover:text-lime-300 hover:bg-lime-500/10 hover:border-lime-50/80 duration-100 transition-all">
                  TailwindCSS
                </div>

                <div className="bg-lime-500/20 text-lime-400 border border-lime-50/20 px-1 rounded-full hover:text-lime-300 hover:bg-lime-500/10 hover:border-lime-50/80 duration-100 transition-all">
                  next js 13.1 (beta)
                </div>
              </section>
            </CollapsibleContent>
          </Collapsible>
        </main>
        <footer className="flex justify-center items-center gap-5">
          <Link
            href={"https://github.com/modecode22"}
            className="group"
            aria-label="github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white/50 w-10 h-10 group-hover:fill-white duration-100 transition-all"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
          <Link
            href={"https://www.facebook.com/profile.php?id=100090251763624"}
            className="group"
            aria-label="facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-transparent fill-white/50 w-10 h-10 group-hover:fill-blue-600 duration-100 transition-all"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </Link>

          <Link href={"/contact"} className="group" aria-label="email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="stroke-transparent fill-white/50 w-10 h-10 group-hover:fill-red-600 duration-100 transition-all"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </Link>
        </footer>
      </main>
    </>
  );
}
