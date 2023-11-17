const Workout = require("../models/Workout");
const asyncWrapper = require("../middleware/async");

//Get all the workouts in the DB
const getAllWorkouts = asyncWrapper(async (req, res) => {
  const workout = await Workout.find({});
  res.status(200).json({ workout });
});

//Create a workout and upload to DB
const createWorkout = asyncWrapper(async (req, res) => {
  const workout = await Workout.create(req.body);
  res.status(201).json({ workout });
});

//Get a single workout from the DB by the ID
const getWorkout = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findOne({ _id: id });
  if (!workout) { 
    return res.status(404).json({ msg: `No workout with id:${id}` });
  }
  res.status(200).json({ workout });
});

//Make changes to a single workout in the DB by the ID
const updateWorkout = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!workout) {
    return res.status(404).json({ msg: `No workout with id:${id}` });
  }
  res.status(200).json({ workout });
});

//Delete a workout from the DB by the ID
const deleteWorkout = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ msg: `No workout with id:${id}` });
  }
  res.status(200).json({ workout });
});

module.exports = { getAllWorkouts, createWorkout, getWorkout, updateWorkout, deleteWorkout };
