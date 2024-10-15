import React, { useState } from "react";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

import Projectviewmodal from "./Projectviewmodal";
import CommonLoading from "../../Utils/Commonloading";
const API_URL = import.meta.env.VITE_API_URL;
type props = {
  isopen: boolean;
  isclose: () => void;
  selectedCustomer: any;
  view: boolean;
  fetchcustomer: () => void;
  resetPageToFirst: () => void;
};

const AddCustomermodal: React.FC<props> = ({
  isopen,
  isclose,
  selectedCustomer,
  view,
  fetchcustomer,
  resetPageToFirst,
}) => {
  if (!isopen) return null;
  const [modelopen, setmodelopen] = useState(false);
  const [isloading, setisloading] = useState(false);

  const handleOpenModal = () => {
    setmodelopen(true);
  };
  const handleCLoseModal = () => {
    setmodelopen(false);
  };

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
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      address: Yup.string().required("Required"),
      mobileno: Yup.string()
        .required("Required")
        .matches(/^(?:\+94|0)7[0-9]{8}$/, "Invalid mobile number"),
      officeno: Yup.string()
        .required("Required")
        .matches(/^(?:\+94|0)7[0-9]{8}$/, "Invalid office number"),
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setisloading(true);
      try {
        if (selectedCustomer?.customer_ID) {
          const resonponse = await axios.put(
            `${API_URL}/Customer/${selectedCustomer.customer_ID}`,
            values
          );

          toast.success("Customer updated Successfully");
        } else {
          const resonponse = await axios.post(`${API_URL}/Customer`, values);
          console.log("response", resonponse);

          toast.success("Customer added Successfully");
        }
        resetPageToFirst();
        fetchcustomer();
        isclose();
      } catch (error) {
        console.log(error);
        toast.error("Error");
      } finally {
        setTimeout(() => setisloading(false), 1000);
      }
    },
  });
  return (
    <div>
      <div className="fixed inset-0 flex justify-center items-center bg-[#183642] bg-opacity-50">
        <form onSubmit={formik.handleSubmit}>
          <div className="bg-[#183642] bg-opacity-95 p-5 rounded-lg shadow-lg w-[800px] h-[720px] m-1 flex flex-col text-white ">
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
              {view ? "View" : selectedCustomer?.customer_ID ? "Edit" : "Add"}{" "}
              Customer
            </h2>
            <div className="flex flex-col gap-4 p-4 bg-white rounded-2xl w-[750px] h-[600px] shadow-md">
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
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      disabled={view}
                      className="border-2 text-white bg-black border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                    {formik.errors.firstName &&
                      formik.touched.firstName &&
                      typeof formik.errors.firstName === "string" && (
                        <span role="alert" className="text-red-500 text-sm">
                          {formik.errors.firstName}
                        </span>
                      )}
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
                      onBlur={formik.handleBlur}
                      disabled={view}
                      className="border-2 border-gray-300 text-white bg-black rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                    {formik.errors.lastName &&
                      formik.touched.lastName &&
                      typeof formik.errors.lastName === "string" && (
                        <span role="alert" className="text-red-500 text-sm">
                          {formik.errors.lastName}
                        </span>
                      )}
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
                      onBlur={formik.handleBlur}
                      disabled={view}
                      className="border-2 border-gray-300 text-white bg-black rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                    {formik.errors.email &&
                      formik.touched.email &&
                      typeof formik.errors.email === "string" && (
                        <span role="alert" className="text-red-500 text-sm">
                          {formik.errors.email}
                        </span>
                      )}
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
                      onBlur={formik.handleBlur}
                      disabled={view}
                      className="border-2 border-gray-300 rounded-lg p-2 text-white bg-black focus:ring-2 focus:ring-blue-400"
                    />
                    {formik.errors.mobileno &&
                      formik.touched.mobileno &&
                      typeof formik.errors.mobileno === "string" && (
                        <span role="alert" className="text-red-500 text-sm">
                          {formik.errors.mobileno}
                        </span>
                      )}
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
                      onBlur={formik.handleBlur}
                      disabled={view}
                      className="border-2 border-gray-300 text-white bg-black rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                    />
                    {formik.errors.officeno &&
                      formik.touched.officeno &&
                      typeof formik.errors.officeno === "string" && (
                        <span role="alert" className="text-red-500 text-sm">
                          {formik.errors.officeno}
                        </span>
                      )}
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
                    onBlur={formik.handleBlur}
                    disabled={view}
                    className="border-2 border-gray-300 text-white bg-black rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                  />
                  {formik.errors.address &&
                    formik.touched.address &&
                    typeof formik.errors.address === "string" && (
                      <span role="alert" className="text-red-500 text-sm">
                        {formik.errors.address}
                      </span>
                    )}
                </div>
              </div>
            </div>

            {!view && (
              <div className="flex flex-row position-relative justify-end items-end align-bottom self-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 mt-2"
                  onClick={() => {
                    formik.handleSubmit;
                  }}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mt-2"
                  onClick={isclose}
                >
                  Cancel
                </button>
              </div>
            )}
            {view && (
              <button
                className="text-[#183642] bg-white bg-opacity-50 p-3  font-bold  rounded-lg mt-2 w-1/3"
                onClick={() => {
                  handleOpenModal();
                }}
              >
                {" "}
                See project Details
                <span className="text-red-600 animate-aurora pl-3 mt-2">
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
      {isloading && <CommonLoading />}
    </div>
  );
};

export default AddCustomermodal;
