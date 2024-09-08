import React from "react";

const Projectmajor = () => {
  return (
    <div className="bg-slate-900 h-screen">
      <div className="flex flex-row justify-evenly gap-2 ">
        <button className="bg-white text-black p-5 rounded-lg w-1/3 m-2">
          Project Item
        </button>
        <button className="bg-white text-black p-5 rounded-lg w-1/3 m-2">
          Services
        </button>
        <button className="bg-white text-black p-5 rounded-lg w-1/3 m-2">
          Tests
        </button>
        <button className="bg-white text-black p-5 rounded-lg w-1/3 m-2">
          CIA
        </button>
      </div>
    </div>
  );
};

export default Projectmajor;
