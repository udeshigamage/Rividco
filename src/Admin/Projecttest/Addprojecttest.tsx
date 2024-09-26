import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { comment } from "postcss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { IoIosAdd } from "react-icons/io";

type props = {
  isopen: boolean;
  isclose: () => void;
  selectedproject: any;
  view: boolean;
  fetchproject: () => void;
  resetPageToFirst: () => void;
  project: any;
};
const API_URL = import.meta.env.VITE_API_URL;
const AddProjecttest: React.FC<props> = ({
  isopen,
  isclose,
  selectedproject,
  view,
  fetchproject,
  resetPageToFirst,
  project,
}) => {
  if (!isopen) return null;

  const formik = useFormik({
    initialValues: {
      FirstName: selectedproject?.FirstName || "",
      LastName: selectedproject?.LastName || "",
      email: selectedproject?.email || "",
      Address: selectedproject?.Address || "",
      category: selectedproject?.category || "",
      comment: selectedproject?.comment || "",
      mobileno: selectedproject?.mobileno || "",
      officeno: selectedproject?.officeno || "",
    },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        if (selectedproject?.id) {
          const resonponse = await axios.put(
            `${API_URL}/Projecttest/${selectedproject.projecttest_ID}`,
            values
          );
          console.log("response", resonponse);
          toast.success("Customer updated Successfully");
        } else {
          const response = await axios.post(`${API_URL}/Projecttest`, values);

          toast.success("Customer added Successfully");
        }
        fetchproject();
        resetPageToFirst();
        isclose();
      } catch (error) {
        console.log(error);
        toast.error("error");
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
              {view ? "View" : selectedproject?.id ? "Edit" : "Add"} Project
              item
            </h2>
            <div className="flex flex-row position-relative my-4 gap-5">
              <div className="flex flex-row position-relative">
                <label className=" w-2/5 flex  items-center">Customer</label>
                <select>
                  <option>First Name</option>
                  <option>First Name</option>
                  <option>First Name</option>
                </select>
              </div>

              <div className="flex flex-row position-relative">
                <label className=" w-1/2 flex  items-center">Description</label>
                <textarea
                  id="comment"
                  name="comment"
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                  disabled={view}
                  className="border-2  border-black w-4/5 rounded-lg p-2 m-3 flex  justify-items-start"
                />
              </div>
            </div>

            <div className="flex flex-row position-relative mb-4 gap-2">
              <div className="flex flex-row position-relative">
                <label className=" w-2/5 flex  items-center ">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  disabled={view}
                  className="border-2  border-black w-4/5 rounded-lg p-2 m-3 flex  justify-items-start"
                />
              </div>

              <div className="flex flex-row position-relative gap-3">
                <label className=" w-1/2 flex  items-center ">Category</label>
                <select
                  className="border-2 text-white border-black w-[160px] h-[44px] rounded-lg p-2 mt-4"
                  name="category"
                  id="category"
                  onChange={formik.handleChange}
                  disabled={view}
                  value={formik.values.category}
                >
                  <option value="category">Category</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row position-relative mb-4 gap-2">
              <div className="flex flex-row position-relative">
                <label className=" w-2/5 flex  items-center ">Mobile no</label>
                <input
                  type="tel"
                  placeholder="(+94) 767 123 456"
                  id="mobileno"
                  name="mobileno"
                  onChange={formik.handleChange}
                  value={formik.values.mobileno}
                  disabled={view}
                  className="border-2  border-black w-3/4 rounded-lg p-2 flex  justify-items-start"
                />
              </div>

              <div className="flex flex-row position-relative">
                <label className=" w-1/2 flex  items-center ">Office no</label>
                <input
                  id="officeno"
                  name="officeno"
                  onChange={formik.handleChange}
                  value={formik.values.officeno}
                  type="tel"
                  placeholder="(+94) 767 123 456"
                  disabled={view}
                  className="border-2 text-white border-black w-3/4 rounded-lg p-2"
                />
              </div>
            </div>
            <div className="flex flex-row position-relative mb-4">
              <label className=" w-1/6 flex  items-center">Address</label>
              <textarea
                id="Address"
                name="Address"
                onChange={formik.handleChange}
                value={formik.values.Address}
                rows={2}
                cols={50}
                disabled={view}
                placeholder="Enter Address"
                className="border-2  text-white border-black w-3/4 rounded-lg  p-2"
              />
            </div>
            <div className="flex flex-row position-relative mb-4">
              <label className=" w-1/6 flex  items-center ">Comments</label>
              <textarea
                id="comment"
                name="comment"
                onChange={formik.handleChange}
                value={formik.values.comment}
                rows={2}
                cols={50}
                placeholder="Comments"
                disabled={view}
                className="border-2  text-white border-black w-3/4 rounded-lg p-2 flex  justify-items-start"
              />
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

export default AddProjecttest;
