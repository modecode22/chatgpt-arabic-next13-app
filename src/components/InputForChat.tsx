
const InputForChat = () => {
  return (
    <div className="gap-5 flex justify-center items-center shadow-md hover:shadow-sm duration-100 p-5 bg-black/60 w-full  rounded-2xl border border-lime-50/20 hover:border-lime-50/40">
      <div className="col-span-5 sm:col-span-6 w-full">
        <textarea
          name=""
          id=""
          placeholder="أكتب طلبك هنا"
          className="rounded-br-none resize-none focus:outline-none w-full h-full bg-gray-900/30 rounded-lg border border-lime-50/20 focus:border-lime-50/60 p-2"
        ></textarea>
      </div>
      <button className="self-end w-10 transition-all flex justify-center items-center col-span-2 sm:col-span-1  border p-1 rounded-lg  border-lime-50/20 bg-lime-400/70 hover:bg-lime-400/90 active:bg-lime-400 text-neutral-900 font-bold shadow-md shadow-lime-500/40 hover:shadow-lime-500/60 hover:border-lime-50/60 active:border-lime-50 active:shadow-lime-500 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default InputForChat