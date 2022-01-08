// Require dependencies
const mongoose = require("mongoose");

// Shorter Schema variable
const Schema = mongoose.Schema;

// Create Schema

const peopleSchema = new Schema(
  {
    name: String,
    image: String,
    title: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("People", peopleSchema);
