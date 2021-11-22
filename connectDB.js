// ----------------- MODULES -----------------
import {pg} from ("pg");
// -------------------------------------------

// CONNECTING TO DATABASE
const conString =
  "postgres://mdxjdyrg:nacClTy7lrYQLru-gvFPrdy5eEcLpVTF@tai.db.elephantsql.com/mdxjdyrg"; //Can be found in the Details page
const client = new pg.Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  client.query(`SELECT * FROM bunnies;`, function (err, result) {
    if (err) {
      console.log("Something went terribly wrong!!!");
      client.end();
    } else {
      console.log(result.rows);
      client.end();
    }
  });
});
