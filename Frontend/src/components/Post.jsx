import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Post({ post, active }) {
  return (
    <div className="h-[350px] w-[380px] border border-gray-200 text-gray-200 rounded-2xl p-5 flex flex-col gap-4 hover:border-blue-600 transition-all ease-in-out duration-700">
      <div className="flex w-full justify-between items-center">
        <div>
          <h1 className="text-xl">
            {post.firstName} {post.lastName}
          </h1>
          <h1 className="text-md text-blue-600">{post.username}</h1>
        </div>
        {active && (
          <div className="flex gap-5">
            <FaRegEdit className="text-2xl text-white cursor-pointer" />
            <MdDelete className="text-2xl text-red-500 cursor-pointer" />
          </div>
        )}
      </div>
      <p>{post.message}</p>
      <p className="flex items-center gap-2 font-bold text-xl">
        <FaRegHeart /> <span>{post.like}</span>
      </p>
    </div>
  );
}

export default Post;
