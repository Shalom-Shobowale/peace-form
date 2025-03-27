import React from "react";
import Btn from "./Btn";
import {  useNavigate } from "react-router-dom";

const Login = () => {
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
          Signin to your
          <br /> PopX account
        </h1>
        <p className="text-slate-500 text-sm mt-1 mb-4">
          Lorem ipsum dolor sit amet.
          <br /> Lorem, ipsum dolor Lorem.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex relative">
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
          <div className="flex relative my-4">
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
          <Btn
            name="Login"
            color="bg-gray-300 text-white hover:bg-blue-600"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
