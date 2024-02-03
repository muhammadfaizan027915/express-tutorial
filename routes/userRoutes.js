const express = require("express");
const router = express.Router();
const { greetUser, createUser } = require("../controllers/userController");

router.get("/", greetUser);

router.post("/create", createUser)

module.exports = router;
