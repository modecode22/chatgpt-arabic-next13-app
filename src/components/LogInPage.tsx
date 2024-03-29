import LogInAnime from "./LogInAnime";
import LogInBtn from "./LogInBtn";

const LogInPage = () => {
  return (
    <main className=" flex flex-col justify-center items-center w-screen h-screen ">
      <section className="overflow-hidden backdrop-blur-md flex flex-col justify-around items-center transition-all w-80 aspect-[8/10] shadow-md hover:shadow-lg duration-100 p-5 bg-black/60  rounded-2xl border border-lime-50/20 hover:border-lime-500/50">
        <header className="font-bold text-2xl text-center flex flex-col justify-center items-center gap-5">
      <h1>مرحبا بك في تطبيق </h1>
          <h1 className="text-6xl">Fake gpt</h1>
        </header>
        <div className="screen-overlay"></div>
        <LogInBtn />
      </section>
      <LogInAnime />
    </main>
  );
}

export default LogInPage