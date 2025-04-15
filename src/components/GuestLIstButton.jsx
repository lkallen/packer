"use client";

import { useRouter } from "next/navigation";
import { addItem } from "@/actions/actions";
import { useState } from "react";

export default function GuestLIstButton() {
    const router = useRouter()
  const [itemData, setItemData] = useState({
    item: "sample item",
    tags: "guest",
  });

  function handleClick() {
    addItem(itemData);
    addItem(itemData);
    addItem(itemData);
    router.refresh();
  }

  return (
    <div>
      <button 
      className="btn btn-sm btn-soft btn-info text-white"
      onClick={() => handleClick()}>Generate Sample Items</button>
    </div>
  );
}
