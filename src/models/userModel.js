const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    max: 30,
  },
  phone: Number,
  addresses: [{ type: Schema.Types.ObjectId, ref: "Address" }],
  password: {
    type: String,
    required: true,
  },
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
