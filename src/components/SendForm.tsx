"use client"

import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

const SendForm = () => {


    const router = useRouter()
    const {data:session} = useSession()
const [input, setInput] = useState({
    email: "",
    message:""
})



const HandleSub = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      await addDoc(
      collection(
        db,
        "contact",
        session?.user?.email!,"email"
        ), input)


            const notification = toast.success("رسالتك وصلت ... شكرا", {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });

            router.push("/")
setInput({
  email: "",
  message: "",
});
};

  return (
    <form
      onSubmit={HandleSub}
      className="  shadow-md hover:shadow-sm duration-100 p-5 bg-black/60 w-full h-full rounded-2xl border border-lime-50/20 hover:border-lime-50/40 overflow-auto flex flex-col  items-center justify-between gap-2 "
    >
      <header className="w-full h-full flex flex-col justify-center items-center gap-5">
        <input
          type="text"
          value={input.email}
          onChange={(e) => {
            setInput({ ...input, email: e.target.value });
          }}
          placeholder="إيميلك"
          className="w-full rounded-lg p-2 bg-gray-900 border border-lime-50/40 focus:outline-none focus:border-lime-50 duration-100 transition-all "
          name=""
          id=""
        />

        <textarea
          onChange={(e) => {
            setInput({ ...input, message: e.target.value });
          }}
          value={input.message}
          placeholder="رسالتك لي"
          className="resize-none w-full h-72 rounded-lg p-2 bg-gray-900 border border-lime-50/40 focus:outline-none focus:border-lime-50 duration-100 transition-all "
          name=""
          id=""
        />
      </header>
      <main className="w-full">
        <button className="flex justify-center items-center gap-5 group hover:text-lime-500 active:text-lime-300 bg-gray-900  w-full h-10 rounded-2xl border border-lime-50/20  shadow-md shadow-black hover:shadow-sm hover:border-lime-500  duration-100 transition-all hover:bg-gray-900/90 active:shadow-lg active:border-lime-300 active:bg-gray-700  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <h1>ارسال</h1>
        </button>
      </main>
    </form>
  );
}

export default SendForm