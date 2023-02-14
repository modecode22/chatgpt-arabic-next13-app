
const InputForChat = () => {
  return (
    <div className="gap-5 grid grid-cols-7 shadow-md hover:shadow-sm duration-100 p-5 bg-black/60 w-full h-36 rounded-2xl border border-lime-50/20 hover:border-lime-50/40">
   
      <div className="col-span-6">
        <textarea
          name=""
          id=""
          className=" focus:outline-none w-full h-full bg-neutral-900 rounded-lg border border-lime-50/20 focus:border-lime-50/60 p-2"
        ></textarea>
      </div>
         <button className="col-span-1 self-start border p-1 rounded-lg  border-lime-50/20 bg-lime-400/70 hover:bg-lime-400/90 active:bg-lime-400 text-neutral-900 font-bold shadow-md shadow-lime-500/40 hover:shadow-lime-500/60 hover:border-lime-50/60 active:border-lime-50 active:shadow-lime-500 ">
        send
      </button>
    </div>
  );
}

export default InputForChat