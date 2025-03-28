import { getAllItems } from "@/actions/actions";
import AddModal from "@/components/AddModal";
import AdminTable from "@/components/AdminTable";

export default async function AdminTableByTag({ params }) {
  const allItems = await getAllItems();
  const { tag } = await params;

  return (
    <div>
      {/* <div>
        <AddModal tag={tag} />
      </div> */}
      <AdminTable tag={tag} allItems={allItems} />
    </div>
  );
}
