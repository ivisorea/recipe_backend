// ----------------- MODULES -----------------
import { Router } from "express";
import { createRecipe, getAllRecipes, getSingleRecipe } from "../controllers/recipes.js";

// -------------------------------------------

const recipesRouter = Router();

recipesRouter.route("/").get(getAllRecipes).post(createRecipe);
recipesRouter.route("/:id").get(getSingleRecipe);

export default recipesRouter;
