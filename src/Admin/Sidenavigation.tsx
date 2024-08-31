// src/Admin/Sidenavigation.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidenavigation: React.FC = () => {
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5 shadow-lg fixed top-0 left-0">
      <h2 className="mb-5 text-2xl font-bold text-white">RIVIDCO</h2>
      <ul className="list-none p-0">
        <li className="my-4">
          <Link
            to="/admin/dashboard"
            className={`block text-white no-underline text-base p-2 rounded transition-colors duration-300 ${
              isActive("/admin/dashboard") ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="/admin/customer"
            className={`block text-white no-underline text-base p-2 rounded transition-colors duration-300 ${
              isActive("/admin/customer") ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Customer
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="/admin/vendor"
            className={`block text-white no-underline text-base p-2 rounded transition-colors duration-300 ${
              isActive("/admin/vendor") ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Vendor
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="/admin/vendoritem"
            className={`block text-white no-underline text-base p-2 rounded transition-colors duration-300 ${
              isActive("/admin/vendoritem")
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
          >
            Vendor Item
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="/admin/projects"
            className={`block text-white no-underline text-base p-2 rounded transition-colors duration-300 ${
              isActive("/admin/projects") ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Projects
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="/admin/projectitem"
            className={`block text-white no-underline text-base p-2 rounded transition-colors duration-300 ${
              isActive("/admin/projectitem")
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
          >
            Project item
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="/admin/cia"
            className={`block text-white no-underline text-base p-2 rounded transition-colors duration-300 ${
              isActive("/admin/cia") ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            CIA
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="/admin/systemusers"
            className={`block text-white no-underline text-base p-2 rounded transition-colors duration-300 ${
              isActive("/admin/systemusers")
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
          >
            System User
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenavigation;
