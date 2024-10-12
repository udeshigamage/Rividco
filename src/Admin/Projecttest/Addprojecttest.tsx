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
  project: any;
  employee: any;
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
  employee,
}) => {
  if (!isopen) return null;

  const formik = useFormik({
    initialValues: {
      project_ID: project.project_ID,
      test_name: selectedproject?.test_name || "",
      result: selectedproject?.result || "",
      conductedby: selectedproject?.conductedby || "",
      conducteddate: selectedproject?.conducted_date || "",
      comment: selectedproject?.comment || "",
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
              Test
            </h2>
            <div className="flex flex-row ">
              <div className="basis-1/2">
                <div className="flex flex-row position:relative mt-2">
                  <label className="text-lg font-semibold m-2">Test Name</label>
                  <input
                    type="text"
                    id="test_name"
                    name="test_name"
                    value={formik.values.test_name}
                    onChange={formik.handleChange}
                    className="border border-gray-300 rounded-md p-2 w-[200px] h-[50px] ml-6"
                  />
                </div>
                <div className="flex flex-row position:relative my-2">
                  <label className="text-lg font-semibold m-2">
                    conducted by
                  </label>
                  <select
                    id="conductedby"
                    name="conductedby"
                    value={formik.values.conductedby}
                    onChange={formik.handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    disabled={view}
                  >
                    <option value="">Select a coordinator</option>
                    {employee.map((item: any) => (
                      <option key={item.employee_ID} value={item.employee_ID}>
                        {item.firstName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-row position:relative">
                  <label className="text-lg font-semibold m-2">Comment</label>
                  <textarea
                    id="comment"
                    rows={4}
                    cols={50}
                    name="comment"
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    className="border border-gray-300 rounded-md p-2 w-[200px] h-[50px] ml-9"
                  />
                </div>
              </div>
              <div className="basis-1/2">
                <div className="flex flex-row position:relative mt-2">
                  <label className="text-lg font-semibold m-2 mr-9">
                    Result
                  </label>
                  <input
                    type="text"
                    id="result"
                    name="result"
                    value={formik.values.result}
                    onChange={formik.handleChange}
                    className="border border-gray-300 rounded-md p-2 w-[200px] h-[50px] ml-12"
                  />
                </div>
                <div className="flex flex-row position:relative my-2">
                  <label className="text-lg font-semibold m-2">
                    Conducted date
                  </label>
                  <input
                    type="date"
                    id="conducteddate"
                    name="conducteddate"
                    value={formik.values.conducteddate}
                    onChange={formik.handleChange}
                    className="border border-gray-300 rounded-md p-2 w-[200px] h-[50px]"
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

export default AddProjecttest;
