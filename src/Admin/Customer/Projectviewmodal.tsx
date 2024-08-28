import React from "react";
import { TiWarning } from "react-icons/ti";

type props = {
  isopen: boolean;
  isclose: () => void;
};
const Projectviewmodal: React.FC<props> = ({ isopen, isclose }) => {
  if (!isopen) return null;
  const data = [
    { project_id: "1", project_location: "colombo", status: "pending" },
    { project_id: "2", project_location: "colombo", status: "pending" },
    { project_id: "3", project_location: "colombo", status: "pending" },
    { project_id: "4", project_location: "colombo", status: "pending" },
    { project_id: "5", project_location: "colombo", status: "pending" },
  ];
  return (
    <div>
      <div className="fixed inset-0 flex justify-center items-center  ">
        <div className="flex flex-col w-1/4 h-1/4 bg-white rounded-lg border-x-2 border-y-2 border-black">
          <button onClick={isclose} className="self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 bg-slate-900 rounded-lg p-1 text-white m-1 flex self-end"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <table className="text-black border-collapse border-2">
            <thead>
              <tr>
                <td>Project Id</td>
                <td>Project Location</td>
                <td>Project Status</td>
              </tr>
            </thead>
            {/* {isloading ? (
              <div className="flex justify-center items-center">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            ) : (
              <> */}
            {data.map((item, index) => (
              <tbody id="index">
                <tr>
                  <td>{item.project_id}</td>
                  <td>{item.project_location}</td>
                  <td>{item.status}</td>
                </tr>
              </tbody>
            ))}
            {/* </>
            )} */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projectviewmodal;
