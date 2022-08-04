const { Comment } = require("../models");

const commentData = [
  {
    comment: "I agree!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment: "So true!",
    user_id: 4,
    post_id: 2,
  },
  {
    comment: "What is your favorite part?",
    user_id: 4,
    post_id: 1,
  },
  {
    comment: "ORM is the best!",
    user_id: 4,
    post_id: 2,
  },
];

const seedComments = () => User.bulkCreate(commentData);

module.exports = seedComments;
