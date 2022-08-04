const { User } = require("../models");

const userData = [
  {
    username: "Test",
    email: "test@test.com",
    password: "password",
  },
  {
    username: "fun_guy",
    email: "funguy@test.com",
    password: "password",
  },
  {
    username: "Coolio",
    email: "coolio@test.com",
    password: "password",
  },
  {
    username: "qwerty2007",
    email: "qwerty@test.com",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
