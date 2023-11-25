const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userControllers");

router.get("/", UserController.greetUser);

router.post("/about", UserController.aboutUs);

router.get("/users", UserController.getUsers);

router.get("/users/:userId", UserController.getUserById);

module.exports = router;
