import React, { useEffect } from "react";
import { useFormik } from "formik";
import { comment } from "postcss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

type props = {
  isopen: boolean;
  isclose: () => void;
  selectedCustomer: any;
  view: boolean;
};

const AddCIA: React.FC<props> = ({
  isopen,
  isclose,
  selectedCustomer,
  view,
}) => {
  if (!isopen) return null;
  const handlef = () => {};
  useEffect(() => {
    handlef();
  }, []);

  const formik = useFormik({
    initialValues: {
      Taskid: selectedCustomer?.Taskid || "",
      Status: selectedCustomer?.Status || "",
      Description: selectedCustomer?.Description || "",
      Category: selectedCustomer?.Category || "",
      Requestedby: selectedCustomer?.Requestedby || "",
      Assignedto: selectedCustomer?.Assignedto || "",
      Callbackno: selectedCustomer?.Callbackno || "",
      projectregarding: selectedCustomer?.projectregarding || "",
      comment: selectedCustomer?.comment || "",
    },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        if (selectedCustomer?.id) {
          const resonponse = await axios.put(
            "http://localhost:3000/api/customer",
            values
          );
          console.log("response", resonponse);
          toast.success("Customer updated Successfully");
        } else {
          const resonponse = await axios.post(
            "http://localhost:3000/api/customer",
            values
          );
          console.log("response", resonponse);
          toast.success("Customer added Successfully");
        }
      } catch (error) {
        console.log(error);
        toast.success("Customer Added Successfully");
      }
    },
  });
  return (
    <div>
      <ToastContainer position="top-right" />
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <form onSubmit={formik.handleSubmit}>
          <div className="bg-white bg-opacity-95 p-5 rounded-lg shadow-lg max-w-7xl w-full h-3/5 m-1 flex flex-col text-white">
            <div className="flex flex-col ">
              <button
                onClick={isclose}
                className=" text-white p-2 rounded-md self-end "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 bg-red-600 rounded-lg p-1 text-white "
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-semibold self-center text-black font-serif">
              {view ? "View" : selectedCustomer?.id ? "Edit" : "Add"} CIA
            </h2>

            <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-md p-6 w-full min-w-full max-h-[60vh] overflow-y-auto">
              {/* Existing Customer Form Code */}

              <div className="flex flex-col gap-4 mt-6 w-full">
                <div className="flex flex-col md:flex-row gap-5 mb-4 w-full">
                  <div className="flex flex-col gap-1 w-full md:w-1/2">
                    <label className="text-gray-700 font-semibold">
                      Task ID
                    </label>
                    <input
                      id="Taskid"
                      name="Taskid"
                      type="text"
                      placeholder="Taskid"
                      onChange={formik.handleChange}
                      value={formik.values.Taskid}
                      disabled={view}
                      className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-gray-700 font-semibold">
                      Status
                    </label>
                    <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option defaultChecked>Select Status</option>
                      <option value={"john"}>John</option>
                      <option>Eric</option>
                      <option>Samuel</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mb-4 w-full">
                  <label className="text-gray-700 font-semibold">
                    Comments
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={2}
                    cols={50}
                    placeholder="Comments"
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                    disabled={view}
                    className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 w-full"
                  />
                </div>
              </div>
            </div>

            {!view && (
              <div className="flex flex-row justify-end items-center w-full mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-md mr-2 w-auto"
                  onClick={() => formik.handleSubmit}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white px-6 py-2 rounded-md w-auto"
                  onClick={() => {
                    formik.resetForm();
                    isclose();
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCIA;
