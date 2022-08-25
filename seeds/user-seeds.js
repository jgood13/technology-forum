const { User } = require("../models");

const userData = [
  {
    username: "Test",
    password: "password",
  },
  {
    username: "funGuy",
    password: "password",
  },
  {
    username: "Coolio",
    password: "password",
  },
  {
    username: "qwerty2007",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userData, {individualHooks:true});

module.exports = seedUser;
