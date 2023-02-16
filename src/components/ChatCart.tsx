interface Props {
    id : string;
}
const ChatCart = ({id}:Props) => {
  return (
    <section className="active:text-white active:bg-gray-700 select-none w-full bg-gray-900 p-2 rounded-xl border border-lime-50/20 shadow-md shadow-black hover:shadow-sm duration-100 hover:bg-gray-800 transition-all cursor-pointer ">
      {id}
    </section>
  );
}

export default ChatCart