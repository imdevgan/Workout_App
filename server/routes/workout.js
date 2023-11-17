const express = require("express");
const workout = express.Router();

//All the logic for CRUD operations are stored in another file and imported as functions
const { getAllWorkouts, createWorkout, getWorkout, updateWorkout, deleteWorkout } = require("../controllers/workout");

//For create and get all commands
workout.route("/").get(getAllWorkouts).post(createWorkout);

//For get one,update and delete commands
workout.route("/:id").get(getWorkout).patch(updateWorkout).delete(deleteWorkout);

module.exports = workout;
