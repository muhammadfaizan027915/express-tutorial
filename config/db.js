const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://muhammadfaizan:faizan027915@mern.jsr5rzh.mongodb.net/?retryWrites=true&w=majority",
      { dbName: "authenticationApp" }
    );
    console.log("Successfully connected to the database... ");
  } catch (err) {
    console.log("Failed to connect with the database: ", err?.message);
  }
};

module.exports = { connect };
