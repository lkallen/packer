import AddItem from "@/components/AddItem";
import AdminTabs from "@/components/AdminTabs";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SideNav from "@/components/SideNav";

export default function UserLayout({ children }) {
  return (
    <div className="border h-screen flex-col">
      <div>
        <NavBar />
      </div>

      <div className="border border-red-400 ">
        <AdminTabs />
        
      </div>


<AddItem />


      <div className="border">{children}</div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
