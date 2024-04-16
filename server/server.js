import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); // this allows our client to communicate with the server wiithout being blocked
const PORT = "8080";
// connect to a database.db file (normally this would be "connect to the databse that is hosted elsewhere")
import Database from "better-sqlite3";
const db = new Database("database.db"); // go and get the existing db file

app.get("/", function (request, response) {
  response.json("You are looking at my root route.");
});

app.get("/review", function (request, response) {
  // here we use .all instead of .run because we aren't INSERTing, but selecting. So we want ALL the results back
  const review = db.prepare("SELECT * FROM review").all();
  response.json(review);
});

app.post("/review", function (request, response) {
  const newReview = request.body;
  // this console log will appear in the terminal because that is where the server is running
  console.log(newReview);

  // here is the response. At the moment we are just sending back what the client sent with their own request
  // soon we will do stuff with that information, like adding it to a database
  response.json(newReview);
});

app.listen(8080, function () {
  console.log("App is running on port 8080");
});
