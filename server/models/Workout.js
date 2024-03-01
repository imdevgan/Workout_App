const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema for creating json files which will be stored in DB via post command
const workoutSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim:true
  },
  days: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim:true
  },
  username: {
    type: String,
    required: true,
    trim:true
  },
  img: {
    type:String,
    default:"",
    trim:true
  },
  monday: Array,
  tuesday: Array,
  wednesday: Array,
  thursday: Array,
  friday: Array,
  saturday: Array,
  sunday: Array,
});

//The first argument in the model function will determine the name of the collection in which the data will be stored   
module.exports = mongoose.model("Workout", workoutSchema);
