const UserModel = require("../models/userModel");

const greetUser = (req, res) => {
  return res.status(200).json({
    data: null,
    success: true,
    message: "Welcome to the application!",
  });
};

const createUser = async (req, res) => {
  const { name, email, age, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      data: null,
      success: false,
      message: "Please must provide the required data!",
    });
  }

  const user = new UserModel({ name, email, password, age });
  const savedUser = await user?.save();

  return res.status(201).json({
    success: true,
    data: { user: savedUser },
    message: "User created successfully!",
  });
};

module.exports = {
  greetUser,
  createUser,
};
