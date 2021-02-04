const router = require("express").Router();
const { Workout } = require("../models");

// get route for last workout
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      // internal server error
      res.status(500).json(err);
    });
});

// GET all route to display recent workouts, sorted by date
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ day: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET route, combined duration from the past seven workouts on the stats page
// router.get("/api/workouts/range", (req, res) => {
//   Workout.find({})
//     .sort({ day: -1 })
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// PUT route, add exercises
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: { exercises: req.body },
    },
    {
      new: true,
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// POST route, create a new workout
router.post("/api/workouts", (req, res) => {
  const { body } = req;
  Workout.create(body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// GET route, total duration from the past seven workouts on the stats page

module.exports = router;
