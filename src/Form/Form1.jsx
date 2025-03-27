import React from "react";
import Btn from "./Btn";
import { Link } from "react-router-dom";

const Form1 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[25%] shadow-inner p-5 bg-slate-50">
        <div className="h-[65vh]"></div>
        <h1 className="font-bold text-xl">Welcome to PopX</h1>
        <p className="text-slate-500 text-sm mt-1 mb-4">
          Lorem ipsum dolor sit amet.
          <br /> Lorem, ipsum dolor Lorem.
        </p>
        <Link to="/Signup">
          <Btn name="Create Account" color="bg-blue-600 text-white" />
        </Link>
        <Link to='/Login'>
          <div className="mt-2">
            <Btn
              name="Already Registered?Login"
              color="bg-purple-500 hover:bg-blue-600 hover:text-white"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Form1;
