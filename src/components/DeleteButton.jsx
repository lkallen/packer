"use client";

import { deleteItem } from "@/actions/actions";

export default function DeleteButton({ item, isDisabled }) {
  return (
    <div>
      <button className="btn btn-sm btn-soft btn-accent text-white" 
      disabled={isDisabled && true}
      onClick={() => deleteItem(item)}
      >
        delete
      </button>
    </div>
  );
}
