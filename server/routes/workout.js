const express = require("express");
const workout = express.Router();

const { getAllWorkouts, createWorkout, getWorkout, updateWorkout, deleteWorkout } = require("../controllers/workout");

workout.route("/").get(getAllWorkouts).post(createWorkout);
workout.route("/:id").get(getWorkout).patch(updateWorkout).delete(deleteWorkout);

module.exports = workout;
