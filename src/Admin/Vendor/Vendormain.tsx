import React, { useEffect, useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";

import DeleteConfirmationmodal from "../../Utils/DeleteConfirmationmodal";
import axios from "axios";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import { toast } from "react-toastify";
import Addvendor from "./Addvendor";

const Vendormain = () => {
  const customers = [
    {
      id: 1,
      FirstName: "John",
      LastName: "Williams",
      email: "johnwilliams@example.com",
      Address: "Colombo",
      category: "VIP",
      comment: "Frequent customer",
      mobileno: "+94760305481",
      officeno: "+94112345678",
    },
    {
      id: 2,
      FirstName: "Sarah",
      LastName: "Connor",
      email: "sarahconnor@example.com",
      Address: "Negombo",
      category: "Regular",
      comment: "Prefers online orders",
      mobileno: "+94761234567",
      officeno: "+94113456789",
    },
    {
      id: 3,
      FirstName: "David",
      LastName: "Smith",
      email: "davidsmith@example.com",
      Address: "Kandy",
      category: "New",
      comment: "Interested in discounts",
      mobileno: "+94767890123",
      officeno: "+94119876543",
    },
    {
      id: 4,
      FirstName: "Emma",
      LastName: "Brown",
      email: "emmabrown@example.com",
      Address: "Galle",
      category: "VIP",
      comment: "Bulk orders",
      mobileno: "+94762345678",
      officeno: "+94115678901",
    },
    {
      id: 5,
      FirstName: "Michael",
      LastName: "Johnson",
      email: "michaeljohnson@example.com",
      Address: "Jaffna",
      category: "Regular",
      comment: "Long-time customer",
      mobileno: "+94768901234",
      officeno: "+94118765432",
    },
    {
      id: 6,
      FirstName: "Sophia",
      LastName: "Wilson",
      email: "sophiawilson@example.com",
      Address: "Matara",
      category: "New",
      comment: "Wants customized products",
      mobileno: "+94764567890",
      officeno: "+94111223344",
    },
    {
      id: 7,
      FirstName: "Liam",
      LastName: "Anderson",
      email: "liamanderson@example.com",
      Address: "Kurunegala",
      category: "VIP",
      comment: "Corporate client",
      mobileno: "+94760123456",
      officeno: "+94115566778",
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
  const pageSize = 5;
  const [view, setview] = useState(false);
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
    <div className="flex flex-col justify-center items-center bg-slate-900 rounded-lg  ">
      {" "}
      <div className="flex flex-row position-relative gap-[600px]">
        <h1 className="text-4xl font-serif text-white p-2">Vendor</h1>
        <button
          className="text-black pt-3 rounded-lg "
          onClick={() => {
            setview(false);
            handleOpenModal({});
          }}
        >
          {" "}
          <IoIosAdd
            size={40}
            className="text-slate-900 bg-white bg-opacity-50 rounded-lg m-2"
          />
        </button>
      </div>
      <table className="text-slate-900  font-serif  text-lg border-collapse border border-slate-900 bg-white bg-opacity-50 rounded-lg mb-10">
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
            <th className="border-collapse border border-slate-900 border-x-2 border-y-2 w-52">
              Address
            </th>
            <th className="border-collapse border border-slate-900 border-x-2 border-y-2 w-52 ">
              Actions
            </th>
          </tr>
        </thead>
        {isloading ? (
          <div className="flex justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : (
          <>
            {customers.map((item, index) => (
              <tbody
                key={index}
                className="border-collapse border font-semibold font-mono border-slate-900 border-x-1 border-y-1 text-center align-middle "
              >
                <tr className="border-collapse border border-slate-900 border-x-1 border-y-1">
                  <td className="border-collapse border border-slate-900 border-x-1 border-y-1">
                    {item.id}
                  </td>
                  <td className="border-collapse border border-slate-900 border-x-1 border-y-1">
                    {item.FirstName}
                  </td>
                  <td className="border-collapse border border-slate-900 border-x-1 border-y-1">
                    {item.mobileno}{" "}
                  </td>
                  <td>{item.Address}</td>
                  <td className="border-collapse border border-slate-900 border-x-1 border-y-1 text-start m-2 ">
                    <div className="flex flex-row position-relative flex flex-row justify-center items-center">
                      <button
                        className=" text-slate-900 p-1 rounded-lg m-2 "
                        onClick={() => {
                          setview(true);
                          handleOpenModal(item);
                        }}
                      >
                        <FaEye className="pt-1" />
                      </button>
                      <button
                        className=" text-slate-900 p-1 rounded-lg m-2 "
                        onClick={() => {
                          setview(false);
                          handleOpenModal(item);
                        }}
                      >
                        <FaEdit className="pt-1" />
                      </button>
                      <button
                        className=" text-slate-900 p-1 rounded-lg m-2 "
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
      <div className="flex flex-col items-end text-white m-5 text-lg font-semibold font-mono">
        <div className="pagination ">
          <button
            className="btn mt-5 mr-5 bg-white text-slate-900 rounded-full p-2"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <TbPlayerTrackPrevFilled />
          </button>
          <span className="text-white  rounded-lg p-1">
            Page {currentPage} of {totalPages}: {totalItems}
          </span>
          <button
            className="btn mt-5 ml-5 bg-white text-slate-900 rounded-full p-2 "
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <TbPlayerTrackNextFilled />
          </button>
        </div>
      </div>
      {ismodelopen && (
        <Addvendor
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

export default Vendormain;
