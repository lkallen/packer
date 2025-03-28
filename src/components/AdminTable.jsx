"use client";

import { useState } from "react";
import EditItem from "./EditItem";
import DeleteButton from "./DeleteButton";

export default function AdminTable({ tag, allItems }) {
  const [filteredItems, setFilteredItems] = useState([]);

  const filteredData = allItems.filter((item) => item.tags.includes(tag));

  const tableRows = filteredData.map((item) => (
    <tr key={item.id}>
      <td>{item.item}</td>
      <td>{item.tags}</td>
      <td>
        <EditItem />
      </td>
      <td>
        <DeleteButton />
      </td>
    </tr>
  ));

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <td>crud</td>
              <td>crud</td>
            </tr>
          </thead>

          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
}
