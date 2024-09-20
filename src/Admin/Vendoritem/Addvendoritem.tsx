import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

type Props = {
  isopen: boolean;
  isclose: () => void;
  selecteditem: any;
  view: boolean;
  fetchitem: () => void;
  resetPageToFirst: () => void;
  vendor: any;
};

const API_URL = import.meta.env.VITE_API_URL;

const Addvendoritem: React.FC<Props> = ({
  isopen,
  isclose,
  selecteditem,
  view,
  fetchitem,
  resetPageToFirst,
  vendor,
}) => {
  if (!isopen) return null;

  const formik = useFormik({
    initialValues: {
      item_name: selecteditem?.item_name || "",
      vendor_ID: selecteditem?.vendor_ID || "", // Corrected from vendor_ID
      price: selecteditem?.Price || 0,
      warranty_duration: selecteditem?.Warranty_duration || "",
      capacity: selecteditem?.capacity || "",
      comment: selecteditem?.comments || "",
      brand: selecteditem?.brand || "", // New field
      product_code: selecteditem?.product_code || "", // New field
    },

    onSubmit: async (values) => {
      try {
        if (selecteditem?.vendoritem_ID) {
          const response = await axios.put(
            `${API_URL}/Vendoritem/${selecteditem.vendoritem_ID}`,
            values
          );
          toast.success("Vendor item updated successfully!");
        } else {
          const response = await axios.post(`${API_URL}/Vendoritem`, values);
          toast.success("Vendor item added successfully!");
        }
        fetchitem();
        resetPageToFirst();
        isclose();
      } catch (error) {
        console.error(error);
        toast.error("Failed to save vendor item.");
      }
    },
  });

  return (
    <div>
      <ToastContainer position="top-right" />
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <form onSubmit={formik.handleSubmit}>
          <div className="bg-slate-900 bg-opacity-95 p-5 rounded-lg shadow-lg w-auto h-5/6 m-1 flex flex-col text-white">
            <div className="flex flex-col">
              <button
                onClick={isclose}
                className="text-white p-2 rounded-md self-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 0 24"
                  fill="currentColor"
                  className="size-7 bg-red-600 rounded-lg p-1 text-white"
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
              {view ? "View" : selecteditem?.vendoritem_ID ? "Edit" : "Add"}{" "}
              Vendor Item
            </h2>

            <div className="flex flex-col gap-4 p-4 bg-white rounded-2xl shadow-md">
              <div className="flex flex-col gap-4 mt-6">
                {/* Item Name and Vendor Dropdown */}
                <div className="flex gap-5 mb-4">
                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">
                      Item Name
                    </label>
                    <input
                      id="item_name"
                      name="item_name"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.item_name}
                      disabled={view}
                      className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="flex gap-5 mb-4">
                    <div className="flex flex-col gap-1 w-1/2">
                      <label className="text-gray-700 font-semibold">
                        Brand
                      </label>
                      <input
                        id="brand"
                        name="brand"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.brand}
                        disabled={view}
                        className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                      />
                    </div>

                    <div className="flex flex-col gap-1 w-1/2">
                      <label className="text-gray-700 font-semibold">
                        Product Code
                      </label>
                      <input
                        id="product_code"
                        name="product_code"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.product_code}
                        disabled={view}
                        className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">
                      Vendor
                    </label>
                    <select
                      name="vendor_ID"
                      value={formik.values.vendor_ID}
                      onChange={formik.handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                      disabled={view}
                    >
                      <option value="">Select a vendor</option>
                      {vendor.map((item: any) => (
                        <option key={item.vendor_ID} value={item.vendor_ID}>
                          {item.firstName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Price */}
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

                {/* Warranty Duration & Capacity */}
                <div className="flex gap-5 mb-4">
                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">
                      Warranty Duration
                    </label>
                    <input
                      type="text"
                      id="warranty_duration"
                      name="warranty_duration"
                      onChange={formik.handleChange}
                      value={formik.values.warranty_duration}
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

                {/* Comments */}
                <div className="flex flex-col gap-1 mb-4">
                  <label className="text-gray-700 font-semibold">
                    Comments
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={2}
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                    disabled={view}
                    className="border-2 border-gray-300 bg-white rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            {!view && (
              <div className="flex flex-row justify-end mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
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

export default Addvendoritem;
