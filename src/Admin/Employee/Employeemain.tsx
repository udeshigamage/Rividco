import { useEffect, useState } from "react";
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
import AddEmployeemodal from "./AddEmployeemodal";
import CommonLoading from "../../Utils/Commonloading";
import nodata from "../../assets/Nodata.svg";

const API_URL = import.meta.env.VITE_API_URL;
const Employeemain = () => {
  const [ismodelopen, setmodelopen] = useState<boolean>(false);
  const [ismodelconfirmopen, setmodelconfirmopen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, settotalitems] = useState(0);
  const [customer, setcustomer] = useState<any[]>([]);
  const [isloading, setisloading] = useState(false);
  const [selectedcustomer, setselectedcustomer] = useState<any>(null);
  const [deletecustomer, setdeletecustomer] = useState(false);
  const pageSize = 9;
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
        `${API_URL}/Employee?page=${page}&pageSize=${pageSize}`
      );
      console.log("customer", response.data.data);
      setcustomer(response.data.data);
      setTotalPages(response.data.totalPages);
      settotalitems(response.data.totalItems);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setTimeout(() => setisloading(false), 1000);
    }
  };
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const resetPageToFirst = () => {
    setCurrentPage(1);
  };
  useEffect(() => {
    fetchcustomer(currentPage);
  }, [currentPage]);
  const handleconfirmCloseModal = () => {
    setmodelconfirmopen(false);
  };
  const handleconfirmOpenModal = (item: any) => {
    console.log("clicked");

    setmodelconfirmopen(true);
    setselectedcustomer(item);
  };
  const handledelete = async () => {
    if (selectedcustomer && selectedcustomer.employee_ID) {
      try {
        const response = await axios.delete(
          `${API_URL}/Employee/${selectedcustomer.employee_ID}`
        );
        toast.success(response.data.message);
        fetchcustomer(currentPage); // Refetch customers after deletion
        setmodelconfirmopen(false); // Close the confirmation modal
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong during deletion.");
      }
    }
  };
  const handleCloseModal = () => {
    setmodelopen(false);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-[#B4D6E4] rounded-lg  ">
      {" "}
      <div className="flex flex-row position-relative gap-[800px]">
        <h1 className="text-4xl font-serif text-[#183642] p-2">Employees</h1>
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
              id
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-72">
              Name
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-52">
              Contactnumber
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-52">
              Address
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
                <img src={nodata} alt="No data" className="w-32 h-32 mx-auto" />
              </td>
            </tr>
          </tbody>
        ) : (
          <>
            {customer?.map((item: any, index: any) => (
              <tbody
                key={index}
                className="border-collapse border font-semibold font-mono border-[#183642] border-x-1 border-y-1 text-center align-middle "
              >
                <tr className="border-collapse border text-[#183642] border-[#183642] border-x-1 border-y-1">
                  <td className="border-collapse border text-[#183642] border-[#183642] border-x-1 border-y-1">
                    {item.employee_ID}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item?.firstName}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item?.mobileno ? item.mobileno : "-"}
                  </td>
                  <td>{item.address}</td>
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
                          handleconfirmOpenModal(item);
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
      <div className="flex flex-col items-end text-[#183642]  text-lg font-semibold font-mono">
        <div className="pagination ">
          <button
            className="btn m-2 bg-white text-[#183642] rounded-full p-2"
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
        <AddEmployeemodal
          isopen={ismodelopen}
          isclose={handleCloseModal}
          selectedCustomer={selectedcustomer}
          view={view}
          fetchcustomer={() => fetchcustomer(currentPage)}
          resetPageToFirst={resetPageToFirst}
        />
      )}
      {ismodelconfirmopen && (
        <DeleteConfirmationmodal
          isopen={ismodelconfirmopen}
          isclose={handleconfirmCloseModal}
          handledelete={handledelete}
        />
      )}
      {isloading && <CommonLoading />}
    </div>
  );
};

export default Employeemain;
