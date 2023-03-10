const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  emailaddress: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
