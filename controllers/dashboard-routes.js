const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET /dashboard/ gets all posts while logged in
router.get('/',withAuth, (req,res) => {

    Post.findAll({
        where: {
          // use the ID from the session
          user_id: req.session.user_id
        },
        attributes: [
          'id',
          'post_content',
          'title',
          'created_at'//,
     
        ],
        include: [
          {
            model: Comment,
            attributes: [
              'id',
               'comment_text',
                'post_id',
                 'user_id', 
                 'created_at'
                ],
            include: {
              model: User,
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          }
        ]
      })
        .then(dbPostData => {
           
          // serialize data before passing to template
          const posts = dbPostData.map(post => post.get({ plain: true }));
     
          // Render dashboard with posts
          res.render('dashboard', { posts, loggedIn: true });
        
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// Get /dashboard/newpost/  logged in to make a new post
router.get('/newpost', withAuth, (req,res) => {
  res.render('new-post', {loggedIn: true });
});

// POST /dashboard/edit/1   logged in to edit posts 
router.get('/edit/:id',withAuth, (req,res) => {
  Post.findOne({
      where: {
          id:req.params.id
      },

      attributes: [
          'id', 
          'post_content', 
          'title', 
          'created_at',
      ],
      include: [
            // include comment model here:
            {
              // comment model has the user model itself so it can attach the username to the comment
              model: Comment, 
              attributes: [
                'id', 
                'comment_text', 
                'post_id', 
                'user_id', 
                'created_at'
              ],
              include: {

                  model: User, 
                  attributes: ['username']
              }
          },
          {
              model: User,
              attributes: ['username']
          }
      ]
  })
  .then(dbPostData => {
      if(!dbPostData) {
          res.status(404).json({ message: 'No post found wit this id'});
          return;
      }
     // res.json(dbPostData);
     const post = dbPostData.get({ plain: true});

     res.render('edit-post', {
         post, 
         loggedIn: true
     });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});


module.exports = router;