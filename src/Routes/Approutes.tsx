import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Auth/Login";
import Home from "../Web/Home";
import Adminlayout from "../Admin/Adminlayout";

const Approutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<Adminlayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Approutes;
