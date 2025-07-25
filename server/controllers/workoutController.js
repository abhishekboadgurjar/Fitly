const Workout = require("../models/Workout");

const createWorkout = async (req, res) => {
  const { type, duration, calories } = req.body;
  try {
    const workout = await Workout.create({ type, duration, calories, user: req.user });
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ message: "Failed to create workout" });
  }
};

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user }).sort({ date: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch workouts" });
  }
};

const getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findOne({ _id: req.params.id, user: req.user });
    if (!workout) return res.status(404).json({ message: "Workout not found" });
    res.json(workout);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch workout" });
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const deleted = await Workout.findOneAndDelete({ _id: req.params.id, user: req.user });
    if (!deleted) return res.status(404).json({ message: "Workout not found" });
    res.json({ message: "Workout deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete workout" });
  }
};

module.exports = { createWorkout, getWorkouts, getWorkoutById, deleteWorkout };
