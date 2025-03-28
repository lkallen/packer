import { getAllItems } from "@/actions/actions";
import AdminTable from "@/components/AdminTable";

export default async function AdminTableByTag({ params }) {
  const allItems = await getAllItems();
  const { tag } = await params;

  return (
    <div>
      <AdminTable tag={tag} allItems={allItems} />
    </div>
  );
}
