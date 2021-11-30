// ----------------- MODULES -----------------
import db from "../db/client.js";
import dotenv from "dotenv";
dotenv.config();
import asyncHandler from "../middlewares/asyncHandler.js";
// -------------------------------------------

// ALL RECIPES
export const getAllRecipes = asyncHandler(async (req, res, next) => {
  const { rowCount, rows } = await db.query("SELECT * FROM recipes;");
  res.json({ total: rowCount, recipes: rows });
});
