
import React, { ReactNode } from "react";
import Sidenavigation from "./Sidenavigation";


interface AdminlayoutProps {
  children: ReactNode;
}

const Adminlayout: React.FC<AdminlayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidenavigation />

      <div className="ml-64 p-5 flex-grow bg-[#B4D6E4]">{children}</div>
    </div>
  );
};

export default Adminlayout;
