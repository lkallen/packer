"use client";
import { editItem } from "@/actions/actions";
import { useRouter } from "next/navigation";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function EditModal({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const [itemObject, setItemObject] = useState({
    id: item.id,
    item: item.item,
  });

  function handleChange(event) {
    setItemObject((prev) => {
      return {
        ...prev,
        item: event.target.value,
      };
    });
  }

  return (
    <div>
      <div></div>

      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-sm btn-soft btn-info text-white "
        >
          edit
        </button>

        <Dialog open={isOpen} onClose={() => ""} className="relative z-50">
          <div className="fixed inset-0 flex w-screen items-center justify-center">
            <DialogPanel className="bg-base-100 max-w-lg border  rounded-lg p-4">
              <DialogTitle className="p-2 justify-self-center">
                <div>Edit Item</div>
              </DialogTitle>

              <form>
                <div
                // className="p-2"
                >
                  <label htmlFor="item">Edit Item:</label>

                  <input
                    className="input input-primary"
                    type="text"
                    name="item"
                    value={itemObject.item}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    className="btn"
                    onClick={() => {
                      editItem(itemObject);
                      setIsOpen(false);
                    }}
                  >
                    Submit
                  </button>
                  <button className="btn" onClick={() => setIsOpen(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
