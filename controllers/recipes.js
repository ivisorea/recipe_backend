// ----------------- MODULES -----------------
import db from "../db/client.js";
import dotenv from "dotenv";
dotenv.config();
import asyncHandler from "../middlewares/asyncHandler.js";
// -------------------------------------------

// ALL RECIPES
export const getAllRecipes = asyncHandler(async (req, res, next) => {
  const { rowCount, rows } = await db.query("SELECT * FROM recipes;");
  // res.json({ total: rowCount, recipes: rows });
  res.json(rows);
});

// SINGLE RECIPE
export const getSingleRecipe = asyncHandler(async (req, res, next) => {
  const {
    params: { restaurant },
  } = req;
  const { rowCount, rows } = await db.query(
    `SELECT * FROM recipes WHERE recipe_id=${id};`
  );
  if (!rowCount) throw new Error(`Recipe with ID = ${id} not found.`);
  res.json(rows);
});


// CREATE RECIPE
export const createRecipe = asyncHandler(async (req, res, next) => {
  const {
    body: { recipe_name, recipe_image, recipe_description, recipe_ingredients, recipe_method, recipe_event },
  } = req;
  const { rows: [recipe] } = await db.query(
    `INSERT INTO recipes (recipe_name, recipe_image, recipe_description, recipe_ingredients, recipe_method, recipe_event) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [recipe_name, 
    recipe_image, 
    recipe_description, 
    recipe_ingredients, 
    recipe_method, 
    recipe_event]
  );
  res.json(recipe);
  
});


//Update recipe
export const upDaterecipe = asyncHandler(async(req, res ) => {
  const {
    params: { id },
    body: { recipe_name, recipe_image, recipe_description, recipe_ingredients, recipe_method, recipe_event },
  } = req;
  const { rows: [recipe] } = await db.query(
    `UPDATE recipes SET recipe_name=$1, recipe_image=$2, recipe_description=$3, recipe_ingredients=$4, recipe_method=$5, recipe_event=$6 WHERE recipe_id=$7 RETURNING *;`,
    [recipe_name,
    recipe_image,
    recipe_description,
    recipe_ingredients,
    recipe_method,
    recipe_event,
    id]
  );
  res.json(recipe);
});