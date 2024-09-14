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
import AddProject from "./Addproject";
import { useNavigate } from "react-router-dom";

const Projectmain = () => {
  const data = [
    {
      id: "1",
      customer: "John Doe",
      description: "Office Supplies Purchase",
      location: "Colombo",
      coordinator: "Sarah Smith",
      startdate: "2025-02-01",
      warranty_period: "1 year",
      status: "In Progress",
      estimatedcost: 5000,
      referencedby: "Michael Johnson",
      comment: "need attention",
    },
    {
      id: "2",
      customer: "Alice Brown",
      description: "Event Management Service",
      location: "Kandy",
      coordinator: "James Wilson",
      startdate: "2025-01-15",
      warranty_period: "6 months",
      status: "Completed",
      estimatedcost: 8000,
      referencedby: "John Lee",
      comment: "need attention",
    },
    {
      id: "3",
      customer: "David Clark",
      description: "IT Infrastructure Setup",
      location: "Jaffna",
      coordinator: "Emma Davis",
      startdate: "2025-03-05",
      warranty_period: "2 years",
      status: "Pending",
      estimatedcost: 15000,
      referencedby: "Sophia Miller",
      comment: "need attention",
    },
    {
      id: "4",
      customer: "Sophia Taylor",
      description: "Catering Services",
      location: "Galle",
      coordinator: "Liam Martinez",
      startdate: "2025-04-10",
      warranty_period: "7 years",
      status: "In Progress",
      estimatedcost: 3000,
      referencedby: "Olivia Thomas",
      comment: "need attention",
    },
    {
      id: "5",
      customer: "Michael Johnson",
      description: "Software Development Project",
      location: "Negombo",
      coordinator: "Emily Anderson",
      startdate: "2025-01-20",
      warranty_period: "3 years",
      status: "Completed",
      estimatedcost: 20000,
      referencedby: "Daniel White",
      comment: "need attention",
    },
  ];

  const [ismodelopen, setmodelopen] = useState<boolean>(false);
  const [ismodelconfirmopen, setmodelconfirmopen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, settotalitems] = useState(0);
  const [project, setproject] = useState({});
  const [isloading, setisloading] = useState(false);
  const [selectedproject, setselectedproject] = useState({});
  const pageSize = 5;
  const [view, setview] = useState(false);
  const handleOpenModal = (item: any) => {
    console.log("clicked");
    setselectedproject(item);

    setmodelopen(true);
  };
  const fetchcustomer = async (page: number) => {
    setisloading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/Employee?page=${page}&pageSize=${pageSize}`
      );

      setproject(response.data);
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
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setmodelopen(false);
  };
  const handleclick = (item: any) => {
    navigate("/admin/projects/main", { state: { item } });
  };
  return (
    <div className="flex flex-col justify-center items-center bg-[#B4D6E4] rounded-lg  ">
      {" "}
      <div className="flex flex-row position-relative gap-[870px]">
        <h1 className="text-4xl font-serif text-[#183642] p-2">Projects</h1>
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
              Customer
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-52">
              Location
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-52">
              Coordinator
            </th>
            <th className="border-collapse border border-[#183642] border-x-2 border-y-2 w-52">
              Status
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
            {data.map((item, index) => (
              <tbody
                key={index}
                className="border-collapse border font-semibold font-mono border-[#183642] border-x-1 border-y-1 text-center align-middle "
              >
                <tr
                  className="border-collapse border border-[#183642] border-x-1 border-y-1 hover:bg-[#183642] hover:text-white "
                  onClick={() => {
                    handleclick(item);
                  }}
                >
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1 ">
                    {item.id}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1">
                    {item.customer}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1 ">
                    {item.location}{" "}
                  </td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1 ">
                    {item.coordinator}
                  </td>
                  <td className="">{item.status}</td>
                  <td className="border-collapse border border-[#183642] border-x-1 border-y-1 text-start m-2 ">
                    <div className="flex flex-row position-relative flex flex-row justify-center items-center">
                      <button
                        className=" text-[#183642] p-1 rounded-lg m-2 "
                        onClick={() => {
                          setview(true);
                          handleOpenModal(item);
                        }}
                      >
                        <FaEye
                          size={20}
                          className="pt-1 bg-white p-1 rounded-lg"
                        />
                      </button>
                      <button
                        className=" text-[#183642] p-1 rounded-lg m-2 "
                        onClick={() => {
                          setview(false);
                          handleOpenModal(item);
                        }}
                      >
                        <FaEdit
                          size={20}
                          className="pt-1 bg-white p-1 rounded-lg"
                        />
                      </button>
                      <button
                        className=" text-[#183642] p-1 rounded-lg m-2 "
                        onClick={() => {
                          handleconfirmOpenModal();
                        }}
                      >
                        <FaDeleteLeft
                          size={20}
                          className="pt-1 bg-white p-1 rounded-lg"
                        />
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
        <AddProject
          isopen={ismodelopen}
          isclose={handleCloseModal}
          selectedproject={selectedproject}
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

export default Projectmain;
