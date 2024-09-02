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
import Addvendor from "./Addvendoritem";

const Vendoritemmain = () => {
  const data = [
    {
      id: 1,
      item_name: "Solar Panel",
      Vendor: "Williams",
      Vendor_address: "Gampaha, Sri Lanka",
      Price: 5000,
      capacity: "100KW",
      Warranty_duration: "1 year",
      comments: "comments",
    },
    {
      id: 2,
      item_name: "Inverter",
      Vendor: "GreenTech",
      Vendor_address: "Colombo, Sri Lanka",
      Price: 12000,
      capacity: "200KW",
      Warranty_duration: "2 years",
      comments: "comments",
    },
    {
      id: 3,
      item_name: "Battery",
      Vendor: "PowerCell",
      Vendor_address: "Kandy, Sri Lanka",
      Price: 8000,
      capacity: "150KW",
      Warranty_duration: "3 years",
      comments: "comments",
    },
    {
      id: 4,
      item_name: "Charge Controller",
      Vendor: "EcoPower",
      Vendor_address: "Negombo, Sri Lanka",
      Price: 3000,
      capacity: "50KW",
      Warranty_duration: "1.5 years",
      comments: "comments",
    },
    {
      id: 5,
      item_name: "Mounting Structure",
      Vendor: "SolarMount",
      Vendor_address: "Jaffna, Sri Lanka",
      Price: 2500,
      capacity: "N/A",
      Warranty_duration: "5 years",
      comments: "comments",
    },
  ];
  const [ismodelopen, setmodelopen] = useState<boolean>(false);
  const [ismodelconfirmopen, setmodelconfirmopen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, settotalitems] = useState(0);
  const [item, setitem] = useState({});
  const [isloading, setisloading] = useState(false);
  const [selecteditem, setselecteditem] = useState({});
  const pageSize = 5;
  const [view, setview] = useState(false);
  const handleOpenModal = (item: any) => {
    console.log("clicked");
    setselecteditem(item);

    setmodelopen(true);
  };
  const fetchitem = async (page: number) => {
    setisloading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/Employee?page=${page}&pageSize=${pageSize}`
      );

      setitem(response.data);
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
    fetchitem(currentPage);
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
        <h1 className="text-4xl font-serif text-white p-2">VendorItem</h1>
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
              item name
            </th>
            <th className="border-collapse border border-slate-900 border-x-2 border-y-2 w-40">
              vendor
            </th>

            <th className="border-collapse border border-slate-900 border-x-2 border-y-2 w-40">
              price
            </th>
            <th className="border-collapse border border-slate-900 border-x-2 border-y-2 w-40">
              capacity
            </th>
            <th className="border-collapse border border-slate-900 border-x-2 border-y-2 w-40">
              Warranty_duration
            </th>
            <th className="border-collapse border border-slate-900 border-x-2 border-y-2 w-40 ">
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
            {data.map((item, index) => (
              <tbody
                key={index}
                className="border-collapse border font-semibold font-mono border-slate-900 border-x-1 border-y-1 text-center align-middle "
              >
                <tr className="border-collapse border border-slate-900 border-x-1 border-y-1">
                  <td className="border-collapse border border-slate-900 border-x-1 border-y-1">
                    {item.item_name}
                  </td>
                  <td className="border-collapse border border-slate-900 border-x-1 border-y-1">
                    {item.Vendor}
                  </td>

                  <td className="border-collapse border border-slate-900 border-x-1 border-y-1">
                    {item.Price}
                  </td>
                  <td className="border-collapse border border-slate-900 border-x-1 border-y-1">
                    {item.capacity}
                  </td>
                  <td className="border-collapse border border-slate-900 border-x-1 border-y-1">
                    {item.Warranty_duration}
                  </td>
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
          selecteditem={selecteditem}
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

export default Vendoritemmain;
