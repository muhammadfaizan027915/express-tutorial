const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    max: 30,
  },
  phone: Number,
  address: [{ type: String }],
  status: {
    type: Boolean,
    default: false,
  },
  joinDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("User", userSchema);