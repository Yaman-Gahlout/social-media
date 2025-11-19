import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";

function Main() {
  const navigate = useNavigate("");
  const [currentTab, setCurrentTab] = useState("Login");
  return (
    <div className="h-screen w-screen bg-gray-950">
      <div className="w-full flex justify-center p-5">
        <div className="w-[85%] flex justify-between items-center">
          <h1 className="text-3xl text-gray-300 cursor-pointer">openPost.</h1>{" "}
          <div className="">
            {currentTab === "Signup" && (
              <button
                onClick={() => setCurrentTab("Login")}
                className="p-[10px_20px] border cursor-pointer border-gray-200 text-gray-200 rounded-lg hover:text-black hover:bg-gray-200 transition-all ease-in-out duration-700"
              >
                Login
              </button>
            )}
            {currentTab === "Login" && (
              <button
                onClick={() => setCurrentTab("Signup")}
                className="p-[10px_20px] border cursor-pointer border-gray-200 text-gray-200 rounded-lg hover:text-black hover:bg-gray-200 transition-all ease-in-out duration-700"
              >
                Signup
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center p-5">
        {currentTab === "Login" && <Login setCurrentTab={setCurrentTab} />}
        {currentTab === "Signup" && <Signup setCurrentTab={setCurrentTab} />}
      </div>
    </div>
  );
}

export default Main;
