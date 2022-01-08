// Require dependencies

const express = require("express");

// Set up router object

const peopleRouter = express.Router();

// Import People model
const People = require("../models/person");

// index route
peopleRouter.get("/", (req, res) => {
  People.find({}, (err, allPeople) => {
    res.json(allPeople);
  });
});

// delete route
peopleRouter.delete("/:id", (req, res) => {
  People.findByIdAndDelete(req.params.id, (error, deletedPerson) => {
    res.json(deletedPerson);
  });
});

// update route
peopleRouter.put("/:id", (req, res) => {
  People.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedPerson) => {
      res.json(updatedPerson);
    }
  );
});

// create route
peopleRouter.post("/", (req, res) => {
  People.create(req.body, (err, newPerson) => {
    res.json(newPerson);
  });
});

module.exports = peopleRouter;
