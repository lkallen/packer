import AddModal from "@/components/AddModal";
import AdminTabs from "@/components/AdminTabs";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function UserLayout({ children }) {
  return (
    <div className=" h-screen flex-col">
      <div className="">
        <NavBar />
      </div>
      {/* <div className="border flex w-1/8 justify-self-end">add</div> */}

      <div className=" flex w-screen  h-full fixed">
        <div className=" ">
          <AdminTabs />
        </div>

        

        <div className="m-12 h-3/4  w-full overflow-y-scroll">
        
        {children}</div>
      </div>

      {/* <div className="">
        <Footer />
      </div> */}
    </div>
  );
}
