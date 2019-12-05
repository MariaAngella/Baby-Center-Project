const mongoose = require("mongoose");


/* Creating a Database Schema....schema should be the same format as req.body */
const parentdbregisterSchema = new mongoose.Schema({

  parentphone: String,
  parentphone2: String,
  babyname: String,
  childinformation: String,
  club: String,
  sitter: String,
  babies: String,
  myPhoto: String
});


module.exports = mongoose.model("Parentdb", parentdbregisterSchema);
