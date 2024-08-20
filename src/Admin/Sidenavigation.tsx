import React from "react";
import { MdPeopleOutline } from "react-icons/md";
import pico3 from "../assets/Screenshot 2025-02-09 220935.png";
import { IoCallOutline, IoPersonOutline } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

const Sidenavigation = () => {
  return (
    <div className="w-1/5 bg-white ">
      <div className="flex flex-col">
        <div className="flex flex-row position-relative font-serif font-semibold gap-2 m-5 text-blue-950 text-lg">
          <img src={pico3} alt="logo" />
        </div>
        <div className="flex flex-row position-relative font-serif font-semibold gap-2 m-5 text-blue-950 text-lg">
          <MdPeopleOutline className=" " size={45} />
          <h1 className="pt-2 ">Customers</h1>
        </div>
        <div className="flex flex-row position-relative font-serif font-semibold gap-2 m-5 text-blue-950 text-lg">
          <IoPersonOutline className=" " size={45} />
          <h1 className="pt-2 ">Vendors</h1>
        </div>
        <div className="flex flex-row position-relative font-serif font-semibold gap-2 m-5 text-blue-950 text-lg">
          <AiOutlineFundProjectionScreen className=" " size={45} />
          <h1 className="pt-2 ">Projects</h1>
        </div>
        <div className="flex flex-row position-relative font-serif font-semibold gap-2 m-5 text-blue-950 text-lg">
          <IoCallOutline className=" " size={45} />
          <h1 className="pt-2 ">CIA</h1>
        </div>
        <div className="flex flex-row position-relative font-serif font-semibold gap-2 m-5 text-blue-950 text-lg">
          <FaRegUserCircle className=" " size={45} />
          <h1 className="pt-2 ">Systemuser</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidenavigation;
