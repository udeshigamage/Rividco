import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { comment } from "postcss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { IoIosAdd } from "react-icons/io";
import Projectviewmodal from "./Projectviewmodal";

type props = {
  isopen: boolean;
  isclose: () => void;
  selectedCustomer: any;
  view: boolean;
};

const AddCustomermodal: React.FC<props> = ({
  isopen,
  isclose,
  selectedCustomer,
  view,
}) => {
  if (!isopen) return null;
  const [modelopen, setmodelopen] = useState(false);
  const handleOpenModal = () => {
    setmodelopen(true);
  };
  const handleCLoseModal = () => {
    setmodelopen(false);
  };
  const formik = useFormik({
    initialValues: {
      FirstName: selectedCustomer?.FirstName || "",
      LastName: selectedCustomer?.LastName || "",
      email: selectedCustomer?.email || "",
      Address: selectedCustomer?.Address || "",
      category: selectedCustomer?.category || "",
      comment: selectedCustomer?.comment || "",
      mobileno: selectedCustomer?.mobileno || "",
      officeno: selectedCustomer?.officeno || "",
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
              {view ? "View" : selectedCustomer?.id ? "Edit" : "Add"} Customer
            </h2>
            <div className="flex flex-col gap-4 p-4 bg-white rounded-2xl shadow-md">
              {/* Existing Customer Form Code */}

              <div className="flex flex-col gap-4 mt-6">
                <div className="flex gap-5 mb-4">
                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">
                      First Name
                    </label>
                    <input
                      id="FirstName"
                      name="FirstName"
                      type="text"
                      placeholder="First Name"
                      onChange={formik.handleChange}
                      value={formik.values.FirstName}
                      disabled={view}
                      className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">
                      Last Name
                    </label>
                    <input
                      id="LastName"
                      name="LastName"
                      type="text"
                      placeholder="Last Name"
                      onChange={formik.handleChange}
                      value={formik.values.LastName}
                      disabled={view}
                      className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>

                <div className="flex gap-5 mb-4">
                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      disabled={view}
                      className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      onChange={formik.handleChange}
                      value={formik.values.category}
                      disabled={view}
                      className="border-2 border-gray-300 rounded-lg p-2 bg-white focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="category">Category</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-5 mb-4">
                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">
                      Mobile No
                    </label>
                    <input
                      id="mobileno"
                      name="mobileno"
                      type="tel"
                      placeholder="(+94) 767 123 456"
                      onChange={formik.handleChange}
                      value={formik.values.mobileno}
                      disabled={view}
                      className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">
                      Office No
                    </label>
                    <input
                      id="officeno"
                      name="officeno"
                      type="tel"
                      placeholder="(+94) 767 123 456"
                      onChange={formik.handleChange}
                      value={formik.values.officeno}
                      disabled={view}
                      className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1 mb-4">
                  <label className="text-gray-700 font-semibold">Address</label>
                  <textarea
                    id="Address"
                    name="Address"
                    rows={2}
                    cols={50}
                    placeholder="Enter Address"
                    onChange={formik.handleChange}
                    value={formik.values.Address}
                    disabled={view}
                    className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                  />
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
                    placeholder="Comments"
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                    disabled={view}
                    className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
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
            {view && (
              <button
                className="text-slate-800 bg-white p-3  font-bold  rounded-lg  w-1/2"
                onClick={() => {
                  handleOpenModal();
                }}
              >
                {" "}
                See project Details
                <span className="text-red-600 animate-aurora pl-3">
                  {">> >>"}
                </span>
              </button>
            )}
          </div>
        </form>
      </div>
      {modelopen && (
        <Projectviewmodal isopen={modelopen} isclose={handleCLoseModal} />
      )}
    </div>
  );
};

export default AddCustomermodal;
