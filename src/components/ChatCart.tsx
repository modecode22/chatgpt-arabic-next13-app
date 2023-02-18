import { db } from "@/firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCollection } from "react-firebase-hooks/firestore";

interface Props {
    id : string;
}
const ChatCart = ({id}:Props) => {
const router = useRouter()
const {data:session} = useSession()

const [messages] = useCollection(collection(db,"users",session?.user?.email!, "chats" , id, "messages"))

const removeChat = async()=>{
await deleteDoc(doc(db,"users", session?.user?.email!, "chats", id))
router.replace("/chats");
}

  return (
    <section className="  flex items-center justify-between px-5 gap-5 active:text-white active:bg-gray-700 select-none w-full bg-gray-900 p-2 rounded-xl border border-lime-50/20 shadow-md shadow-black hover:shadow-sm duration-100 hover:bg-gray-800 transition-all  ">
      <Link
        href={`/chat/${id}`}
        className="group hover:underline flex gap-5 active:text-lime-300 hover:text-lime-400 duration-100 transition-all"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6  group-active:text-lime-300 group-hover:text-lime-400 duration-100 transition-all"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </span>
        {messages?.docs[messages?.docs.length - 1]?.data().text ||
          "محادثة جديدة"}
      </Link>

      <span
        onClick={removeChat}
        className="cursor-pointer duration-100 transition-all hover:bg-red-900 p-1 rounded-2xl"
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hover:fill-red-500 duration-100 transition-all"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </span>
    </section>
  );
}

export default ChatCart