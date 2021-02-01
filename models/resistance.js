const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a name for the exercise",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the exercise",
  },
  duration: {
    type: Number,
    require: "Enter a duration in minutes",
  },
  weight: {
    type: Number,
    required: "Enter a weight in pounds",
  },
  reps: {
    type: Number,
    required: "Enter a number of reps",
  },
  sets: {
    type: Number,
    required: "Enter a number of sets",
  },
});

const Resistance = mongoose.model("Resistance", resistanceSchema);
module.exports = Resistance;
