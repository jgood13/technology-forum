const router = require("express").Router();
const userRoutes = require("./userRoutes");
const dashRoutes = require("./dashRoutes");
const commentRoutes = require("./comments");

router.use("/users", userRoutes);
router.use("/dashboard", dashRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
