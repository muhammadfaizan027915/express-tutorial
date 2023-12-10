const { Schema, model } = require("mongoose");

const addressSchema = new Schema({
  address: {
    required: true,
    type: String,
  },

  city: {
    required: true,
    type: String,
  },

  state: {
    required: true,
    type: String,
  },

  postalCode: {
    type: Number,
  },
});

module.exports = model("Address", addressSchema);
