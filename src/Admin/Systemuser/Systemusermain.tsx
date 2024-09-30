import  { useEffect, useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";

import DeleteConfirmationmodal from "../../Utils/DeleteConfirmationmodal";
import axios from "axios";

import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import { toast } from "react-toastify";
import AddSystem from "./AddSystem";

const Systemusermain = () => {
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
      Role: "sales representative",
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
      Role: "sales representative",
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
      Role: "sales representative",
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
      Role: "sales representative",
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
      Role: "sales representative",
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
      <div className="flex flex-row position-relative gap-[700px]">
        <h1 className="text-4xl font-serif text-[#183642] p-2">System user</h1>
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
              First Name
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-52">
              Last Name
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-52">
              Contactnumber
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-52">
              Role
            </th>

            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-52 ">
              Actions
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
                    {item.FirstName}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.LastName}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.mobileno}{" "}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.Role}{" "}
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
        <AddSystem
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

export default Systemusermain;
