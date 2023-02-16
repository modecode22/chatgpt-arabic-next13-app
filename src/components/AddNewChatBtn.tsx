"use client"

import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AddNewChatBtn = () => {
    const router = useRouter()
    const {data: session} = useSession()

const addNewChat = async()=>{
    const doc = await addDoc(collection(db , "users" ,session?.user?.email! , "chats"), {
        userId: session?.user?.email!,
        createdAt: serverTimestamp()
    })

    router.push(`/chat/${doc.id}`)
}

  return (
    <button
      onClick={addNewChat}
      className="group transition-all w-10 h-10 flex justify-center items-center border-2 border-lime-500/20 rounded-xl hover:border-lime-500  duration-100 bg-gray-900 hover:bg-gray-800 text-lime-50/80 hover:text-lime-50  shadow-md shadow-lime-500/10 hover:shadow-lime-500/40 active:text-white active:shadow-lg active:border-lime-400 active:bg-gray-700 "
    >
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
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <div className="flex justify-center items-center w-max h-8 text-center absolute   left-16 bg-black/60 backdrop-blur-sm p-1 rounded-md border  border-lime-500/50 px-2 scale-0 group-hover:scale-100 group-hover:border-lime-500 group-active:border-lime-400 duration-200 ">
        Add New Chat
      </div>
    </button>
  );
}

export default AddNewChatBtn