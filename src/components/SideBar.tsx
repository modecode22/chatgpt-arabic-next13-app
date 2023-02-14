import SideBarBtn from "./SideBarBtn";

const SideBar = () => {
  return (
    <div className="fixed top-0 bg-black/50 w-16 h-screen shadow-md border-r border-lime-50/20 hover:border-lime-50/50 duration-100 flex flex-col  items-center p-2 gap-2">
      <SideBarBtn name="A"/>
      <SideBarBtn name="B"/>
      <SideBarBtn name="C"/>
      <SideBarBtn name="D"/>
    </div>
  );
}

export default SideBar