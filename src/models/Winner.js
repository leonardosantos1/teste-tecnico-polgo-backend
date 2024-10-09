const mongoose = require("mongoose") 

const WinnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  prize: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});


const Winner = mongoose.model("Winner", WinnerSchema);

module.exports =  Winner 