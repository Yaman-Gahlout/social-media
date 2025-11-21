import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const navigate = useNavigate();
  async function submitHandler() {
    const data = {
      person_username: username,
      person_fname: firstName,
      person_lname: lastName,
      person_dob: dob,
      person_gender: gender,
      person_password: password,
    };

    const response = await axios.post(
      "http://localhost:9000/person/register-person",
      data
    );
    navigate("/home");
    console.log(response);
  }
  return (
    <div>
      <div className="flex mt-20 mb-10 flex-col gap-5 w-[700px] shadow-2xl shadow-gray-900 border border-gray-200 rounded-2xl p-5 items-center">
        <h1 className="text-5xl  text-gray-200">Signup</h1>
        <form className="flex flex-col w-[80%] gap-5 mt-8 items-center">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-200 rounded-md w-full p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
          />
          <div className="flex gap-4 w-full">
            <input
              type="text"
              placeholder="Enter firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-gray-200 rounded-md w-[50%] p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
            />
            <input
              type="text"
              placeholder="Enter lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-gray-200 rounded-md w-[50%] p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-200 w-full rounded-md p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-200 rounded-md w-full p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
          />

          <select
            name=""
            id=""
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border border-gray-200 rounded-md w-full p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
          >
            <option value="" defaultValue>
              -- Select Gender --
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            id="dob"
            type="date"
            placeholder="Enter DOB"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="border border-gray-200 rounded-md w-full p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
          />

          <button
            onClick={submitHandler}
            className="mt-5 p-[10px_20px] cursor-pointer w-full text-gray-200 rounded-lg bg-blue-600"
          >
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
