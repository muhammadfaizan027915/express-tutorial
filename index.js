const express = require("express");
const app = express();

const users = [
  {
    userId: 1,
    name: "Muhammad Faizan",
  },

  {
    userId: 2,
    name: "Muhammad Ali",
  },

  {
    userId: 3,
    name: "Ali Abdullah",
  },
];

app.get("/", (req, res) => {
  return res.send({
    message: "Welcome to the application",
  });
});

app.post("/about", (req, res) => {
  return res.send({
    name: "Muhammad Faizan",
    email: "muhammadfaizan027915@gmail.com",
  });
});

app.get("/users", (req, res) => {
  return res.send(users);
});

app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const foundUser = users.find((user) => user.userId == userId);

  if (foundUser) res.send(foundUser);

  res.send({
    message: "Required user not found",
  });
});

const Port = 5000;
app.listen(Port, () => console.log("Server started...." + Port));
