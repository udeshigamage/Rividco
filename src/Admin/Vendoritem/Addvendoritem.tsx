import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { comment } from "postcss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { IoIosAdd } from "react-icons/io";

type props = {
  isopen: boolean;
  isclose: () => void;
  selecteditem: any;
  view: boolean;
};

const Addvendoritem: React.FC<props> = ({
  isopen,
  isclose,
  selecteditem,
  view,
}) => {
  if (!isopen) return null;

  const formik = useFormik({
    initialValues: {
      itemname: selecteditem?.item_name || "",
      Vendor: selecteditem?.Vendor || "",
      price: selecteditem?.Price || 0,
      warrantyduration: selecteditem?.Warranty_duration || "",
      capacity: selecteditem?.capacity || "",
      comment: selecteditem?.comments || "",
    },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        if (selecteditem?.id) {
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
              {view ? "View" : selecteditem?.id ? "Edit" : "Add"} Vendor Item
            </h2>

            <div className="flex flex-col gap-4 p-4 bg-white rounded-2xl shadow-md">
              {/* Existing Customer Form Code */}

              <div className="flex flex-col gap-4 mt-6">
                <div className="flex gap-5 mb-4">
                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">
                      Item Name
                    </label>
                    <input
                      id="itemname"
                      name="itemname"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.itemname}
                      disabled={view}
                      className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">
                      Vendor
                    </label>
                    <select className="border-2 border-gray-300 rounded-lg p-2 bg-white text-black focus:ring-2 focus:ring-blue-400">
                      <option value="vendor1">Vendor 1</option>
                      <option value="vendor2">Vendor 2</option>
                      <option value="vendor3">Vendor 3</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-5 mb-4">
                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">Price</label>
                    <input
                      id="price"
                      name="price"
                      type="number"
                      onChange={formik.handleChange}
                      value={formik.values.price}
                      disabled={view}
                      className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>

                <div className="flex gap-5 mb-4">
                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">
                      Warranty Duration
                    </label>
                    <input
                      type="text"
                      id="warrantyduration"
                      name="warrantyduration"
                      onChange={formik.handleChange}
                      value={formik.values.warrantyduration}
                      disabled={view}
                      className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">
                      Capacity
                    </label>
                    <input
                      id="capacity"
                      name="capacity"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.capacity}
                      disabled={view}
                      className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1 mb-4">
                  <label className="text-gray-700 font-semibold">
                    Comments
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={2}
                    cols={50}
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                    disabled={view}
                    className="border-2 border-gray-300 bg-white rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                  />
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

export default Addvendoritem;
