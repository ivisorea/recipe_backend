// ----------------- MODULES -----------------
import db from "../db/client.js";
import dotenv from "dotenv";
dotenv.config();
// -------------------------------------------

// ALL RECIPES
export const getAllRecipes = async (req, res, next) => {
  const { rowCount, rows } = await db.query("SELECT * FROM recipes;");
  res.json({ total: rowCount, recipes: rows });
};
