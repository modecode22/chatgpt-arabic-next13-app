import InputForChat from "@/components/InputForChat";
import Messages from "@/components/Messages";


type Props = {
  params:{
    id: string
  }
}
const ChatPage = ({params:{id}}:Props) => {
  return (
    <>
      <Messages chatId={id} />
      <InputForChat chatId={id} />
    </>
  );
};

export default ChatPage;
