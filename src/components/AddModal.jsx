"use client";

import { addItem } from "@/actions/actions";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function AddModal({ tag }) {
  const [isOpen, setIsOpen] = useState(false);
  const [itemData, setItemData] = useState({});

  function handleItemChange(event) {
    setItemData((prev) => {
      return {
        ...prev,
        item: event.target.value,
      };
    });
  }

  // incoming tag param can be used to set default
  // or jsut have dropdown options to change

  function handleTagChange(event) {
    setItemData((prev) => {
      return {
        ...prev,
        tags: event.target.value,
      };
    });
  }

  function handleSubmit() {
    addItem(itemData);
  }

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="btn">
        Add Item
      </button>

      <Dialog open={isOpen} onClose={() => ""} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="max-w-lg border  rounded-lg p-4">
            <DialogTitle className="p-2 justify-self-center">
              <div>Add New Item</div>
            </DialogTitle>

            <form>
              <div
              // className="p-2"
              >
                <label htmlFor="item">Item:</label>

                <input
                  className="input input-primary"
                  type="text"
                  name="item"
                  placeholder="enter item"
                  onChange={handleItemChange}
                />
              </div>

              <div>
                <label htmlFor="tags">Category:</label>
                <input
                  className="input input-primary"
                  type="text"
                  name="tags"
                  placeholder="enter category"
                  onChange={handleTagChange}
                />
              </div>

              <div className="flex justify-center gap-4">
                <button className="btn" onClick={() => handleSubmit()}>
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
  );
}
