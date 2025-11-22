import { useNavigate } from "react-router-dom";

function Authenticate({ children }) {
  const token = localStorage.getItem("userToken");
  const navigate = useNavigate();
  if (!token) {
   return navigate("/login");
  }

  return children;
}

export default Authenticate;
