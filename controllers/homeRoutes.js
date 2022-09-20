const router = require("express").Router();
const { Comment, User, Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: { model: User, attributes: ["username"] },
    });
    console.log(postData);
    const posts = postData.map((aPost) => aPost.get({ plain: true }));
    // const posts = postData.get({plain:true})
    res.render("homepage", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const myPostData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["id", "title", "description", "createdAt"],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_info",
            "post_id",
            "user_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    console.log(myPostData);
    const myPosts = myPostData.map((aPost) => aPost.get({ plain: true }));
    res.render("dashboard", { myPosts, logged_in: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ["id", "comment_info", "post_id", "user_id", "createdAt"],
          include: { model: User, attributes: ["username"] },
        },
        { model: User, attributes: ["username"] },
      ],
    });

    // const newPost = postData.map((aPost) => aPost.get({ plain: true }));
    const newPost = postData.get({ plain: true });
    console.log(newPost);

    res.render("single-post", {
      ...newPost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});

module.exports = router;
