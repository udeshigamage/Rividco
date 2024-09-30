import React from "react";
import { useFormik } from "formik";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


type props = {
  isopen: boolean;
  isclose: () => void;
  selectedproject: any;
  view: boolean;
  fetchproject: () => void;
  resetPageToFirst: () => void;
  vendor: any;
  project: any;
};
const API_URL = import.meta.env.VITE_API_URL;
const AddProjectitem: React.FC<props> = ({
  isopen,
  isclose,
  selectedproject,
  view,
  fetchproject,
  resetPageToFirst,
  vendor,
  project,
}) => {
  if (!isopen) return null;

  const formik = useFormik({
    initialValues: {
      project_ID: project.project_ID,

      added_Date: selectedproject?.added_Date || "",
      added_by: selectedproject?.added_by || "",

      comment: selectedproject?.comment || "",
      serialno: selectedproject?.serialno || "",
      warranty_duration: selectedproject?.warranty_duration || "",
      vendoritem_ID: selectedproject?.vendoritem?.vendoritem_ID || "",
    },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        if (selectedproject?.projectitem_ID) {
          const resonponse = await axios.put(
            `${API_URL}/Projectitem/${selectedproject.projectitem_ID}`,
            values
          );

          toast.success("Customer updated Successfully");
        } else {
          const response = await axios.post(`${API_URL}/Projectitem`, values);

          toast.success("Customer added Successfully");
        }
        fetchproject();
        resetPageToFirst();
        isclose();
      } catch (error) {
        console.log(error);
        toast.error("Failes to save project");
      }
    },
  });
  return (
    <div>
      <ToastContainer position="top-right" />
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <form onSubmit={formik.handleSubmit}>
          <div className="bg-[#183642] bg-opacity-95 p-5 rounded-lg shadow-lg w-auto h-5/6 m-1 flex flex-col text-white ">
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
              {view ? "View" : selectedproject?.projectitem_ID ? "Edit" : "Add"}{" "}
              Project item
            </h2>
            <div className="flex flex-row position-relative my-4 gap-5">
              <div className="flex flex-row position-relative w-1/2">
                <label className=" w-2/5 flex  items-center ">Vendoritem</label>
                <select
                  name="vendoritem_ID"
                  value={formik.values.vendoritem_ID}
                  onChange={formik.handleChange}
                  className="w-full h-[50px] p-2 m-5 border w-3/5  border-gray-300 rounded-md"
                  required
                  disabled={view}
                >
                  <option value="">Select a Vendoritem</option>
                  {vendor.map((item: any) => (
                    <option key={item.vendoritem_ID} value={item.vendoritem_ID}>
                      {item.item_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-row position-relative w-1/2">
                <label className=" w-2/5 flex  items-center">
                  Warranty duration
                </label>
                <input
                  id="warranty_duration"
                  name="warranty_duration"
                  onChange={formik.handleChange}
                  value={formik.values.warranty_duration}
                  type="text"
                  disabled={view}
                  placeholder="Enter warranty"
                  className="border-2  text-white border-black w-3/5 h-[50px] rounded-lg mt-5  p-2"
                />
              </div>
            </div>

            <div className="flex flex-row position-relative mb-4 gap-2">
              <div className="flex flex-row position-relative w-1/2">
                <label className=" w-2/5 flex  items-center ">Added date</label>
                <input
                  type="date"
                  placeholder="Added date"
                  id="added_Date"
                  name="added_Date"
                  onChange={formik.handleChange}
                  value={formik.values.added_Date}
                  disabled={view}
                  className="border-2  border-black w-3/5 h-[50px] rounded-lg p-2 flex  justify-items-start mt-5"
                />
              </div>
              <div className="flex flex-row position-relative w-1/2">
                <label className=" w-2/5 flex  items-center ">Added by</label>
                <select
                  name="added_by"
                  value={formik.values.added_by}
                  onChange={formik.handleChange}
                  className="w-full h-[50px] p-2 m-5 border  border-gray-300 rounded-md"
                  required
                  disabled={view}
                >
                  <option value="">Select a Vendoritem</option>
                  {vendor.map((item: any) => (
                    <option key={item.vendoritem_ID} value={item.vendoritem_ID}>
                      {item.item_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-row position-relative">
              <label className=" w-1/5 flex  items-center ">Serial No</label>
              <input
                id="serialno"
                name="serialno"
                onChange={formik.handleChange}
                value={formik.values.serialno}
                type="text"
                placeholder="serial no"
                disabled={view}
                className="border-2 text-white border-black w-4/5 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-row position-relative mb-4">
              <label className=" w-1/5 flex  items-center">Description</label>
              <textarea
                id="comment"
                name="comment"
                onChange={formik.handleChange}
                value={formik.values.comment}
                disabled={view}
                className="border-2  border-black w-4/5 rounded-lg p-2 m-3 flex  justify-items-start"
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

export default AddProjectitem;
