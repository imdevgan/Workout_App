const Workout = require("../models/Workout");
const asyncWrapper = require("../middleware/async");

const getAllWorkouts = asyncWrapper(async (req, res) => {
  const workout = await Workout.find({});
  res.status(200).json({ workout });
});

const createWorkout = asyncWrapper(async (req, res) => {
  const workout = await Workout.create(req.body);
  res.status(201).json({ workout });
});

const getWorkout = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findOne({ _id: id });
  if (!workout) { 
    return res.status(404).json({ msg: `No workout with id:${id}` });
  }
  res.status(200).json({ workout });
});

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

const deleteWorkout = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ msg: `No workout with id:${id}` });
  }
  res.status(200).json({ workout });
});

module.exports = { getAllWorkouts, createWorkout, getWorkout, updateWorkout, deleteWorkout };
