import mysql from "mysql2/promise";
import { DB_NAME } from "../constants.js";

const db = await mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: DB_NAME,
});

export { db };
