import React from "react";
import { TiWarning } from "react-icons/ti";

type props = {
  isopen: boolean;
  isclose: () => void;
};
const DeleteConfirmationmodal: React.FC<props> = ({ isopen, isclose }) => {
  if (!isopen) return null;
  return (
    <div>
      <div className="fixed inset-0 flex justify-center items-center  ">
        <div className="flex flex-col w-1/4 h-1/4 bg-red-200 rounded-lg border-x-2 border-y-2 border-red-500">
          <button onClick={isclose} className="self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 bg-red-600 rounded-lg p-1 text-white  m-1 flex self-end"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <TiWarning size={80} className="text-red-600  self-center" />
          <h1 className="text-black text-lg font-serif m-1 self-center">
            {" "}
            Are you sure you want to delete?
          </h1>
          <div className="flex flex-row justify-center items-center">
            <button className="text-white bg-slate-900 p-2 rounded-lg m-2 text-lg font-serif">
              Yes
            </button>
            <button
              className="text-white bg-slate-900  p-2 rounded-lg m-2 text-lg font-serif"
              onClick={isclose}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationmodal;
