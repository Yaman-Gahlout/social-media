import React, { useState } from "react";
import Post from "./Post";
import { IoMdCreate } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Home() {
  const [currentTab, setCurrentTab] = useState("All Posts");

  const navigate = useNavigate("");
  const posts = [
    {
      firstName: "Yaman",
      lastName: "Gahlout",
      username: "@yamangahlout",
      message:
        "Post content refers to creating and publishing material, such as text, photos, or videos, on online platforms like social media, blogs, or websites. Content should be tailored to the platform and audience, with common types including informative posts, engaging questions, behind-the-scenes looks, entertainment, and promotional material",
      like: 20,
    },
    {
      firstName: "Yaman",
      lastName: "Gahlout",
      username: "@vibhavasu",
      message:
        "Post content refers to creating and publishing material, such as text, photos, or videos, on online platforms like social media, blogs, or websites. Content should be tailored to the platform and audience, with common types including informative posts, engaging questions, behind-the-scenes looks, entertainment, and promotional material",
      like: 20,
    },
    {
      firstName: "Yaman",
      lastName: "Gahlout",
      username: "@yamangahlout",
      message:
        "Post content refers to creating and publishing material, such as text, photos, or videos, on online platforms like social media, blogs, or websites. Content should be tailored to the platform and audience, with common types including informative posts, engaging questions, behind-the-scenes looks, entertainment, and promotional material",
      like: 20,
    },
    {
      firstName: "Yaman",
      lastName: "Gahlout",
      username: "@umang",
      message:
        "Post content refers to creating and publishing material, such as text, photos, or videos, on online platforms like social media, blogs, or websites. Content should be tailored to the platform and audience, with common types including informative posts, engaging questions, behind-the-scenes looks, entertainment, and promotional material",
      like: 20,
    },
    {
      firstName: "Yaman",
      lastName: "Gahlout",
      username: "@suryansh",
      message:
        "Post content refers to creating and publishing material, such as text, photos, or videos, on online platforms like social media, blogs, or websites. Content should be tailored to the platform and audience, with common types including informative posts, engaging questions, behind-the-scenes looks, entertainment, and promotional material",
      like: 20,
    },
    {
      firstName: "Yaman",
      lastName: "Gahlout",
      username: "@abhinav",
      message:
        "Post content refers to creating and publishing material, such as text, photos, or videos, on online platforms like social media, blogs, or websites. Content should be tailored to the platform and audience, with common types including informative posts, engaging questions, behind-the-scenes looks, entertainment, and promotional material",
      like: 20,
    },
    {
      firstName: "Yaman",
      lastName: "Gahlout",
      username: "@yamangahlout",
      message:
        "Post content refers to creating and publishing material, such as text, photos, or videos, on online platforms like social media, blogs, or websites. Content should be tailored to the platform and audience, with common types including informative posts, engaging questions, behind-the-scenes looks, entertainment, and promotional material",
      like: 20,
    },
    {
      firstName: "Yaman",
      lastName: "Gahlout",
      username: "@yamangahlout",
      message:
        "Post content refers to creating and publishing material, such as text, photos, or videos, on online platforms like social media, blogs, or websites. Content should be tailored to the platform and audience, with common types including informative posts, engaging questions, behind-the-scenes looks, entertainment, and promotional material",
      like: 20,
    },
    {
      firstName: "Yaman",
      lastName: "Gahlout",
      username: "@yamangahlout",
      message:
        "Post content refers to creating and publishing material, such as text, photos, or videos, on online platforms like social media, blogs, or websites. Content should be tailored to the platform and audience, with common types including informative posts, engaging questions, behind-the-scenes looks, entertainment, and promotional material",
      like: 20,
    },
    {
      firstName: "Yaman",
      lastName: "Gahlout",
      username: "@shudhanshu",
      message:
        "Post content refers to creating and publishing material, such as text, photos, or videos, on online platforms like social media, blogs, or websites. Content should be tailored to the platform and audience, with common types including informative posts, engaging questions, behind-the-scenes looks, entertainment, and promotional material",
      like: 20,
    },
    {
      firstName: "Yaman",
      lastName: "Gahlout",
      username: "@yamangahlout",
      message:
        "Post content refers to creating and publishing material, such as text, photos, or videos, on online platforms like social media, blogs, or websites. Content should be tailored to the platform and audience, with common types including informative posts, engaging questions, behind-the-scenes looks, entertainment, and promotional material",
      like: 20,
    },
    {
      firstName: "Yaman",
      lastName: "Gahlout",
      username: "@yamangahlout",
      message:
        "Post content refers to creating and publishing material, such as text, photos, or videos, on online platforms like social media, blogs, or websites. Content should be tailored to the platform and audience, with common types including informative posts, engaging questions, behind-the-scenes looks, entertainment, and promotional material",
      like: 20,
    },
  ];
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
              onClick={() => setCurrentTab("All Posts")}
            >
              All Posts
            </h1>
            <h1
              className={`cursor-pointer ${
                currentTab === "Your Posts" && "text-blue-600"
              }`}
              onClick={() => setCurrentTab("Your Posts")}
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
            if (post.username === "@yamangahlout") {
              return <Post post={post} />;
            }
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
