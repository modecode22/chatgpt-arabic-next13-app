import AIMessage from "./AIMessage";
import MeMessage from "./MeMessage";
type Props = {
  chatId:string
}

const Messages = ({chatId}:Props) => {
  return (
    <div className="  shadow-md hover:shadow-sm duration-100 p-5 bg-black/60 w-full h-full rounded-2xl border border-lime-50/20 hover:border-lime-50/40 overflow-auto">
      <MeMessage />
      <AIMessage />
      <MeMessage />
      <AIMessage />
      <MeMessage />
      <AIMessage />
      <MeMessage />
      <AIMessage />
      <MeMessage />
      <AIMessage />
    </div>
  );
}

export default Messages