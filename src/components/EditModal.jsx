"use client";
import { editItem } from "@/actions/actions";
import { useRouter } from "next/navigation";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export default function EditModal({ item, isDisabled }) {
  const router = useRouter();
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

  const [isError, setIsError] = useState(false);

  function handleConfirm() {
    if (itemObject.item === "") {
      setIsError(true);
      return;
    } else {
      setIsError(false);
      editItem(itemObject);
      setIsOpen(false);
    }
  }

  function handleCancel() {
    setIsError(false);
    setIsOpen(false);
    setItemObject({
      id: item.id,
      item: item.item,
    });
    router.refresh();
  }

  return (
    <div>
      <div></div>

      <div>
        <button
        
        disabled={isDisabled && true}
          onClick={() => setIsOpen(true)}

          className="btn btn-sm btn-soft btn-info text-white "
        >
          edit
        </button>

        <Dialog open={isOpen} onClose={() => ""} className="relative z-50">
          <div className="fixed inset-0 flex w-screen items-center justify-center">
            <DialogPanel className="bg-base-100 max-w-lg border border-info p-6 rounded-lg p-4">
              <DialogTitle className="p-2 justify-self-center">
                <div>Edit Item</div>
              </DialogTitle>

              <form>
                <div
                // className="p-2"
                >
                  <label htmlFor="item">Edit Item:</label>

                  <input
                    className="input input-accent"
                    type="text"
                    name="item"
                    value={itemObject.item}
                    onChange={handleChange}
                  />
                </div>
                {isError && <ErrorMessage />}
                <div className="flex justify-center gap-4 mt-4">
                  <button
                    className="btn btn-soft btn-info text-white"
                    onClick={(event) => {
                      event.preventDefault();

                      handleConfirm();
                    }}
                  >
                    Submit
                  </button>
                  <button
                    className="btn btn-soft btn-accent text-white"
                    onClick={() => handleCancel()}
                  >
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

