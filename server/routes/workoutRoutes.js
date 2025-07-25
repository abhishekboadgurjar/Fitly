const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkoutById,
  deleteWorkout,
} = require("../controllers/workoutController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, createWorkout);
router.get("/", auth, getWorkouts);
router.get("/:id", auth, getWorkoutById);
router.delete("/:id", auth, deleteWorkout);

module.exports = router;
