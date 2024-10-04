// src/Admin/Sidenavigation.tsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  MdCalendarMonth,
  MdCall,
  MdLogout,
  MdPeopleAlt,
  MdSettings,
} from "react-icons/md";

const Sidenavigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };
  return (
    <div className="w-64 h-screen bg-[#183642] text-[#183642] p-5 shadow-lg fixed top-0 left-0">
      <a href="/app">
        <h2 className="mb-12 text-4xl font-bold text-white ml-3 ">RIVIDCO</h2>
      </a>

      <ul className="list-none p-0 ">
        <li className="mb-4  ">
          <Link
            to="/app/customer"
            className={`block text-white text-xl font-semibold no-underline p-2 rounded  flex flex-row position-relative gap-2 transition-colors duration-300 ${
              isActive("/admin/customer") ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <MdPeopleAlt className="" size={30} />
            Customer
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="/app/vendor"
            className={`block text-white text-xl font-semibold  no-underline  p-2 rounded flex flex-row position-relative gap-2 transition-colors duration-300 ${
              isActive("/admin/vendor") ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <MdPeopleAlt className="" size={30} />
            Vendor
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="/app/vendoritem"
            className={`block text-white text-xl font-semibold no-underline  p-2 rounded flex flex-row position-relative gap-2 transition-colors duration-300 ${
              isActive("/admin/vendoritem")
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
          >
            <MdSettings className="" size={30} />
            Vendor Item
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="/app/projects"
            className={`block text-white text-xl font-semibold no-underline  p-2 rounded flex flex-row position-relative gap-2 transition-colors duration-300 ${
              isActive("/admin/projects") ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <MdCalendarMonth className="" size={30} />
            Projects
          </Link>
        </li>

        <li className="my-4">
          <Link
            to="/app/cia"
            className={`block text-white text-xl font-semibold no-underline  p-2 rounded flex flex-row position-relative gap-2 transition-colors duration-300 ${
              isActive("/admin/cia") ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <MdCall className="" size={30} />
            CIA
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="/app/systemusers"
            className={`block text-white text-xl font-semibold no-underline  p-2 rounded flex flex-row position-relative gap-2 transition-colors duration-300 ${
              isActive("/admin/systemusers")
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
          >
            <MdPeopleAlt className="" size={30} />
            System User
          </Link>
        </li>
        <li className="mt-32">
          <button
            onClick={handleLogout}
            className={`block text-white text-xl font-semibold no-underline p-2 rounded flex flex-row gap-2 transition-colors duration-300 ${
              isActive("/admin/logout") ? "bg-gray-700" : "hover:bg-red-400"
            }`}
          >
            <MdLogout size={30} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidenavigation;
