"use client"

import { db } from "@/firebase";
import { collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatCart from "./ChatCart";

const SavedChats = () => {
    const {data:session} = useSession()

    const [chats , loading , error] = useCollection(
        session && collection(db, "users", session.user?.email!, "chats")
    )


    
    console.log(
    );
    
  return (
    <main className="  shadow-md hover:shadow-sm duration-100 p-5 bg-black/60 w-full h-full rounded-2xl border border-lime-50/20 hover:border-lime-50/40 overflow-auto flex flex-col  items-center gap-2 ">
      {chats?.docs.map((chat) => (
        <ChatCart
          key={chat.id}
          id={
            chat.id as string
          }
        />
      ))}
    </main>
  );
}

export default SavedChats