"use client";

import { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";
import EditModal from "./EditModal";
import GuestLIstButton from "./GuestLIstButton";

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
        <thead className="">
    



            <tr>

              <td className="text-accent">Items: {editedTag}</td>
              {isDisabled && (
                <td className="p-2 text-white font-medium  justify-self-end">
                  Note: Guest users can only edit/delete guest items
                </td>
              )}
              {!isDisabled && (
                <td className="justify-self-center">
                  <GuestLIstButton />
                </td>
              )}

            </tr>
         
        </thead>

        <tbody>
          {tableRows}
          </tbody>
      </table>
    </div>
  );
}
