import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";

const System = () => {
  const data = [
    { id: 1, customer_name: "john Williams", contact_no: "+94760305481" },
    { id: 2, customer_name: "john Williams", contact_no: "+94760305481" },
    { id: 3, customer_name: "john Williams", contact_no: "+94760305481" },
    { id: 4, customer_name: "john Williams", contact_no: "+94760305481" },
    { id: 5, customer_name: "john Williams", contact_no: "+94760305481" },

    { id: 6, customer_name: "john Williams", contact_no: "+94760305481" },
    { id: 7, customer_name: "john Williams", contact_no: "+94760305481" },
  ];
  return (
    <div className="flex-1 bg-slate-900   ">
      <div className="flex flex-col justify-center items-center h-screen">
        {" "}
        <div className="flex flex-row position-relative gap-[600px]">
          <h1 className="text-4xl font-serif text-white p-2">Customers</h1>
          <button className="text-white pt-3 rounded-lg">
            {" "}
            <IoIosAdd
              size={40}
              className="text-slate-900 bg-white bg-opacity-50 rounded-lg m-2"
            />
          </button>
        </div>
        <table className="text-slate-900  font-serif  text-lg border-collapse border border-slate-900 bg-white bg-opacity-50 rounded-lg">
          <thead className="font-extrabold bg-white bg-opacity-35 rounded-lg">
            <tr>
              <th className="border-collapse border border-slate-900 border-x-2 border-y-2 p-5 w-28">
                id
              </th>
              <th className="border-collapse border border-slate-900 border-x-2 border-y-2 w-72">
                Name
              </th>
              <th className="border-collapse border border-slate-900 border-x-2 border-y-2 w-52">
                Contactnumber
              </th>
              <th className="border-collapse border border-slate-900 border-x-2 border-y-2 w-52 ">
                Actions
              </th>
            </tr>
          </thead>

          {data.map((item, index) => (
            <tbody
              key={index}
              className="border-collapse border font-semibold font-mono border-slate-900 border-x-1 border-y-1 text-center align-middle "
            >
              <tr className="border-collapse border border-slate-900 border-x-1 border-y-1">
                <td className="border-collapse border border-slate-900 border-x-1 border-y-1">
                  {item.id}
                </td>
                <td className="border-collapse border border-slate-900 border-x-1 border-y-1">
                  {item.customer_name}
                </td>
                <td>{item.contact_no}</td>
                <td className="border-collapse border border-slate-900 border-x-1 border-y-1 text-start m-2 ">
                  <div className="flex flex-row position-relative flex flex-row justify-center items-center">
                    <button className=" text-slate-900 p-1 rounded-lg m-2 ">
                      <FaEdit className="pt-1" />
                    </button>
                    <button className=" text-slate-900 p-1 rounded-lg m-2 ">
                      <FaDeleteLeft className="pt-1" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default System;
