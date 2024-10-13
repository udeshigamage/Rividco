import { useEffect, useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

import DeleteConfirmationmodal from "../../Utils/DeleteConfirmationmodal";
import axios from "axios";

import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import { toast } from "react-toastify";
import AddCIA from "./AddCIA";
import CommonLoading from "../../Utils/Commonloading";

const API_URL = import.meta.env.VITE_API_URL;
const CIAmain = () => {
  const handledelete = async () => {
    if (selectedcustomer && selectedcustomer.task_ID) {
      try {
        const response = await axios.delete(
          `${API_URL}/ProjectCIA/${selectedcustomer.task_ID}`
        );
        toast.success(response.data.message);
        fetchcustomer(currentPage); // Refetch customers after deletion
        setmodelconfirmopen(false); // Close the confirmation modal
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong during deletion.");
      } finally {
        setTimeout(() => {
          setisloading(false);
        }, 1000);
      }
    }
  };

  const [ismodelopen, setmodelopen] = useState<boolean>(false);
  const [ismodelconfirmopen, setmodelconfirmopen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, settotalitems] = useState(0);
  const [customer, setcustomer] = useState<any[]>([]);
  const [customere, setcustomere] = useState<any[]>([]);
  const [project, setproject] = useState<any[]>([]);
  const [isloading, setisloading] = useState(false);
  const [selectedcustomer, setselectedcustomer] = useState<any>(null);
  const [view, setview] = useState(false);
  const pageSize = 5;
  const handleOpenModal = (item: any) => {
    console.log("clicked");
    setselectedcustomer(item);
    console.log(selectedcustomer);
    setmodelopen(true);
  };
  const resetPageToFirst = () => {
    setCurrentPage(1);
  };
  const fetchcustomer = async (page: number) => {
    setisloading(true);

    try {
      const response = await axios.get(
        `${API_URL}/ProjectCIA/?page=${page}&pageSize=${pageSize}`
      );
      const response2 = await axios.get(
        `${API_URL}/Customer/?page=${page}&pageSize=${pageSize}`
      );
      const response3 = await axios.get(
        `${API_URL}/Project/?page=${page}&pageSize=${pageSize}`
      );
      setproject(response3.data.data);
      setcustomere(response2.data.data);

      setcustomer(response.data.data);

      setTotalPages(response.data.totalPages);
      settotalitems(response.data.totalItems);
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
  const handleconfirmOpenModal = (item: any) => {
    console.log("clicked");

    setmodelconfirmopen(true);
    setselectedcustomer(item);
  };

  const handleCloseModal = () => {
    setmodelopen(false);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-[#B4D6E4] rounded-lg  ">
      {" "}
      <div className="flex flex-row position-relative gap-[930px]">
        <h1 className="text-4xl font-serif text-[#183642] p-2">CIA</h1>
        {/* <button
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
        </button> */}
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
              Urgency level
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-28 ">
              Assigned to
            </th>

            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-28 ">
              Project Id
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
            {customer.map((item, index) => (
              <tbody
                key={index}
                className="border-collapse border font-semibold font-mono border-[#183642] border-x-1 border-y-1 text-center align-middle "
              >
                <tr className="border-collapse border border-[#183642] border-x-1 border-y-1">
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.task_ID}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.category}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.requestedby}{" "}
                  </td>
                  <td>{item.addedby}</td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.addedDate}{" "}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.urgencylevel}{" "}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.assignedto}{" "}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.project.project_ID}{" "}
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
          resetPageToFirst={resetPageToFirst}
          fetchproject={() => fetchcustomer}
          customer={customere}
          project={project}
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

export default CIAmain;
