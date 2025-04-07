"use client";
import { GoAlert } from "react-icons/go";
import { useRouter } from "next/navigation";
import { resetAllItems } from "@/actions/actions";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function ResetModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function handleConfirm() {
    resetAllItems();
    router.refresh();
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-sm btn-soft btn-accent text-white"
      >
        New Trip
      </button>

      <Dialog open={isOpen} onClose={() => ""} className="relative z-50">
        <div className="fixed  inset-0 flex mt-20 self-start  justify-center ">
          <DialogPanel className="bg-base-100 border border-accent rounded-lg p-20 justify-self-center  mt-10">
            <DialogTitle className="p-2 justify-self-center">
              <div className="text-xl mb-2">Start New Trip</div>
            </DialogTitle>

            <form>
              <div className="justify-self-center flex items-center gap-1">
                <div className="text-xl">
                  <GoAlert />
                </div>
                <div>Are you sure?</div>
              </div>
              <div className="mt-2">
                This will reset all items to 'not packed'
              </div>

              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="btn btn-soft btn-info text-white"
                  onClick={() => handleConfirm()}
                >
                  Confirm
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
