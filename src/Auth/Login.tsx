import { useFormik } from "formik";
import pico1 from "../assets/solar4.jpg";

import Navbar from "../Web/Navbar";
import { TbLogin2 } from "react-icons/tb";
import axios from "axios";
import { use } from "react";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
export function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",

      password: "",
    },
    onSubmit: async (values) => {
      const response = await axios.post(`${API_URL}/Systemuser/login`, values);
      if (response.data.token == "") throw new Error("Invalid credentials");
      localStorage.setItem("token", response.data.token);
      navigate("/app");
      console.log(values);
    },
  });
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
        <form onSubmit={formik.handleSubmit}>
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
              type="email"
              placeholder="Username"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
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
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="p-2 mx-5 rounded-md w-3/4 text-[#183642]"
            />

            <div className="flex flex-col justify-end items-end w-full ">
              <button
                className="flex flex-row position-relative gap-2 btn btn-primary bg-slate-900 text-white py-2 px-6 rounded-lg m-10"
                type="submit"
              >
                <TbLogin2 className="text-white w-5 h-5" />
                Login
              </button>
            </div>
            <div className="flex flex-row justify-center items-center">
              {" "}
              Don't Have account ?{" "}
              <a
                href="/signup"
                className="text-slate-950  font-bold bg-opacity-90 rounded-lg px-5 "
              >
                Signup
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
