"use client";

import { deleteItem } from "@/actions/actions";

export default function DeleteButton({ item }) {
  return (
    <div>
      <button className="btn btn-xs" onClick={() => deleteItem(item)}>
        delete
      </button>
    </div>
  );
}
