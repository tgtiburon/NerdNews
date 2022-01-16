const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


// GET /dashboard/newpost  
router.get('/newpost', (req,res) => {
    res.render('new-post');
});



module.exports = router;