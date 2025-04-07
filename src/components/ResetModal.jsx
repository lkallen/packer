"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function ResetModal() {
  const [isOpen, setIsOpen] = useState(false);
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
              <div className="text-xl">Start New Packing Trip</div>
            </DialogTitle>

            <div>Are you sure you want to start packing for a new trip?</div>
            <div>Note: This will reset all items to 'not packed'</div>

            <div className="flex justify-center gap-4 mt-4">
              <button
                className="btn btn-soft btn-info text-white"
                //   onClick={() => handleSubmit()}
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
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
