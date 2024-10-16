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
  project: any;
  fetchproject: () => void;
  resetPageToFirst: () => void;
  customer: any;
  employee: any;
};
const API_URL = import.meta.env.VITE_API_URL;
const AddProjectcia: React.FC<props> = ({
  isopen,
  isclose,
  selectedCustomer,
  view,

  fetchproject,
  resetPageToFirst,
  customer,
  project,
  employee,
}) => {
  if (!isopen) return null;
  const [isloading, setisloading] = useState(false);

  const formik = useFormik({
    initialValues: {
      project_ID: project.project_ID,
      requestedby: selectedCustomer?.requestedby || "",
      urgencylevel: selectedCustomer?.urgencylevel || "",
      category: selectedCustomer?.category || "",

      assignedto: selectedCustomer?.assignedto || "",
      status: selectedCustomer?.status || "",
      addedby: selectedCustomer?.addedby || "",
      comment: selectedCustomer?.comment || "",
      addedDate: selectedCustomer?.addedDate || "",
      callbackno: selectedCustomer?.callbackno || "",
    },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      setisloading(true);
      try {
        if (selectedCustomer?.task_ID) {
          const resonponse = await axios.put(
            `${API_URL}/ProjectCIA/${selectedCustomer.task_ID}`,
            values
          );
          console.log("response", resonponse);
          toast.success("Task updated Successfully");
        } else {
          const response = await axios.post(`${API_URL}/ProjectCIA`, values);

          toast.success("Task added Successfully");
        }
        fetchproject();
        resetPageToFirst();
        isclose();
      } catch (error) {
        console.log(error);
        toast.error("error");
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
              {view ? "View" : selectedCustomer?.task_ID ? "Edit" : "Add"}{" "}
              Project CIA
            </h2>
            <div className="flex flex-row position-relative my-4 gap-5">
              <div className="basis-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    disabled={view}
                  >
                    <option>Select Category</option>
                    <option value={"complaint"}>Complaint</option>
                    <option value={"inquiry"}>Inquiry</option>
                    <option value={"activity"}>Activity</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">Addedby</label>
                  <select
                    name="addedby"
                    value={formik.values.addedby}
                    onChange={formik.handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    disabled={view}
                  >
                    <option value="">Select a Added by</option>
                    {customer.map((item: any) => (
                      <option key={item.customer_ID} value={item.customer_ID}>
                        {item.firstName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Requestedby
                  </label>
                  <select
                    name="requestedby"
                    value={formik.values.requestedby}
                    onChange={formik.handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    disabled={view}
                  >
                    <option value="">Select a Customer</option>
                    {customer.map((item: any) => (
                      <option key={item.customer_ID} value={item.customer_ID}>
                        {item.firstName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Assigned to
                  </label>
                  <select
                    name="assignedto"
                    value={formik.values.assignedto}
                    onChange={formik.handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    disabled={view}
                  >
                    <option value="">Select a Assigned to</option>
                    {employee.map((item: any) => (
                      <option key={item.employee_ID} value={item.employee_ID}>
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
                  <label className="text-gray-700 font-semibold">Status</label>
                  <select
                    name="status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    disabled={view}
                  >
                    <option>Select status</option>
                    <option value={"Active"}>Active</option>
                    <option value={"onhold"}>onhold</option>
                    <option value={"rejected"}>rejected</option>
                    <option value={"completed"}>completed</option>
                    <option value={"waiting"}> waiting</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Urgency level
                  </label>
                  <select
                    name="urgencylevel"
                    value={formik.values.urgencylevel}
                    onChange={formik.handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    disabled={view}
                  >
                    <option>Select Urgency level</option>
                    <option value={"Critical"}>Critical</option>
                    <option value={"High"}>High</option>
                    <option value={"Low"}>Low</option>
                    <option value={"Unknown"}>Unknown</option>
                    <option value={"Neutral"}>Neutral</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Added date
                  </label>
                  <input
                    type="date"
                    name="addedDate"
                    value={formik.values.addedDate}
                    onChange={formik.handleChange}
                    disabled={view}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Callbackno
                  </label>
                  <input
                    type="tel"
                    name="callbackno"
                    value={formik.values.callbackno}
                    onChange={formik.handleChange}
                    disabled={view}
                    className="w-full p-2 border border-gray-300 rounded-md"
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
      {isloading && <CommonLoading />}
    </div>
  );
};

export default AddProjectcia;
