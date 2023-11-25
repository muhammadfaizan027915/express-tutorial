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

const getUsers = (req, res) => {
  return res.send(users);
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

module.exports = {
  getUsers,
  getUserById,
  greetUser,
  aboutUs,
};
