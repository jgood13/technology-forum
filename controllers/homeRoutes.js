const router = require('express').Router()
const{
  Comment,
  User,
  Post
} = require('../models')
const withAuth = require('../utils/auth')


router.get('/', async (req,res) => {
  try {
    const postData = await Post.findAll({include: {model: User}})
    console.log(postData)
    if (!postData) {
      res.status(404).json({ message: "no posts." });
    }
    const posts = postData.map((aPost) => aPost.get({plain:true}))
    // const posts = postData.get({plain:true})
    res.render('homepage', posts,{
      logged_in: req.session.logged_in
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)}
})

router.get('/login', (req,res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard')
    return;
  }
  res.render('login')
})

router.get('/signup', (req,res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard')
    return;
  }
  res.render('signup')
})

module.exports = router