import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();

  async function handleLogout() {
     const response = await axios.get("http://localhost:9000/person/logout-person", {
        withCredentials: true,
      });
      console.log("Logout Response: ", response.data);
      localStorage.removeItem("userToken");
      navigate("/login");
  }
  return <div><button
              onClick={handleLogout}
              className="p-[10px_20px] cursor-pointer text-gray-200 rounded-lg bg-blue-600"
            >
              Logout
            </button></div>;
}

export default Profile;
