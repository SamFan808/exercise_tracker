const router = require("express").Router();
const Cardio = require("../models/cardio.js");
const Resistance = require("../models/resistance.js");

// GET all route to display recent workouts
// PUT route, add exercises to most recent workout plan
// POST route, add new exercises to a new workout plan
// GET route, combined weight from the past seven workouts on the stats page
// GET route, total duration from the past seven workouts on the stats page

module.exports = router;
