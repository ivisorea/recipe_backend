// ----------------- MODULES -----------------
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
// -------------------------------------------

const { Pool } = pg;
const connectionString = process.env.PG_CONNECTION;

const pool = new Pool({
  connectionString,
});

export default pool;
