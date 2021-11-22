// ----------------- MODULES -----------------
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
// -------------------------------------------

export const getAllRecipes = (req, res) => {
  // CONNECTING TO DATABASE
  const conString = process.env.CONNECTION_STRING; //Can be found in the Details page
  const client = new pg.Client(conString);
  client.connect(function (err) {
    if (err) {
      return console.error("could not connect to postgres", err);
    }
    client.query(`SELECT * FROM recipes;`, function (err, result) {
      if (err) {
        console.log("Something went terribly wrong!!!");
        client.end();
      } else {
        res.json(result.rows);
        client.end();
      }
    });
  });
};
