import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { db } from "../db/index.js";
import { hashPassword, comparePassword } from "../utils/hashPassword.js";
import { generateToken } from "../utils/generateToken.js";
//import { dobToAgeFinder } from "../utils/dobToAge.js";

const registerPerson = async (req, res) => {
  const {
    person_id,
    person_username,
    person_fname,
    person_lname,
    person_dob,
    person_gender,
    person_password,
  } = req.body;
  if (
    !person_id ||
    !person_username ||
    !person_fname ||
    !person_lname ||
    !person_dob ||
    !person_gender ||
    !person_password
  ) {
    throw new ApiError(400, "All fields are required");
  }
  let [existedUser] = await db.execute(
    `SELECT * FROM Persons WHERE person_id = ? OR person_username = ?`,
    [person_id, person_username]
  );
  if (existedUser.length > 0) {
    throw new ApiError(409, "User allready exists");
  }
  const hashedPassword = await hashPassword(person_password);
  try {
    const [p] = await db.execute(
      `INSERT INTO Persons (person_id, person_username, person_fname, person_lname, person_dob, person_gender, person_password) VALUES (?,?,?,?,?,?,?)`,
      [
        person_id,
        person_username,
        person_fname,
        person_lname,
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
};
const loginPerson = async (req, res) => {
  const { person_username, person_password } = req.body;
  if (!person_username || !person_password) {
    throw new ApiError(400, "All fields are required");
  }
  let [user] = await db.execute(
    `SELECT * FROM Persons WHERE person_username = ?`,
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
  const token = generateToken(user[0].person_id, user[0].person_username);
  const options = {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
  };
  return res
    .status(200)
    .cookie("Token", token, options)
    .json(new ApiResponse(true, "Login successful", null));
};
export { registerPerson, loginPerson };
