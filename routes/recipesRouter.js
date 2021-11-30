// ----------------- MODULES -----------------
import { Router } from "express";
import { getAllRecipes, getSingleRecipe } from "../controllers/recipes.js";

// -------------------------------------------

const recipesRouter = Router();

recipesRouter.route("/").get(getAllRecipes);
recipesRouter.route("/:id").get(getSingleRecipe);

export default recipesRouter;
