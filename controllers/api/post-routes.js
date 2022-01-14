const router = require('express').Router();
// Include user so we can get user info from the user_id foreign key
// then we can use a join to put them together
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all posts in the system
router.get('/', (req, res) => {
    console.log('------------------------------');
    Post.findAll({
        //Query config
        attributes: [
          'id', 
          'post_content', 
          'title', 
          'created_at'
        ],
        // We could use 
        order: [['created_at', 'DESC']],
        // include is a join


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
              // Attach the username to the comment
              include: {
                model:User,
                attributes: ['username']
              }

            },
            {   // User who posted
                model: User, 
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'post_content', 'title', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ], 
      include: [
        {
        model: Comment,
        attributes: ['id', 'comment_text']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// CREATE POST
  router.post('/', withAuth, (req, res) => {
    // expects {title: 'Taskmaster goes public!', post_content: 'https://taskmaster.com/press', user_id: 1}
    Post.create({
      title: req.body.title,
      post_content: req.body.post_content,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });


      
  });

  // UPDATE

  router.put('/:id',withAuth,  (req, res) => {
    Post.update(
      {
        title: req.body.title,
        post_content: req.body.post_content
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  // DELETE

  router.delete('/:id', withAuth, (req, res) => {
   // alert("Inside router.delete");
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



module.exports = router;