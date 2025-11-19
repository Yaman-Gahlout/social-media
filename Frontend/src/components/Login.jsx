import React from "react";

function Login({ setCurrentTab }) {
  return (
    <div>
      <div className="flex mt-[100px] flex-col gap-5 w-[400px] h-[400px] shadow-2xl shadow-gray-900 border border-gray-200 rounded-2xl p-5 items-center">
        <h1 className="text-5xl  text-gray-200">Login</h1>
        <form className="flex flex-col gap-5 mt-8 items-center">
          <input
            type="email"
            placeholder="Enter email"
            className="border border-gray-200 rounded-md w-[350px] p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="border border-gray-200 rounded-md w-[350px] p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
          />
          <button
            //onClick={() => navigate("/signup")}
            className="mt-5 p-[10px_20px] border cursor-pointer border-gray-200 w-full text-gray-200 rounded-lg"
          >
            Login
          </button>
          <p className="text-lg text-gray-200 opacity-80">
            New to openPost?{" "}
            <a
              onClick={() => setCurrentTab("Signup")}
              className="text-blue-700 cursor-pointer"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
