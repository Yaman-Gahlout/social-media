import React, { useState } from "react";

function CreatePost() {
  const [postContent, setPostContent] = useState("");
  sumbitHandler = async (e) => {
    e.preventDefault();
    const data = {
      post_content: postContent,
    };

    console.log(data);
    const response = await axios.post(
      "http://localhost:9000/post/create-post",
      data,
      { withCredentials: true }
    );
    console.log(response);
  };
  return (
    <div className="h-screen w-screen flex justify-center bg-gray-950">
      <div className="w-[80%] flex flex-col mt-10 items-center">
        <h1 className="text-4xl text-gray-200 uppercase font-bold">
          Create Post
        </h1>
        <form
          action=""
          className="flex flex-col w-[80%] gap-5 mt-8 items-center"
          onClick={sumbitHandler}
        >
          <textarea
            name=""
            id=""
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Write here your message..."
            className="border border-gray-200 w-full h-[300px] rounded-md p-[10px_20px] text-gray-200 text-xl"
          ></textarea>

          <button className="mt-5 text-xl p-[10px_20px] w-[200px] cursor-pointer text-gray-200 rounded-lg bg-blue-600">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
