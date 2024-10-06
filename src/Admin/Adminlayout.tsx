import React, { ReactNode } from "react";
import Sidenavigation from "./Sidenavigation";
import pico2 from "../assets/pico5.jpg";

interface AdminlayoutProps {
  children: ReactNode;
}

const Adminlayout: React.FC<AdminlayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidenavigation />

      <div
        className="ml-64 p-5 flex-grow "
        style={{
          backgroundImage: `url(${pico2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Adminlayout;
