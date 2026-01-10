import MainHeader from "./main-header";
import NavHeader from "./nav-header";

export default function Navbar() {
  return (
    <header className="bg-[#EFF3FA] pt-7.5 pb-12.5 w-full">
      <NavHeader />
      <MainHeader />
    </header>
  );
}
