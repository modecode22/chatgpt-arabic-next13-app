"use client"
import {signOut} from 'next-auth/react'

const LogOutBtn = () => {
  return (
    <button onClick={()=>{
        signOut();
    }} className=" group transition-all w-10 h-10 flex justify-center items-center border-2 border-red-500/20 rounded-xl hover:border-red-500  duration-100 bg-gray-900 hover:bg-gray-800 text-red-50/80 hover:text-red-50  shadow-md shadow-red-500/10 hover:shadow-red-500/40 active:text-white active:shadow-lg active:border-red-400 active:bg-gray-700 ">
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
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
        />
      </svg>
      <div className="flex justify-center items-center w-max h-8 text-center absolute   left-16 bg-black/60 backdrop-blur-sm p-1 rounded-md border  border-red-500/50 px-2 scale-0 group-hover:scale-100 group-hover:border-red-500 group-active:border-red-400 duration-200 ">
        خروج
      </div>
    </button>
  );
}

export default LogOutBtn