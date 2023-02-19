// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import admin from 'firebase-admin'
import { adminDb } from "@/firebaseAdmin";
import query from "@/lib/queryApi";
type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {prompt , chatId,model, session } = req.body;
if(!prompt){
    res.status(400).json({answer: "Please provide a prompt"})
return
}
if (!prompt) {
  res.status(400).json({ answer: "Please provide a Valid chat Id" });
  return;
}

// ChatGpt Query 
const response = await query(prompt, model);


const message: Message = {
  text: response || "chatGpt cannot find a chat",
  createdAt: admin.firestore.Timestamp.now(),
  user: {
    _id: "ChatGpt",
    name: "ChatGpt",
    avatar:
      "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
  },
};
await adminDb.collection("users").doc(session?.user?.email).collection("chats").doc(chatId).collection("messages").add(message)
  res.status(200).json({ answer: message.text });
}
