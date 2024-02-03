const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    age: {
      type: Number,
      min: 18,
      max: 60,
    },

    password: {
      type: String,
      required: true,
      minLength: 6,
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
