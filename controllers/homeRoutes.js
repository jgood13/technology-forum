const router = require('express').Router()
const{
  Comment,
  User,
  Post
} = require('../models')
const withAuth = require('../utils/auth')


router.get('/', async (req,res) => {
  try {
    const postData = await Post.findAll({include: [User]})
    const post = postData.map((post) => post.get({plain:true}))
    res.render('homepage', ...post,{
      logged_in: req.session.logged_in
    })
  } catch (err) {
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