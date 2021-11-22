// ----------------- MODULES -----------------
import { Router } from "express";
import { getAllRecipes } from "../controllers/recipes.js";

// -------------------------------------------

const recipesRouter = Router();

recipesRouter.route("/").get(getAllRecipes);

export default recipesRouter;
