import { Link } from "react-router-dom";
import pico1 from "../assets/solar4.jpg";
import { TextGenerateEffect } from "../Components/Textgenerator";

import Navbar from "../Web/Navbar";

export function Home() {
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
        <TextGenerateEffect words={"Welcome to Rividco Projects"} />
        <Link
          to={"/login"}
          className="text-white bg-slate-900 font-bold bg-opacity-90 rounded-lg px-5 py-2 mt-5"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
