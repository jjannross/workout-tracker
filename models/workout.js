const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
   day: {
     type: Date, 
     default: new Date().setDate(new Date().getDate())
   },
   exercises: {
     type: Array
   }
},
{
  toObject: {
  virtuals: true
  },
  toJSON: {
  virtuals: true 
  }
});
workoutSchema
.virtual('totalDuration')
.get(function () {
    var total = 0
   for (let i = 0; i < this.exercises.length; i++) {
        total = total + this.exercises[i].duration
     
   }

  return  total
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;