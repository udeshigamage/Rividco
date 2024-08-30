// src/Approutes.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Auth/Login";
import Home from "../Web/Home";
import Adminlayout from "../Admin/Adminlayout";
import Customermain from "../Admin/Customer/Customermain";
import Vendormain from "../Admin/Vendor/Vendormain";
import Dashboard from "../Admin/Dashboard";
import Projectmain from "../Admin/Project/Projectmain";
import CIAmain from "../Admin/CIA/CIAmain";
import System from "../Admin/System";
import Systemusermain from "../Admin/Systemuser/Systemusermain";
import Vendoritemmain from "../Admin/Vendoritem/Vendoritemmain";

const Approutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <Adminlayout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="customer" element={<Customermain />} />
                <Route path="vendor" element={<Vendormain />} />
                <Route path="vendoritem" element={<Vendoritemmain />} />
                <Route path="projects" element={<Projectmain />} />
                <Route path="cia" element={<CIAmain />} />
                <Route path="systemusers" element={<Systemusermain />} />
              </Routes>
            </Adminlayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;
