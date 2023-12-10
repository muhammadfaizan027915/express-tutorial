const bcrypt = require("bcrypt");
const UserModel = require("../models/userModel");
const AddressModel = require("../models/addressModel");

const getUsers = async (req, res) => {
  const users = await UserModel.find({}, "-password -__v");
  if (!users?.length) return res.status(404).send({ statusCode: 404, message: "No user found!" });

  return res.status(200).send({ users, message: "Users successfully found!" });
};

const getUserById = (req, res) => {
  const { userId } = req.params;
  const foundUser = users.find((user) => user.userId == userId);

  if (foundUser) return res.send(foundUser);

  return res.status(404).send({
    message: "Required user not found",
  });
};

const aboutUs = (req, res) => {
  return res.send({
    name: "Muhammad Faizan",
    email: "muhammadfaizan027915@gmail.com",
  });
};

const greetUser = (req, res) => {
  return res.send({
    message: "Welcome to the application",
  });
};

const createUser = async (req, res) => {
  try {
    let { name, email, phone, addresses, password } = req.body;
  
    if (!name || !email || !password)
      return res.status(400).send({ statusCode: 400, messsage: "Must provide the required fields!" });

    if (await UserModel.exists({ email })) {
      // const alreadyExistsUser = await UserModel.findOne({ email });
      // if (alreadyExistsUser)
      return res.status(400).send({ statusCode: 400, message: "Email already exists!" });
    }

    if (addresses?.length) {
      const dbAddresses = await AddressModel.insertMany(addresses);
      addresses = dbAddresses?.map((address) => address?._id);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ name, email, phone, addresses, password: hashedPassword,});

    const dbUser = await user.save();
    delete dbUser._doc.password;

    return res.status(201).send({ user: dbUser, message: "Succesfully created an account!" });
  } catch (error) {
    res.status(500).send({ statusCode: 500, message: "Something went wrong!" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  greetUser,
  aboutUs,
  createUser,
};
