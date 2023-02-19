"use client"

import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatCart from "./ChatCart";

const SavedChats = () => {
    const {data:session} = useSession()

    const [chats, loading, error] = useCollection(
      session && query(collection(db, "users", session.user?.email!, "chats"), orderBy("createdAt","asc"))
    );


    

  return (
    <main className="  shadow-md hover:shadow-sm duration-100 p-5 bg-black/60 w-full h-full rounded-2xl border border-lime-50/20 hover:border-lime-50/40 overflow-auto flex flex-col  items-center gap-2 ">
      {loading && (
        <div className="w-full flex items-center justify-center flex-col gap-2">
          <div className="bg-gray-900 p-2 rounded-lg h-8 w-full">
            <div className="rounded-2xl w-full h-full bg-gray-800/80 transition-all animate-pulse"></div>
          </div>
          <div className="bg-gray-900 p-2 rounded-lg h-8 w-full">
            <div className="rounded-2xl w-full h-full bg-gray-800/80 transition-all animate-pulse"></div>
          </div>

          <div className="bg-gray-900 p-2 rounded-lg h-8 w-full">
            <div className="rounded-2xl w-full h-full bg-gray-800/80 transition-all animate-pulse"></div>
          </div>
          <div className="bg-gray-900 p-2 rounded-lg h-8 w-full">
            <div className="rounded-2xl w-full h-full bg-gray-800/80 transition-all animate-pulse"></div>
          </div>
          <div className="bg-gray-900 p-2 rounded-lg h-8 w-full">
            <div className="rounded-2xl w-full h-full bg-gray-800/80 transition-all animate-pulse"></div>
          </div>
          <div className="bg-gray-900 p-2 rounded-lg h-8 w-full">
            <div className="rounded-2xl w-full h-full bg-gray-800/80 transition-all animate-pulse"></div>
          </div>
          <div className="bg-gray-900 p-2 rounded-lg h-8 w-full">
            <div className="rounded-2xl w-full h-full bg-gray-800/80 transition-all animate-pulse"></div>
          </div>
          <div className="bg-gray-900 p-2 rounded-lg h-8 w-full">
            <div className="rounded-2xl w-full h-full bg-gray-800/80 transition-all animate-pulse"></div>
          </div>
          <div className="bg-gray-900 p-2 rounded-lg h-8 w-full">
            <div className="rounded-2xl w-full h-full bg-gray-800/80 transition-all animate-pulse"></div>
          </div>
        </div>
      )}

      {chats?.docs.map((chat) => (
        <ChatCart key={chat.id} id={chat.id as string} />
      ))}
    </main>
  );
}

export default SavedChats