"use client"
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import AIMessage from "./AIMessage";
import MeMessage from "./MeMessage";
import Message from "./Message";
type Props = {
  chatId:string
}

const Messages = ({chatId}:Props) => {
  const {data:session} = useSession()
  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ), orderBy("createdAt", "asc")
      )
  );
  return (
    <div className="  shadow-md hover:shadow-sm duration-100 p-5 bg-black/60 w-full h-full rounded-2xl border border-lime-50/20 hover:border-lime-50/40 overflow-auto">
      {messages?.empty && (
        <section className="h-full flex  flex-col justify-center items-center w-full ">
          <h1>للحصول على محادثة ادخل نصك من هنا</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className="w-8 h-8 transition-all animate-bounce mt-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </section>
      )}

      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
}

export default Messages