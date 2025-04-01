import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";
import { LuClipboardList } from "react-icons/lu";

export default function UserSteps() {
  return (
    <div className="flex-col justify-self-center">
      {/* <LuClipboardList /> */}
      {/* <IoMdCheckboxOutline /> */}
      {/* <FaPersonWalkingLuggage /> */}

      <div className="flex border rounded-md my-8">
        <div className="text-7xl p-4">
          <LuClipboardList />
        </div>
        <div className="w-full flex-col content-center  ">
          <div className="justify-self-center">Step 1</div>
          <div className="justify-self-center p-4">
            Create or edit your packing lists.
          </div>
        </div>
      </div>

      <div className="flex border rounded-md  my-8">
        <div className="text-7xl p-4">
          <IoMdCheckboxOutline />
        </div>
        <div className="w-full flex-col content-center  ">
          <div className="justify-self-center">Step 2</div>
          <div className="justify-self-center p-4">
            Mark off items as you pack.
          </div>
        </div>
      </div>

      <div className="flex border rounded-md my-8">
        <div className="text-7xl p-4">
          <FaPersonWalkingLuggage />
        </div>
        <div className=" w-full flex-col content-center  ">
          <div className="justify-self-center">Step 3</div>
          <div className="justify-self-center p-4">
            Travel assured of no items left behind.
          </div>
        </div>
      </div>
    </div>
  );
}
