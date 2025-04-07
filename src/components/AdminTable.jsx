"use client";

import { useState } from "react";
import DeleteButton from "./DeleteButton";
import EditModal from "./EditModal";

export default function AdminTable({ tag, allItems }) {
  const [filteredItems, setFilteredItems] = useState([]);

  const filteredData = allItems.filter((item) => item.tags.includes(tag));

  const tableRows = filteredData.map((item) => (
    <tr key={item.id}>
      <td className="w-3/4 ">{item.item}</td>
      <td className="flex  justify-between">
        <EditModal item={item} />

        <DeleteButton item={item} />
      </td>
    </tr>
  ));

  const firstLetter = tag.charAt(0).toUpperCase();
  const remainingLetters = tag.slice(1);
  const editedTag = firstLetter + remainingLetters;

  return (
    <div className="flex  rounded-box border border-info mb-12">
      <table className="table">
        <thead>
          <tr>
            <th className="text-accent ">Items: {editedTag}</th>
          </tr>
        </thead>

        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}
