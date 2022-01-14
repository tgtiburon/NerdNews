const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


//res.render('new-post', { loggedIn: true });
router.get('/newpost', (req,res) => {
    res.render('new-post');
});





module.exports = router;