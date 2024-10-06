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
  customer: any;
};
const API_URL = import.meta.env.VITE_API_URL;

const AddProject: React.FC<props> = ({
  isopen,
  isclose,
  selectedproject,
  view,
  fetchproject,
  resetPageToFirst,
  customer,
}) => {
  if (!isopen) return null;

  const formik = useFormik({
    initialValues: {
      customer: selectedproject?.customer_ID || "",
      Address: selectedproject?.Address || "",
      location: selectedproject?.location || "",
      Coordinator_ID: selectedproject?.coordinator || "",
      startdate: selectedproject?.startdate || "",
      warranty_period: selectedproject?.warranty_period || "",
      status: selectedproject?.status || "",
      estimatedcost: selectedproject?.estimatedcost || "",
      referencedby: selectedproject?.referencedby || "",
      comment: selectedproject?.comment || "",
    },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        if (selectedproject?.id) {
          const resonponse = await axios.put(
            `${API_URL}/Project/${selectedproject.Project_ID}`,
            values
          );

          toast.success("Project updated Successfully");
        } else {
          const response = await axios.post(`${API_URL}/Project`, values);

          toast.success("Project added Successfully");
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
          <div className="bg- bg-opacity-95 p-5 rounded-lg shadow-lg w-auto h-5/6 m-1 flex flex-col text-white ">
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
              {view ? "View" : selectedproject?.id ? "Edit" : "Add"} Projects
            </h2>
            <div className="flex flex-row gap-4 p-4 bg-white rounded-2xl shadow-md">
              <div className="basis-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Customer
                  </label>
                  <select
                    name="customer"
                    value={formik.values.customer}
                    onChange={formik.handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    disabled={view}
                  >
                    <option value="">Select a customer</option>
                    {customer.map((item: any) => (
                      <option key={item.customer_ID} value={item.customer_ID}>
                        {item.firstName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Description
                  </label>
                  <textarea
                    cols={50}
                    rows={2}
                    id="Address"
                    name="Address"
                    onChange={formik.handleChange}
                    value={formik.values.Address}
                    disabled={view}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    onChange={formik.handleChange}
                    value={formik.values.location}
                    disabled={view}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Coordinator
                  </label>
                  <select
                    name="Coordinator_ID"
                    value={formik.values.Coordinator_ID}
                    onChange={formik.handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    disabled={view}
                  >
                    <option value="">Select a coordinator</option>
                    {customer.map((item: any) => (
                      <option key={item.customer_ID} value={item.customer_ID}>
                        {item.firstName}
                      </option>
                    ))}
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
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startdate"
                    name="startdate"
                    onChange={formik.handleChange}
                    value={formik.values.startdate}
                    disabled={view}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Warranty Duration
                  </label>
                  <input
                    type="text"
                    id="warranty_period"
                    name="warranty_period"
                    onChange={formik.handleChange}
                    value={formik.values.warranty_period}
                    disabled={view}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">Status</label>
                  <select
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    id="status"
                    name="status"
                  >
                    <option>Select Status</option>
                    <option value={"Pending"}>Pending</option>
                    <option value={"Work in progress"}>Work in progress</option>
                    <option value={"Completed"}>Completed</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Estimated Cost
                  </label>
                  <input
                    type="number"
                    id="estimatedcost"
                    name="estimatedcost"
                    onChange={formik.handleChange}
                    value={formik.values.estimatedcost}
                    disabled={view}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Reference By
                  </label>
                  <select
                    name="referencedby"
                    value={formik.values.referencedby}
                    onChange={formik.handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    disabled={view}
                  >
                    <option value="">Select a reference</option>
                    {customer.map((item: any) => (
                      <option key={item.customer_ID} value={item.customer_ID}>
                        {item.firstName}
                      </option>
                    ))}
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
