import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { db } from "../db/index.js";
import { hashPassword, comparePassword } from "../utils/hashPassword.js";
import { createToken } from "../utils/jwtCreator.js";
//import { dobToAgeFinder } from "../utils/dobToAge.js";

const registerPerson = asyncHandler(async (req, res) => {
  const {
    person_username,
    person_fname,
    person_lname,
    person_email,
    person_dob,
    person_gender,
    person_password,
  } = req.body;
  if (
    !person_username ||
    !person_fname ||
    !person_lname ||
    !person_email ||
    !person_dob ||
    !person_gender ||
    !person_password
  ) {
    throw new ApiError(400, "All fields are required");
  }
  console.log(
    person_username,
    person_fname,
    person_lname,
    person_email,
    person_dob,
    person_gender,
    person_password
  );
  let [existedUser] = await db.execute(
    `SELECT * FROM Person WHERE person_username = ? or person_email = ?`,
    [person_username, person_email]
  );
  if (existedUser.length > 0) {
    throw new ApiError(409, "User allready exists");
  }
  const hashedPassword = await hashPassword(person_password);
  try {
    const [p] = await db.execute(
      `INSERT INTO Person(person_username, person_fname, person_lname, person_email, person_dob, person_gender, person_password) VALUES (?,?,?,?,?,?,?)`,
      [
        person_username,
        person_fname,
        person_lname,
        person_email,
        person_dob,
        person_gender,
        hashedPassword,
      ]
    );
    res
      .status(201)
      .json(new ApiResponse(true, "User registered successfully", null));
  } catch (error) {
    throw new ApiError(500, "Error while registering on DB");
  }
});
const loginPerson = asyncHandler(async (req, res) => {
  const { person_username, person_password } = req.body;
  if (!person_username || !person_password) {
    throw new ApiError(400, "All fields are required");
  }
  let [user] = await db.execute(
    `SELECT * FROM Person WHERE person_username = ?`,
    [person_username]
  );
  if (user.length === 0) {
    throw new ApiError(404, "User not found");
  }
  const isPasswordValid = await comparePassword(
    person_password,
    user[0].person_password
  );
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid password");
  }
  const token = createToken(user[0].person_username);
  console.log("Generated Token: ", token);
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  };
  return res
    .status(200)
    .cookie("personToken", token, options)
    .json(new ApiResponse(true, "Login successful", {token:token}));
});
const logoutPerson = asyncHandler(async (req, res) => {
  const options = {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
  };
  return res
    .status(200)
    .clearCookie("personToken", options)
    .json(new ApiResponse(true, "Logout successful", null));
});
const getPersonDetails = asyncHandler(async (req, res) => {
  const person_username = req.person_username;
  console.log("Authenticated Person: ", person_username);
  try {
    const person = await db.execute(
      `SELECT person_username, person_fname, person_lname, person_email, person_dob, person_gender FROM Person WHERE person_username = ?`,
      [person_username]
    );
    if (!person) {
      throw new ApiError(404, "Person not found");
    }
    res
      .status(200)
      .json(
        new ApiResponse(true, "Person details fetched successfully", person[0])
      );
  } catch (error) {
    throw new ApiError(500, "Error while fetching person details from DB");
  }
});
const uploadPost = asyncHandler(async (req, res) => {
  const { post_content } = req.body;
  if (!post_content) {
    throw new ApiError(400, "All fields are required");
  }
  console.log("Post Data: ", post_content);
  const person = req.person_username;
  const [lastPost] = await db.execute(
    `SELECT post_id FROM Post ORDER BY post_id DESC LIMIT 1`
  );
  const newPostId = lastPost[0] ? lastPost[0].post_id + 1 : 1000;
  if (!newPostId) {
    throw new ApiError(500, "Error while generating post ID");
  }
  console.log("New Post ID: ", newPostId);
  console.log("Authenticated Person for Post: ", person);
  const date = new Date();
  const formatted = date.toISOString().split("T")[0];
  console.log(formatted);
  try {
    const [p] = await db.execute(
      `INSERT INTO Post(post_id, post_content, person_username,createdAt) VALUES (?,?,?,?)`,
      [newPostId, post_content, person, formatted]
    );
    res
      .status(201)
      .json(new ApiResponse(true, "Post uploaded successfully", null));
  } catch (error) {
    throw new ApiError(500, "Error while uploading post to DB");
  }
});
const getAllPosts = asyncHandler(async (req, res) => {
  const person_username = req.person_username;
  console.log("Authenticated Person for Fetching Posts: ", person_username);
  try {
    const person = await db.execute(
      `SELECT * FROM Person WHERE person_username = ?`,
      [person_username]
    );
    if (!person) {
      throw new ApiError(404, "Person not found");
    }
    const posts = await db.execute(`
    SELECT 
    po.post_id,po.post_content,po.createdAt,p.person_username,p.person_fname,p.person_lname,COUNT(l.post_id) AS like_count
    FROM Post AS po
    JOIN Person AS p 
    ON po.person_username = p.person_username
    LEFT JOIN Liked AS l 
    ON po.post_id = l.post_id
    GROUP BY 
    po.post_id,po.post_content,po.createdAt,p.person_username,p.person_fname,p.person_lname
    ORDER BY 
    po.createdAt DESC;`);
    const likedPosts = await db.execute(
      `SELECT post_id FROM Liked WHERE person_username = ?`,
      [person_username]
    );

    res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      data: {
        person: person[0],
        posts: posts[0],
        likedPosts: likedPosts[0],
      },
    });
  } catch (error) {
    throw new ApiError(500, "Error while fetching posts from DB");
  }
});
const deletePost = asyncHandler(async (req, res) => {
  const { post_id } = req.params;
  const person_username = req.person_username;
  console.log("Authenticated Person for Deleting Post: ", person_username);
  try {
    const [post] = await db.execute(
      `SELECT * FROM Post WHERE post_id = ? AND person_username = ?`,
      [post_id, person_username]
    );
    if (post.length === 0) {
      throw new ApiError(
        404,
        "Post not found or you are not authorized to delete this post"
      );
    }
    await db.execute(
      `DELETE FROM Post WHERE post_id = ? AND person_username = ?`,
      [post_id, person_username]
    );
    res
      .status(200)
      .json(new ApiResponse(true, "Post deleted successfully", null));
  } catch (error) {
    throw new ApiError(500, "Error while deleting post from DB");
  }
});
const likePost = asyncHandler(async (req, res) => {
  const { post_id } = req.params;
  const person_username = req.person_username;
  console.log("Authenticated Person for Liking Post: ", person_username);
  try {
    const person = await db.execute(
      `SELECT * FROM Person WHERE person_username = ? and post_id = ?`,
      [person_username, post_id]
    );
    if (!person) {
      const dislikePost = await db.execute(
        `DELETE FROM Liked WHERE post_id = ? AND person_username = ?`,
        [post_id, person_username]
      );
      return res
        .status(200)
        .json(new ApiResponse(true, "Post disliked successfully", null));
    }

    const like = await db.execute(
      `INSERT INTO Liked (post_id, person_username) VALUES (?, ?)`,
      [post_id, person_username]
    );
    res
      .status(200)
      .json(new ApiResponse(true, "Post liked successfully", null));
  } catch (error) {
    throw new ApiError(500, "Error while liking post in DB");
  }
});
export {
  registerPerson,
  loginPerson,
  uploadPost,
  getPersonDetails,
  getAllPosts,
  deletePost,
  logoutPerson,
  likePost,
};
