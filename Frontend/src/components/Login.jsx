import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  async function submitHandler(e) {
    e.preventDefault();
    const data = {
      person_username: username,
      person_password: password,
    };
    console.log(data);

    const response = await axios.post(
      "http://localhost:9000/person/login-person",
      data,
      {withCredentials: true}
     
    );
    toast.success("Logged in successfully");
    console.log(response);
    console.log(response.data.message.token);
    localStorage.setItem("userToken", response.data.message.token);
    navigate("/home");
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-950">
      <div className="flex mt-[100px] flex-col gap-5 h-[400px] w-[550px] shadow-2xl shadow-gray-900 border border-gray-200 rounded-2xl p-5 items-center">
        <h1 className="text-5xl  text-gray-200">Login</h1>
        <form className="flex flex-col gap-5 w-[80%] mt-8 items-center"
          onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-200 rounded-md w-full p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-200 rounded-md w-full p-[10px_20px] bg-gray-200 text-black placeholder:text-black outline-none"
          />
          <button
            className="mt-5 p-[10px_20px] cursor-pointer bg-blue-600 w-full text-gray-200 rounded-lg"
          >
            Login
          </button>
          <p className="text-lg text-gray-200 opacity-80">
            New to openPost?{" "}
            <a href="/signup" className="text-blue-700 cursor-pointer">
              Register
            </a>
          </p>
        </form>

      </div>
    </div>
  );
}

export default Login;
