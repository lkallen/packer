import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SideNav from "@/components/SideNav";

export default function UserLayout({ children }) {
  return (
    <div className="border h-screen flex-col">
      <div>
        <NavBar />
      </div>

      <div className=" flex w-screen border border-red-400 h-full fixed">
        <SideNav />
        <div className="border w-full overflow-scroll">{children}</div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
