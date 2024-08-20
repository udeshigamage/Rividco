import React from "react";
import Sidenavigation from "./Sidenavigation";
import System from "./System";

const Adminlayout = () => {
  return (
    <div className="flex h-screen ">
      <Sidenavigation />
      <System />
    </div>
  );
};

export default Adminlayout;
