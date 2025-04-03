"use client";

import { deleteItem } from "@/actions/actions";

export default function DeleteButton({ item }) {
  return (
    <div>
      <button className="btn btn-soft btn-accent text-white" onClick={() => deleteItem(item)}>
        delete
      </button>
    </div>
  );
}
