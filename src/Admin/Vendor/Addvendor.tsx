import React, { useState } from "react";
import { useFormik } from "formik";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import CommonLoading from "../../Utils/Commonloading";

type props = {
  isopen: boolean;
  isclose: () => void;
  selectedCustomer: any;
  view: boolean;
  fetchcustomer: () => void;
  resetPageToFirst: () => void;
};
const API_URL = import.meta.env.VITE_API_URL;
const Addvendor: React.FC<props> = ({
  isopen,
  isclose,
  selectedCustomer,
  view,
  fetchcustomer,
  resetPageToFirst,
}) => {
  if (!isopen) return null;
  const [isloading, setisloading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: selectedCustomer?.firstName || "",
      lastName: selectedCustomer?.lastName || "",
      email: selectedCustomer?.email || "",
      address: selectedCustomer?.address || "",
      comment: selectedCustomer?.comment || "",
      category: selectedCustomer?.category || "",
      mobileno: selectedCustomer?.mobileno || "",
      officeno: selectedCustomer?.officeno || "",
    },
    onSubmit: async (values) => {
      setisloading(true);
      try {
        if (selectedCustomer?.vendor_ID) {
          const resonponse = await axios.put(
            `${API_URL}/Vendor/${selectedCustomer.vendor_ID}`,
            values
          );
          console.log("response", resonponse);
          toast.success("Customer updated Successfully");
          resetPageToFirst();
          fetchcustomer();
        } else {
          const resonponse = await axios.post(`${API_URL}/Vendor`, values);
          console.log("response", resonponse);
          toast.success("Customer added Successfully");
          resetPageToFirst();
          fetchcustomer();
        }
      } catch (error) {
        console.log(error);
        toast.success("Customer Added Successfully");
      } finally {
        setTimeout(() => setisloading(false), 1000);
      }
    },
  });
  return (
    <div>
      <ToastContainer position="top-right" />
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <form onSubmit={formik.handleSubmit}>
          <div className="bg-[#183642] bg-opacity-95 p-5 rounded-lg shadow-lg w-[800px] h-[650px] m-1 flex flex-col text-white ">
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
              {view ? "View" : selectedCustomer?.vendor_ID ? "Edit" : "Add"}{" "}
              Vendor
            </h2>
            <div className="flex flex-col gap-4 p-4 bg-white rounded-2xl w-[750px] h-[500px] shadow-md">
              {/* Existing Customer Form Code */}

              <div className="flex flex-col gap-4 mt-6">
                <div className="flex gap-5 mb-4">
                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      disabled={view}
                      className="border-2  border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-gray-700 font-semibold">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      disabled={view}
                      className="border-2 border-gray-300  rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
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
                      className="border-2 border-gray-300  rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
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
                      className="border-2 border-gray-300 rounded-lg p-2  focus:ring-2 focus:ring-blue-400"
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
                      className="border-2 border-gray-300  rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1 mb-4">
                  <label className="text-gray-700 font-semibold">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    rows={2}
                    cols={50}
                    placeholder="Enter Address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    disabled={view}
                    className="border-2 border-gray-300  rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </div>

            {!view && (
              <div className="flex flex-row position-relative justify-end items-end align-bottom self-end">
                <button
                  type="submit"
                  className="bg-blue-500  px-4 py-2 rounded-md mr-2 mt-2"
                  onClick={() => {
                    formik.handleSubmit;
                  }}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500  px-4 py-2 rounded-md mt-2"
                  onClick={isclose}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
      {isloading && <CommonLoading />}
    </div>
  );
};

export default Addvendor;
