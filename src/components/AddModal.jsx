"use client";

import { useRouter } from "next/navigation";

import { addItem } from "@/actions/actions";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function AddModal({ tag }) {
  const router = useRouter();

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

  const tags = [
    "clothing",
    "toiletries",
    "medications",
    "electronics",
    "critical",
    "miscellaneous",
  ];

  const optionsElements = tags.map((tag) => (
    <option key={tag} value={tag}>
      {tag}
    </option>
  ));

  function handleTagChange(value) {
    setItemData((prev) => {
      return {
        ...prev,
        tags: value,
      };
    });
  }

  function handleSubmit() {
    addItem(itemData);
    router.refresh();
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-sm btn-soft btn-accent text-white"
      >
        Add Item
      </button>

      <Dialog open={isOpen} onClose={() => ""} className="relative z-50">
        <div className="fixed  inset-0 flex mt-20 self-start  justify-center ">
          <DialogPanel className="bg-base-100 border border-accent rounded-lg p-20 justify-self-center  mt-10">
            <DialogTitle className="p-2 justify-self-center">
              <div className="text-xl">Add New Item</div>
            </DialogTitle>

            <form>
              <div>
                <label htmlFor="item">Item:</label>

                <input
                  className="input input-info"
                  type="text"
                  name="item"
                  placeholder="enter item"
                  onChange={handleItemChange}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="tags">Category:</label>
                <select
                  defaultValue="Select Category"
                  className="select border border-info"
                  onChange={(event) => handleTagChange(event.target.value)}
                >
                  <option disabled={true}>Select Category</option>
                  {optionsElements}
                </select>
              </div>

              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="btn btn-soft btn-info text-white"
                  onClick={() => handleSubmit()}
                >
                  Submit
                </button>
                <button
                  className="btn btn-soft btn-accent text-white"
                  onClick={() => setIsOpen(false)}
                >
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
