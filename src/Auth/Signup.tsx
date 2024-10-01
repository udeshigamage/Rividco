import { useFormik } from "formik";
import pico1 from "../assets/solar4.jpg";

import Navbar from "../Web/Navbar";
import { TbLogin2 } from "react-icons/tb";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
export function Signup() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      contactno: "",
      password: "",
      email: "",
      Address: "",
      confirmpassword: "",
    },
    onSubmit: async (values) => {
      await axios.post(`${API_URL}/Systemuser`, values);
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
          <div className="flex flex-col justify-center items-center bg-white text-[#183642] font-serif lg:min-w-[800px] h-[500px] rounded-xl bg-opacity-55 border-x-4 border-y-4 border-gray-700 shadow-2xl text-white bg-black">
            <h1 className="text-6xl text-[#183642] m-5  ">
              <span className="text-slate-950">S</span>ign
              <span className="text-slate-950">U</span>p
            </h1>

            <div className="flex flex-row gap-x-10 w-[600px] ">
              <div className="basis-1/2 ">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Firstname"
                  className="rounded-md p-2 text-white w-full "
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                />
                <input
                  type="tel"
                  id="contactno"
                  name="contactno"
                  placeholder="Contact Number (+94760305481)"
                  className="rounded-md p-2 my-2 text-white w-full "
                  onChange={formik.handleChange}
                  value={formik.values.contactno}
                />

                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  className="rounded-md p-2 my-2 text-white w-full"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <textarea
                  className="rounded-md p-2 my-2 text-white w-full "
                  placeholder="Address"
                  id="Address"
                  name="Address"
                  rows={4}
                  cols={50}
                  onChange={formik.handleChange}
                  value={formik.values.Address}
                />
              </div>

              <div className="basis-1/2 ">
                <input
                  type="text"
                  placeholder="Lastname"
                  id="lastname"
                  name="lastname"
                  className="rounded-md p-2 text-white w-full"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                />

                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  className="rounded-md p-2 my-2 text-white w-full"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  className="rounded-md p-2 my-2 text-white w-full"
                  onChange={formik.handleChange}
                  value={formik.values.confirmpassword}
                />
              </div>
            </div>

            <div className="flex flex-col justify-end items-end w-full ">
              <button
                className="flex flex-row position-relative gap-2 btn btn-primary bg-slate-900 text-white py-2 px-6 rounded-lg m-2"
                type="submit"
              >
                <TbLogin2 className="text-white w-5 h-5" />
                Create Account
              </button>
            </div>
            <div className="flex flex-row justify-center items-center">
              {" "}
              Already Have account ?{" "}
              <a
                href="/signin"
                className="text-slate-950  font-bold bg-opacity-90 rounded-lg px-5 "
              >
                Signin
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
