import React, { useEffect, useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import AddCustomermodal from "./AddCIA";
import DeleteConfirmationmodal from "../../Utils/DeleteConfirmationmodal";
import axios from "axios";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import { toast } from "react-toastify";
import AddCIA from "./AddCIA";
import { comment } from "postcss";

const CIAmain = () => {
  const customers = [
    {
      Taskid: 1,
      Category: "Installation",
      Requestedby: "Anderson Solar Solutions",
      Addedby: "liamanderson",
      Addeddate: "2025-02-12",
      Status: "Pending",
      Assignedto: "Residential Client",
      Callbackno: "+94760123456",
      comment: "nothing to say",
      projectregarding: "solar",
      Description: "desc",
    },
    {
      Taskid: 2,
      Category: "Maintenance",
      Requestedby: "GreenTech Solar",
      Addedby: "sarahgreen",
      Addeddate: "2025-02-10",
      Status: "In Progress",
      Assignedto: "Commercial Client",
      Callbackno: "+94760123457",
      comment: "nothing to say",
      projectregarding: "solar",
      Description: "desc",
    },
    {
      Taskid: 3,
      Category: "Repair",
      Requestedby: "SunPower Systems",
      Addedby: "markjohnson",
      Addeddate: "2025-02-11",
      Status: "Completed",
      Assignedto: "Industrial Client",
      Callbackno: "+94760123458",
      comment: "nothing to say",
      projectregarding: "solar",
      Description: "desc",
    },
    {
      Taskid: 4,
      Category: "Installation",
      Requestedby: "SolarWave Solutions",
      Addedby: "emilysolar",
      Addeddate: "2025-02-09",
      Status: "Pending",
      Assignedto: "Corporate Client",
      Callbackno: "+94760123459",
      comment: "nothing to say",
      projectregarding: "solar",
      Description: "desc",
    },
    {
      Taskid: 5,
      Category: "Inspection",
      Requestedby: "Sunshine Panels",
      Addedby: "jamesking",
      Addeddate: "2025-02-13",
      Status: "In Progress",
      Assignedto: "Residential Client",
      Callbackno: "+94760123460",
      comment: "nothing to say",
      projectregarding: "solar",
      Description: "desc",
    },
  ];

  const [ismodelopen, setmodelopen] = useState<boolean>(false);
  const [ismodelconfirmopen, setmodelconfirmopen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, settotalitems] = useState(0);
  const [customer, setcustomer] = useState({});
  const [isloading, setisloading] = useState(false);
  const [selectedcustomer, setselectedcustomer] = useState({});
  const [view, setview] = useState(false);
  const pageSize = 5;
  const handleOpenModal = (item: any) => {
    console.log("clicked");
    setselectedcustomer(item);
    console.log(selectedcustomer);
    setmodelopen(true);
  };
  const fetchcustomer = async (page: number) => {
    setisloading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/Employee?page=${page}&pageSize=${pageSize}`
      );

      setcustomer(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setisloading(false);
    }
  };
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  useEffect(() => {
    fetchcustomer(currentPage);
  }, [currentPage]);
  const handleconfirmCloseModal = () => {
    setmodelconfirmopen(false);
  };
  const handleconfirmOpenModal = () => {
    console.log("clicked");

    setmodelconfirmopen(true);
  };

  const handleCloseModal = () => {
    setmodelopen(false);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-[#B4D6E4] rounded-lg  ">
      {" "}
      <div className="flex flex-row position-relative gap-[930px]">
        <h1 className="text-4xl font-serif text-[#183642] p-2">CIA</h1>
        <button
          className="text-[#183642] pt-3 rounded-lg "
          onClick={() => {
            setview(false);
            handleOpenModal({});
          }}
        >
          {" "}
          <IoIosAdd
            size={40}
            className="text-[#183642] bg-white bg-opacity-50 rounded-lg m-2"
          />
        </button>
      </div>
      <table className="text-[#183642]  font-serif  text-lg border-collapse border border-[#183642] bg-white bg-opacity-50 rounded-lg mb-10">
        <thead className="font-extrabold bg-white bg-opacity-35 rounded-lg">
          <tr>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 p-5 w-28">
              Task id
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-28">
              Category
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-28">
              Requested By
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-28">
              Added By
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-28 ">
              Added Date
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-28 ">
              Status
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-28 ">
              Assigned to
            </th>

            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-28 ">
              Callback no
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-28 ">
              Action
            </th>
          </tr>
        </thead>
        {isloading ? (
          <tbody>
            <tr>
              <td colSpan={7} className="text-center">
                <div className="flex  flex-row justify-center items-center">
                  <span className="loading loading-dots size-16 loading-lg"></span>
                </div>
              </td>
            </tr>
          </tbody>
        ) : (
          <>
            {customers.map((item, index) => (
              <tbody
                key={index}
                className="border-collapse border font-semibold font-mono border-[#183642] border-x-1 border-y-1 text-center align-middle "
              >
                <tr className="border-collapse border border-[#183642] border-x-1 border-y-1">
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.Taskid}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.Category}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.Requestedby}{" "}
                  </td>
                  <td>{item.Addedby}</td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.Addeddate}{" "}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.Status}{" "}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.Assignedto}{" "}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.Callbackno}{" "}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1 text-start m-2 ">
                    <div className="flex flex-row position-relative flex flex-row justify-center items-center">
                      <button
                        className=" text-[#183642] p-1 rounded-lg m-2 "
                        onClick={() => {
                          setview(true);
                          handleOpenModal(item);
                        }}
                      >
                        <FaEye className="pt-1" />
                      </button>
                      <button
                        className=" text-[#183642] p-1 rounded-lg m-2 "
                        onClick={() => {
                          setview(false);
                          handleOpenModal(item);
                        }}
                      >
                        <FaEdit className="pt-1" />
                      </button>
                      <button
                        className=" text-[#183642] p-1 rounded-lg m-2 "
                        onClick={() => {
                          handleconfirmOpenModal();
                        }}
                      >
                        <FaDeleteLeft className="pt-1" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </>
        )}
      </table>
      <div className="flex flex-col items-end text-[#183642] m-5 text-lg font-semibold font-mono">
        <div className="pagination ">
          <button
            className="btn mt-5 mr-5 bg-white text-[#183642] rounded-full p-2"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <TbPlayerTrackPrevFilled />
          </button>
          <span className="text-[#183642]  rounded-lg p-1">
            Page {currentPage} of {totalPages}: {totalItems}
          </span>
          <button
            className="btn mt-5 ml-5 bg-white text-[#183642] rounded-full p-2 "
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <TbPlayerTrackNextFilled />
          </button>
        </div>
      </div>
      {ismodelopen && (
        <AddCIA
          isopen={ismodelopen}
          isclose={handleCloseModal}
          selectedCustomer={selectedcustomer}
          view={view}
        />
      )}
      {ismodelconfirmopen && (
        <DeleteConfirmationmodal
          isopen={ismodelconfirmopen}
          isclose={handleconfirmCloseModal}
        />
      )}
    </div>
  );
};

export default CIAmain;
