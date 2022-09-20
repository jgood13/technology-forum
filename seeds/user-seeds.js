const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "Kumar091",
    password: "password",
  },
  {
    id: 2,
    username: "Joe132q",
    password: "password",
  },
  {
    id: 3,
    username: "Coolio",
    password: "password",
  },
  {
    id: 4,
    username: "qwerty2007",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userData, {individualHooks:true});

module.exports = seedUser;
