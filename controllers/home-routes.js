const sequelize = require('../config/connection');
const { User,Post, Comment } = require('../models');


const router = require('express').Router();


//  GET /    gets all posts  no login needed
router.get('/', (req, res)=> {
    console.log(req.session);
    Post.findAll({
         attributes: [
            'id',
            'post_content',
            'title',
            'created_at'
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
                    // user that left the comment
                    model: User,
                    attributes: ['username']
                }
            },
            {
                // user who made the post
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        // we need to serialize the entire dbPostData array
        const posts = dbPostData.map(post => post.get({ plain: true }));
        // pass a single post object into the homepage template
        res.render('homepage', {
          posts,
          loggedIn: req.session.loggedIn
     });   
   
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
   
});

// GET /login    Checks to see if logged in
// if not send to login page.
router.get('/login', (req, res)=> {
    // if they are logged in redirect to a homepage if one exists.
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // no variables need to be passed so only the page name
    res.render('login');
});

// GET /signup Check to see if logged in, if not send to signup page
router.get('/signup', (req, res)=> {
    // if they are logged in redirect to a homepage if one exists.
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // no variables need to be passed so only the page name
    res.render('signup');
});

// GET /post/1   Gets a specific post, no login needed
router.get('/post/:id', (req,res) => {
  
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_content', 
            'title',
            'created_at',
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id',
                    'created_at'],
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
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        // serialize data
        const post = dbPostData.get({ plain: true });

        // pass data to template
        // also pass if the user is logged in
        res.render('single-post', { 
            post,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })  
});


module.exports = router;