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

// SINGLE RECIPE
export const getSingleRecipe = asyncHandler(async (req, res, next) => {
  const {
    params: { id },
  } = req;
  const { rowCount, rows } = await db.query(
    `SELECT * FROM recipes WHERE recipe_id=${id};`
  );
  if (!rowCount) throw new Error(`Recipe with ID = ${id} not found.`);
  res.json(rows);
});
