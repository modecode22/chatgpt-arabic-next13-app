"use client"
import { useSession } from "next-auth/react";

const MeMessage = () => {
  const {data:session} = useSession()
  return (
    <div className="w-full gap-5 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        {session && (
          <div className="overflow-hidden w-8 h-8 bg-gradient-to-b from-black to-lime-500   rounded-full ">
            <img src={session.user?.image!} alt="user image" />
          </div>
        )}

        <h1 className="text-center">{session ? session.user?.name! : "you"}</h1>
      </div>

      <div className="w-full border h-full p-2 rounded-xl rounded-tl-none border-lime-50/20">
        dgbesdrfgersd gee^rs dgpesr^dpger^pg e^rpg 
      </div>
    </div>
  );
}

export default MeMessage