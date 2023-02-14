
interface Props {
    name: string;
    link?: string;
}




const SideBarBtn = ({name , link} : Props) => {
  return (
    <button className="group w-10 h-10 flex justify-center items-center border-2 border-lime-500/20 rounded-xl hover:border-lime-500  duration-100 bg-neutral-900 hover:bg-neutral-800 text-lime-50/80 hover:text-lime-50  shadow-md shadow-lime-500/10 hover:shadow-lime-500/40 active:text-white active:shadow-lg active:border-lime-400 active:bg-neutral-700 ">
      <span>{name}</span>
      <div className="absolute   left-16 bg-black/60 backdrop-blur-sm p-1 rounded-md border  border-lime-500/50 px-2 scale-0 group-hover:scale-100 group-hover:border-lime-500 group-active:border-lime-400 duration-200">
        {name}
      </div>
    </button>
  );
}

export default SideBarBtn