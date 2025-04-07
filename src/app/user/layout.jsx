import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ResetModal from "@/components/ResetModal";
import SideNav from "@/components/SideNav";

export default function UserLayout({ children }) {
  return (
    <div className=" h-screen flex-col">
      <div className="">
        <NavBar />
      </div>
  <div className="flex justify-self-end mr-4">
       <ResetModal />
      </div>

      <div className=" flex w-screen  h-full fixed">
        <div className=" ">
        <SideNav />
        </div>
      
        <div className="mt-2 w-full h-3/4 overflow-y-scroll">{children}</div>
      </div>

      {/* <div className="">
        <Footer />
      </div> */}
    </div>
  );
}
