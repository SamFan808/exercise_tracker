const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioSchema = new Schema({
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
  distance: {
    type: Number,
    required: "Enter a distance in miles",
  },
});

const Cardio = mongoose.model("Cardio", cardioSchema);
module.exports = Cardio;
