const mongoose = require("mongoose");
const { options } = { toJSON: { virtuals: true } };

// workout model
const workoutSchema = new mongoose.Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          required: "Select a type of exercise",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter a name for the exercise",
        },
        duration: {
          type: Number,
          required: "Enter a duration in minutes",
        },
        distance: Number,
        weight: Number,
        reps: Number,
        sets: Number,
      },
    ],
  },
  options
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
    // accumulator  currentValue
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
