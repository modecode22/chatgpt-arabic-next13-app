"use client"
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {
  chatId: string;
};

const InputForChat = ({ chatId }:Props) => {
 const [prompt, setPrompt] = useState("")
 const {data:session}= useSession()

 //  TODO "useSWR to get model "
 const model = "text-davinci-003";


 const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   if (!prompt) return;



   const input = prompt.trim();
   setPrompt("");

   const message: Message = {
     text: input,
     createdAt: serverTimestamp(),
     user: {
       _id: session?.user?.email!,
       name: session?.user?.name!,
       avatar:
         session?.user?.image! ||
         `https://ui-avatars.com/api/?name=${session?.user?.name}`,
     },
   };

   await addDoc(
     collection(
       db,
       "users",
       session?.user?.email!,
       "chats",
       chatId,
       "messages"
     ),
     message
   );

   //toast notification to say loading
   const notification = toast.loading("ChatGpt is thinking ...", {
     style: {
       borderRadius: "10px",
       background: "#333",
       color: "#fff",
     },
   });

   await fetch("/api/askQuestion", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       prompt: input,
       chatId,
       model,
       session,
     }),
   }).then(() => {
     // toast notification to say successful
     toast.success("ChatGpt has Responded!", {
       id: notification,
       style: {
         borderRadius: "10px",
         background: "#333",
         color: "#fff",
       },
     });
   });
 };
  
  
  return (
    <form
      onSubmit={sendMessage}
      className="gap-5 flex justify-center items-center shadow-md hover:shadow-sm duration-100 p-5 bg-black/60 w-full  rounded-2xl border border-lime-50/20 hover:border-lime-50/40"
    >
      <main className="w-full bg-gray-900/30 rounded-xl border border-lime-500/30 focus:border-lime-500/80 flex p-1">
        <input
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          type={"text"}
          placeholder="أكتب طلبك هنا"
          className="rounded-br-none resize-none focus:outline-none w-full h-full bg-transparent rounded-lg   p-2"
        />
        <button
          type="submit"
          className="hover:bg-gray-900 hover:border place-self-end hover:border-lime-50/20 duration-100   self-end  w-10 h-8 transition-all flex justify-center items-center col-span-2 sm:col-span-1   p-1 rounded-lg   "
        >
          <svg
            className="w-5"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </main>
    </form>
  );
};

export default InputForChat;
