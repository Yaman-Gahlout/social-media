import React, { useState } from "react";
import Post from "./Post";
import { IoMdCreate } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [currentTab, setCurrentTab] = useState("All Posts");
  const [active, setActive] = useState(false);

  const navigate = useNavigate("");

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);

  React.useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:9000/post/getAllPosts", {
        withCredentials: true,
      });
      console.log("Fetched Posts Data: ", response.data);

      setPosts(response.data.data.posts);
      setUser(response.data.data.person);
      console.log("Posts Data: ", response.data.data.posts);
      console.log("User Data: ", response.data.data.person);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  fetchPosts();
}, []);

  return (
    <div className="h-screen flex flex-col items-center w-screen bg-gray-950">
      <div className="w-full flex justify-center p-5">
        <div className="w-[85%] flex justify-between items-center">
          <h1 className="text-3xl text-gray-300 cursor-pointer">openPost.</h1>{" "}
          <div className="flex justify-between text-gray-200 w-[30%] uppercase">
            <h1
              className={`cursor-pointer ${
                currentTab === "All Posts" && "text-blue-600"
              }`}
              onClick={() => {
                setCurrentTab("All Posts");
                setActive(false);
              }}
            >
              All Posts
            </h1>
            <h1
              className={`cursor-pointer ${
                currentTab === "Your Posts" && "text-blue-600"
              }`}
              onClick={() => {
                setCurrentTab("Your Posts");
                setActive(true);
              }}
            >
              Your Posts
            </h1>
            <h1
              className="cursor-pointer"
              onClick={() => navigate("/create-post")}
            >
              <span>Create Post</span>
            </h1>

            <div
              onClick={() => navigate("/profile")}
              className="cursor-pointer"
            >
              Profile
            </div>
          </div>
        </div>
      </div>
      {currentTab == "All Posts" && (
        <div className="w-[85%] mt-12 pb-[30px] flex flex-wrap gap-8 justify-center items-center">
          {posts.map((post) => (
            <Post post={post} />
          ))}
        </div>
      )}
      {currentTab == "Your Posts" && (
        <div className="w-[85%] mt-12 pb-[30px] flex flex-wrap gap-8 justify-center ">
          {posts.map((post) => {
            if (post.person_username === user[0].person_username) {
              return <Post post={post} key={post.post_id} setPosts={setPosts} active={active} />;
            }
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
