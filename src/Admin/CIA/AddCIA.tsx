import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { comment } from "postcss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { IoIosAdd } from "react-icons/io";

type props = {
  isopen: boolean;
  isclose: () => void;
  selectedCustomer: any;
  view: boolean;
};

const AddProject: React.FC<props> = ({
  isopen,
  isclose,
  selectedCustomer,
  view,
}) => {
  if (!isopen) return null;

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
          <div className="bg-slate-900 bg-opacity-95 p-5 rounded-lg shadow-lg w-auto h-5/6 m-1 flex flex-col text-white ">
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
            <h2 className="text-2xl font-semibold self-center font-serif">
              {view ? "View" : selectedCustomer?.id ? "Edit" : "Add"} CIA
            </h2>
            <div className="flex flex-row gap-4 p-4 bg-white rounded-2xl shadow-md">
              <div className="basis-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Category
                  </label>
                  <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option defaultChecked>Select Category</option>
                    <option value={"john"}>John</option>
                    <option>Eric</option>
                    <option>Samuel</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Description
                  </label>
                  <textarea
                    cols={50}
                    rows={2}
                    id="description"
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.Description}
                    disabled={view}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Project reguarding
                  </label>
                  <input
                    type="text"
                    id="projectregarding"
                    name="projectregarding"
                    onChange={formik.handleChange}
                    value={formik.values.projectregarding}
                    disabled={view}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Requested BY
                  </label>
                  <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option defaultChecked>Select Customer</option>
                    <option>John</option>
                    <option>Eric</option>
                    <option>Samuel</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Comments
                  </label>
                  <textarea
                    cols={50}
                    rows={2}
                    id="comment"
                    name="comment"
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                    disabled={view}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="basis-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Callback no
                  </label>
                  <input
                    type="tel"
                    id="Callbacknp"
                    name="Callbackno"
                    onChange={formik.handleChange}
                    value={formik.values.Callbackno}
                    disabled={view}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Assign to
                  </label>
                  <input
                    type="text"
                    id="Assignedto"
                    name="Assignedto"
                    onChange={formik.handleChange}
                    value={formik.values.Assignedto}
                    disabled={view}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">Status</label>
                  <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option defaultChecked>Select Status</option>
                    <option>Pending</option>
                    <option>Work in progress</option>
                    <option>Completed</option>
                  </select>
                </div>
              </div>
            </div>
            {!view && (
              <div className="flex flex-row position-relative justify-end items-end align-bottom self-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => {
                    formik.handleSubmit;
                  }}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    formik.resetForm;
                    isclose;
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

export default AddProject;
