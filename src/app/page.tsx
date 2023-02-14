import InputForChat from "@/components/InputForChat";
import Messages from "@/components/Messages";
import SideBar from "@/components/SideBar";


export default function Home() {
  return (
    <>
      <SideBar />
      <main className="ml-16 p-5 h-full flex flex-col justify-center items-center gap-5">
        <Messages />
        <InputForChat />
      </main>
    </>
  );
}
