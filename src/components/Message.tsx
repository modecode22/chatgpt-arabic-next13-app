import { DocumentData } from "firebase/firestore"


type Props = {
    message: DocumentData
}

const Message = ({message}:Props) => {

    const isChatGpt = message.user.name === "ChatGpt"

    return (
    <section className={`flex gap-5 my-2 p-1 rounded-2xl ${isChatGpt&& "bg-lime-900/20 "}`}>

<img src={message.user.avatar} alt=""className="rounded-full w-8 h-8" />
<p>
    {message.text}
</p>
    </section>
  )
}

export default Message