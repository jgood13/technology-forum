const { Comment } = require("../models");

const commentData = [
  {
    comment_info: "I agree!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_info: "So true!",
    user_id: 4,
    post_id: 2,
  },
  {
    comment_info: "What is your favorite part?",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_info: "ORM is the best!",
    user_id: 4,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
