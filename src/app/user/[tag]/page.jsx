import { getAllItems } from "@/actions/actions";
import Table from "@/components/Table";

export default async function TableByTag({ params }) {
  const allItems = await getAllItems();
  const { tag } = await params;
  return (
    <div>
      <Table tag={tag} allItems={allItems} />
    </div>
  );
}
