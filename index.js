// ----------------- MODULES -----------------
import express from "express";
import cors from "cors";
import recipesRouter from "./routes/recipesRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
// -------------------------------------------

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use("/api/recipes", recipesRouter);
app.use("*", (req, res) => {
  res.send("Recipes API");
});
app.use(errorHandler);

// -------------- START SERVER ---------------
app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
// -------------------------------------------
