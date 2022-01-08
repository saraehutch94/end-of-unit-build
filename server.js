// Require dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const People = require("./models/person");
const peopleController = require("./controllers/people");

// Initialize application
const app = express();

// Config application settings

require("dotenv").config();

// writing PORT below sets PORT value as default
const { DATABASE_URL, PORT = 3001 } = process.env;

// Connect to database

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(`Error: ${error}`);
});

db.on("connected", () => {
  console.log("mongoDB connected");
});

db.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

// Models

// // uppercase variable = important variable (similar to class)
// const PeopleSchema = new mongoose.Schema(
//   {
//     name: String,
//     image: String,
//     title: String,
//   },
//   { timestamps: true }
// );

// const People = mongoose.model("People", PeopleSchema);

// Mount middleware
// CORS = "cross-origin resource changing"
// CORS allows servers to share resources with other origins
app.use(cors());

// logging middleware
app.use(morgan("dev"));

// body-parser (JSON.parse)
app.use(express.json());

// Mount router middleware
app.use("/people", peopleController);

// Mount routes
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// // async/await => when you're waiting for a promise object

// // index route
// app.get("/people", async (req, res) => {
//   try {
//     res.json(await People.find({}));
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// // create route
// app.post("/people", async (req, res) => {
//   try {
//     res.json(await People.create(req.body));
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// Tell app to listen on PORT
app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
