const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

/* Creating a Database Schema....schema should be the same format as req.body */
const supervisorregisterSchema = new mongoose.Schema({
  supervisorfirstname: {
    type: String,
    required: "Please Enter first name"
  },
  supervisorlastname: {
    type: String,
    required: "Please Enter last name"
  },

  supervisorusername: {
    type: String,
    unique: true,
    required: "Please Enter User name"
  },
  supervisorpassword: {
    type: String,
    required: "Please Enter password"
  },
  supervisoremailaddress: String,
  admingender: String
});


supervisorregisterSchema.pre("save", function(next) {
  this.supervisorpassword = bcryptjs.hashSync(this.supervisorpassword, 10);
  next();
});

supervisorregisterSchema.statics.authenticate = async function(
  supervisorusername,
  supervisorpassword
) {
  const user = await this.findOne({ supervisorusername: supervisorusername });
  if (!user) {
    throw new Error("User not found.");
  }
  const match = await bcryptjs.compare(
    supervisorpassword,
    user.supervisorpassword
  );
  if (match) {
    return user;
  }
};

//create a model
module.exports = mongoose.model("Supervisor", supervisorregisterSchema);

