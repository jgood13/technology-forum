const seedPosts = require("./post-seeds");
const seedUser = require("./user-seeds");
const seedComments = require("./comment-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedPosts();
  await seedComments();

  process.exit(0);
};

seedAll();
