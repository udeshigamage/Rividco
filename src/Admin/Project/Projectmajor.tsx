import React, { useState } from "react";
import Projectitemmain from "../Projectitem/Projectitemmain";
import Projecttestmain from "../Projecttest/Projecttestmain";
import ProjectServicemain from "../Projectservice/ProjectServicemain";
import Projectciamain from "../ProjectCIA/Projectciamain";

const Projectmajor = () => {
  const [selectedTable, setSelectedTable] = useState("Project Item");

  const renderTable = () => {
    switch (selectedTable) {
      case "Project Item":
        return <Projectitemmain />;
      case "Services":
        return <ProjectServicemain />;
      case "Tests":
        return <Projecttestmain />;
      case "CIA":
        return <Projectciamain />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#B4D6E4] h-screen">
      <div className="flex flex-row justify-evenly gap-2 ">
        {["Project Item", "Services", "Tests", "CIA"].map((item) => (
          <button
            key={item}
            className={`bg-white text-[#183642] p-5 rounded-lg w-1/3 m-2 ${
              selectedTable === item ? "bg-[#8C41DC] text-white" : ""
            }`}
            onClick={() => setSelectedTable(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="p-4">{renderTable()}</div>
    </div>
  );
};

export default Projectmajor;
