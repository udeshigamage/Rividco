import pico1 from "../assets/solar4.jpg";

import Navbar from "../Web/Navbar";
import { TbLogin2 } from "react-icons/tb";

export function Login() {
  return (
    <div className="h-screen">
      <Navbar />
      <div
        className="flex flex-col justify-center items-center align-middle min-h-[calc(100vh-4rem)] bg-black "
        style={{
          backgroundImage: `url(${pico1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <TextGenerateEffect words={"Welcome to Rividco Projects"} /> */}
        <div className="flex flex-col justify-center items-center bg-white text-[#183642] font-serif lg:min-w-[500px] lg:min-h-[300px] rounded-xl bg-opacity-55 border-x-4 border-y-4 border-orange-400 shadow-2xl">
          <h1 className="text-6xl text-[#183642] m-5  ">
            <span className="text-slate-950">L</span>o
            <span className="text-slate-950">g</span>i
            <span className="text-slate-950">n</span>
          </h1>

          <div className="flex flex-row justify-center items-start w-full py-2">
            <h1 className="text-[#183642] text-2xl font-serif mx-2">
              User name
            </h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            className="p-2 rounded-md w-3/4 text-[#183642] mb-2"
          />
          <div className="flex flex-row justify-center items-start w-full ">
            <h1 className="text-[#183642] text-2xl font-serif mx-2 my-1">
              Password
            </h1>
          </div>
          <input
            type="password"
            placeholder="password"
            className="p-2 mx-5 rounded-md w-3/4 text-[#183642]"
          />

          <div className="flex flex-col justify-end items-end w-full ">
            <button className="flex flex-row position-relative gap-2 btn btn-primary bg-slate-900 text-white py-2 px-6 rounded-lg m-10">
              <TbLogin2 className="text-white w-5 h-5" />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
