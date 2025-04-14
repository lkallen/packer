"use client";

import { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";
import EditModal from "./EditModal";

export default function AdminTable({ tag, allItems }) {
  const [filteredItems, setFilteredItems] = useState([]);

  const filteredData = allItems.filter((item) => item.tags.includes(tag));

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (tag === "guest") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [tag]);

  const tableRows = filteredData.map((item) => (
    <tr key={item.id}>
      <td className="w-3/4 ">{item.item}</td>
      <td className="flex  justify-between">
        <EditModal item={item} isDisabled={isDisabled} />

        <DeleteButton item={item} isDisabled={isDisabled} />
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
            <th className="text-accent flex justify-between">
              <div>Items: {editedTag}</div>
              {isDisabled && (
                <div className="text-white font-medium">
                  Note: Guests can only edit/delete guest items
                </div>
              )}
            </th>
          </tr>
        </thead>

        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}
