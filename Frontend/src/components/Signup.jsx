import React from "react";

function Signup() {
  return (
    <div>
      <div className="flex mt-20 mb-10 flex-col gap-5 w-[700px] shadow-2xl shadow-gray-900 border border-gray-200 rounded-2xl p-5 items-center">
        <h1 className="text-5xl  text-gray-200">Signup</h1>
        <form className="flex flex-col w-[80%] gap-5 mt-8 items-center">
          <input
            type="text"
            placeholder="Enter username"
            className="border border-gray-200 rounded-md w-full p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
          />
          <div className="flex gap-4 w-full">
            <input
              type="text"
              placeholder="Enter firstname"
              className="border border-gray-200 rounded-md w-[50%] p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
            />
            <input
              type="text"
              placeholder="Enter lastname"
              className="border border-gray-200 rounded-md w-[50%] p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Enter email"
            className="border border-gray-200 w-full rounded-md p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="border border-gray-200 rounded-md w-full p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
          />

          <select
            name=""
            id=""
            className="border border-gray-200 rounded-md w-full p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
          >
            <option value="" defaultValue>
              -- Select Gender --
            </option>
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
          <input
            id="dob"
            type="date"
            placeholder="Enter DOB"
            className="border border-gray-200 rounded-md w-full p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
          />

          <button className="mt-5 p-[10px_20px] cursor-pointer w-full text-gray-200 rounded-lg bg-blue-600">
            Create account
          </button>
          <p className="text-lg text-gray-200 opacity-80">
            Already have an account?{" "}
            <a
              href="/"
              onClick={() => setCurrentTab("Login")}
              className="text-blue-700"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
