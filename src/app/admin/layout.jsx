import AddModal from "@/components/AddModal";
import AdminTabs from "@/components/AdminTabs";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function UserLayout({ children }) {
  return (
    <div className="border h-screen flex-col">
      <div>
        <NavBar />
      </div>

      <div className="border border-red-400 ">
        <AdminTabs />
      </div>

      <div>
        <AddModal />
        
      </div>

      <div className="border">{children}</div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
