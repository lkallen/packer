"use client";

import { useState } from "react";
import Toggle from "./Toggle";

export default function Table({ tag, allItems }) {
  const [filteredItems, setFilteredItems] = useState([]);

  const filteredData = allItems.filter((item) => item.tags.includes(tag));

  const tableRows = filteredData.map((item) => (
    <tr key={item.id}>
      <td>{item.item}</td>
      <td><Toggle item={item} /></td>
    </tr>
  ));

  const firstLetter = tag.charAt(0).toUpperCase();
  const remainingLetters = tag.slice(1);
  const editedTag = firstLetter + remainingLetters;

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        <thead>
          <tr>
            <th>{editedTag}</th>
            <th>Packed</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}
