import { use, useState } from "react";
import Projectitemmain from "../Projectitem/Projectitemmain";
import Projecttestmain from "../Projecttest/Projecttestmain";

import Projectciamain from "../ProjectCIA/Projectciamain";
import { useLocation, useNavigate } from "react-router-dom";

const Projectmajor = () => {
  const navigate = useNavigate();
  const [selectedTable, setSelectedTable] = useState("Project Item");
  const location = useLocation();
  const { item } = location.state || {};

  const renderTable = () => {
    switch (selectedTable) {
      case "Project Item":
        return <Projectitemmain project={item} />;

      case "Tests":
        return <Projecttestmain project={item} />;
      case "CIA":
        return <Projectciamain project={item} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#B4D6E4] h-screen">
      <div className="flex flex-row justify-evenly gap-2 ">
        <div className="flex flex-row gap-2">
          <button
            className="bg-slate-900 text-white p-5 rounded-lg w-[100px] m-2"
            onClick={() => navigate(-1)}
          >
            {"<-"} Back
          </button>
        </div>
        {["Project Item", "Tests", "CIA"].map((item) => (
          <button
            key={item}
            className={`bg-slate-900 text-white p-5 rounded-lg w-1/3 m-2 ${
              selectedTable === item ? "bg-[#8C41DC] text-black" : ""
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
