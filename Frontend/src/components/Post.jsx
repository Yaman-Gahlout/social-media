import axios from "axios";
import React from "react";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";

function Post({ post, setPosts, active, user, likedPosts, setLikedPosts }) {
  async function deleteHandler() {
    setPosts((prevPosts) =>
      prevPosts.filter((p) => p.post_id !== post.post_id)
    );
    await axios.delete(
      `http://localhost:9000/post/deletePost/${post.post_id}`,
      {
        withCredentials: true,
      }
    );
    toast.success("Post Deleted Successfully");
  }

  console.log("Liked Posts in Post Component:", likedPosts);

  async function likeHandler() {
    if (likedPosts.includes(post.post_id)) {
      setLikedPosts((prev) => prev.filter((id) => id !== post.post_id));
      await axios.post(
        `http://localhost:9000/post/likePost/${post.post_id}`,
        {},
        {
          withCredentials: true,
        }
      );
      toast.success("Post Unliked");
    } else {
      setLikedPosts((prev) => [...prev, post.post_id]);
      await axios.post(
        `http://localhost:9000/post/likePost/${post.post_id}`,
        {},
        {
          withCredentials: true,
        }
      );
      toast.success("Post Liked");
    }
  }

  return (
    <div className="h-[300px] w-[48%] border bg-gray-200 rounded-2xl p-5 flex flex-col gap-4 hover:border-blue-600 transition-all ease-in-out duration-700">
      <div className="flex w-full justify-between items-center">
        <div>
          <h1 className="text-xl">
            {post.person_fname} {post.person_lname}
          </h1>
          <h1 className="text-md text-blue-600">@{post.person_username}</h1>
        </div>
        {active && (
          <div className="flex gap-5">
            <MdDelete
              className="text-2xl text-red-500 cursor-pointer"
              onClick={deleteHandler}
            />
          </div>
        )}
      </div>
      <p>{post.post_content}</p>
      <div>
        {likedPosts.includes(post.post_id) ? (
          <FcLike className="text-3xl cursor-pointer" onClick={likeHandler} />
        ) : (
          <FaRegHeart
            className="text-3xl cursor-pointer"
            onClick={likeHandler}
          />
        )}
      </div>
    </div>
  );
}

export default Post;
