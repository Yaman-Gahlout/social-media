import myaql from "mysql2/promise";
import { DB_NAME } from "../constants.js";
const connectMySQL = async () => {
  try {
    const connection = await myaql.createConnection({
      host: process.env.SQL_HOST,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
      //database: DB_NAME,
    });
  }
  catch (error) {
    console.error("MySQL Connection Error:", error);
    process.exit(1);
  }
};

export default connectMySQL;
