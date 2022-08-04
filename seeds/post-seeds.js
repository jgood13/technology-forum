const { User } = require("../models");

const postData = [
  {
    title: "MVC is so much fun",
    description: "It's amazing how much fun it is creating views files!",
    user_id: 1,
  },
  {
    title: "ORM is such a useful tool!",
    description:
      "ORM makes understanding and dealing with databases so much easier!",
    user_id: 2,
  },
];

const seedPosts = () => User.bulkCreate(postData);

module.exports = seedPosts;
