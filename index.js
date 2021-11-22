// ----------------- MODULES -----------------
import express from "express";

// -------------------------------------------

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${5000}`)
);