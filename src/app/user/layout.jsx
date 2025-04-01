import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SideNav from "@/components/SideNav";

export default function UserLayout({ children }) {
  return (
    <div className=" h-screen flex-col">
      <div className="border-b border-info pb-2 mb-2">
        <NavBar />
      </div>

      <div className=" flex w-screen  h-full fixed">
        <div className=" ">
        <SideNav />
        </div>
      
        <div className="m-12 w-full overflow-scroll ">{children}</div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
