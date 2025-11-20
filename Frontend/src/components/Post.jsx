import React from "react";
import { FaRegHeart } from "react-icons/fa";

function Post({ post }) {
  return (
    <div className="h-[350px] w-[380px] border border-gray-200 text-gray-200 rounded-2xl p-5 flex flex-col gap-4 hover:border-blue-600 transition-all ease-in-out duration-700">
      <div className="flex flex-col">
        <h1 className="text-xl">
          {post.firstName} {post.lastName}
        </h1>
        <h1 className="text-md text-blue-600">{post.username}</h1>
      </div>
      <p>{post.message}</p>
      <p className="flex items-center gap-2 font-bold text-xl">
        <FaRegHeart /> <span>{post.like}</span>
      </p>
    </div>
  );
}

export default Post;
