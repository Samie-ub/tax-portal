const express = require("express");
const router = express.Router();
// importing workoutController
const {
  createWorkout
} = require("../controllers/userFormControllers")   
//POST a new workout
router.post("/", createWorkout) 


module.exports = router;
