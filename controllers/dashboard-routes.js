const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


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
         // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
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
     
          // TODO: change
          res.render('dashboard', { posts, loggedIn: true });
          //res.render('dashboard', {layout:'dashboard-test'}, { posts, loggedIn: true });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
   


});


router.get('/newpost', withAuth, (req,res) => {
  res.render('new-post', {loggedIn: true });
});


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