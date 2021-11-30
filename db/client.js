// ----------------- MODULES -----------------
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
// -------------------------------------------

const { Pool } = pg;
const connectionString = process.env.CONNECTION_STRING;

const pool = new Pool({
  connectionString,
});

export default pool;
