import React, { useState } from "react";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [agency, setAgency] = useState("");
  const handleChange = (e) => {
    setAgency(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (form.checkValidity()) {
      navigate("/Home");
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[25%] shadow-inner p-5 bg-slate-50 h-[90vh]">
        <h1 className="font-bold text-xl">
          Create your
          <br /> PopX account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="h-[67vh]">
            <div className="flex relative my-4">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="p-3 w-full focus:border-2 focus:border-bgPrimary focus:outline-none peer rounded border border-slate-300"
              />
              <label
                htmlFor="name"
                className="absolute text-sm top-3 left-2 transition-all text-slate-400 peer-focus:top-[-10px] peer-focus:left-4 font-semibold bg-white px-4 peer-focus:bg-slate-50 peer-focus:text-purple-500"
              >
                Full Name
              </label>
            </div>
            <div className="flex relative">
              <input
                type="tel"
                name="Phone no"
                id="Phone no"
                required
                className="p-3 w-full focus:border-2 focus:border-bgPrimary focus:outline-none peer rounded border border-slate-300"
              />
              <label
                htmlFor="Phone no"
                className="absolute text-sm top-3 left-2 transition-all text-slate-400 peer-focus:top-[-10px] peer-focus:left-4 font-semibold bg-white px-4 peer-focus:bg-slate-50 peer-focus:text-purple-500"
              >
                Phone Number
              </label>
            </div>
            <div className="flex relative my-4">
              <input
                type="email"
                name="E-mail"
                id="E-mail"
                required
                className="p-3 w-full focus:border-2 focus:border-bgPrimary focus:outline-none peer rounded border border-slate-300"
              />
              <label
                htmlFor="E-mail"
                className="absolute text-sm top-3 left-2 transition-all text-slate-400 peer-focus:top-[-10px] peer-focus:left-4 font-semibold bg-white px-4 peer-focus:bg-slate-50 peer-focus:text-purple-500"
              >
                Your E-mail
              </label>
            </div>
            <div className="flex relative">
              <input
                type="password"
                name="Password"
                id="password"
                required
                className="p-3 w-full focus:border-2 focus:border-bgPrimary focus:outline-none peer rounded border border-slate-300"
              />
              <label
                htmlFor="password"
                className="absolute text-sm top-3 left-2 transition-all peer-focus:top-[-10px] peer-focus:left-4 font-semibold text-slate-400 bg-white peer-focus:bg-slate-50 px-4 peer-focus:text-purple-500"
              >
                Password
              </label>
            </div>
            <div className="flex relative my-4">
              <input
                type="text"
                name="Company Name"
                id="Company Name"
                required
                className="p-3 w-full focus:border-2 focus:border-bgPrimary focus:outline-none peer rounded border border-slate-300"
              />
              <label
                htmlFor="Company Name"
                className="absolute text-sm top-3 left-2 transition-all text-slate-400 peer-focus:top-[-10px] peer-focus:left-4 font-semibold bg-white px-4 peer-focus:bg-slate-50 peer-focus:text-purple-500"
              >
                Company Name
              </label>
            </div>

            {/* Radio button */}
            <div>
              <h3 className="text-sm mb-2">Are you an Agency?*</h3>
              <div className="flex gap-5 items-center">
                <label className="text-sm">
                  <input
                    type="radio"
                    value="Yes"
                    checked={agency === "Yes"}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label className="text-sm">
                  <input
                    type="radio"
                    value="No"
                    checked={agency === "No"}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <Btn
            name="Create Account"
            color="bg-gray-300 text-white hover:bg-blue-600"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
