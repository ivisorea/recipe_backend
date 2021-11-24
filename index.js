// ----------------- MODULES -----------------
import express from "express";
import cors from 'cors';
import recipesRouter from "./routes/recipesRouter.js";

// -------------------------------------------

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/recipes", recipesRouter);

// -------------- START SERVER ---------------
app.listen(port, () =>
  console.log(`Server is running at http://localhost:${5000}`)
);
// -------------------------------------------
