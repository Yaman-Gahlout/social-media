import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate("");
  return (
    <div className="h-screen w-screen bg-gray-950">
      <div className="w-full flex justify-center p-5">
        <div className="w-[85%] flex justify-between items-center">
          <h1 className="text-3xl text-gray-300 cursor-pointer">openPost.</h1>{" "}
          <div className="flex w-[15%] justify-between">
            <button
              onClick={() => navigate("/signup")}
              className="p-[10px_20px] border cursor-pointer border-gray-200 text-gray-200 rounded-lg"
            >
              Signup
            </button>
            <button
              onClick={() => navigate("/login")}
              className="p-[10px_20px] border cursor-pointer border-gray-200 bg-gray-300 rounded-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center p-5">
        <div className="flex flex-col justify-center items-center gap-[50px] mt-[100px]">
          <div className="flex justify-center items-center gap-7">
            <div className="h-[250px] w-[350px] bg-white rounded-2xl"></div>
            <div className="h-[250px] w-[350px] bg-white rounded-2xl"></div>
          </div>
          <button className="p-[10px_20px] w-[200px] border cursor-pointer border-gray-200 text-gray-200 rounded-lg">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
