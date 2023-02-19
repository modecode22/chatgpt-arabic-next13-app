import SelectModel from "@/components/SelectModel";

const page = () => {
  return (
    <>
      <main className="  shadow-md hover:shadow-sm duration-100 p-5 bg-black/60 w-full h-full rounded-2xl border border-lime-50/20 hover:border-lime-50/40 overflow-auto flex flex-col  items-center justify-between gap-2 ">
        <section className="w-full felx justify-center items-center gap-5">
          <h1 className="w-full text-center">
            اسم النموذج
          </h1>

          <SelectModel />
        </section>
      </main>
    </>
  );
}

export default page