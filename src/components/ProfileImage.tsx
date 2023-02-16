"use client"
import { useSession } from "next-auth/react";

const ProfileImage = () => {
      const { data: session } = useSession();

  return (
    <button className="group mb-10 transition-all w-10 h-10 flex justify-center items-center border-2 border-lime-500/20  hover:border-lime-500  duration-100 bg-gray-900 hover:bg-gray-800 text-lime-50/80 hover:text-lime-50  shadow-md shadow-lime-500/10 hover:shadow-lime-500/40 active:text-white active:shadow-lg active:border-lime-400 active:bg-gray-700 rounded-full">
      {session && (
        <img
          src={session.user?.image!}
          alt="user image"
          className="rounded-full opacity-50 group-hover:opacity-100 duration-100 transition-all"
        />
      )}
      <div className="flex justify-center items-center w-max h-8 text-center absolute   left-16 bg-black/60 backdrop-blur-sm p-1 rounded-md border  border-lime-500/50 px-2 scale-0 group-hover:scale-100 group-hover:border-lime-500 group-active:border-lime-400 duration-200 ">
        {session ? session.user?.name! : "you"}
      </div>
    </button>
  );
}

export default ProfileImage