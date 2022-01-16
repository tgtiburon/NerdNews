const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET /api/users  gets all users
router.get('/', (req, res) => {
    // Access our User model and run findall
    User.findAll({
       // Don't send back the password
       attributes: { exclude: ['password']}
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err=> {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/users/1 gets a specific user
router.get('/:id', (req, res) => {
    User.findOne({
      // exclude pword 
        attributes: { exclude: ['password']},
        where: {
          id: req.params.id
        },
        include: [
          {
            model: Post,
            attributes: [
              'id', 
              'title',
              'post_content',
              'created_at'
            ]
          },
          {
            model: Comment,
            attributes: [
              'id', 
              'comment_text',
              'created_at'
            ],
            // Show which posts the users commented on
            include: {
              model: Post,
              attributes: ['title']
            }
          },
          {
            model: Post,
            attributes: ['title'],
          
          }
        ]
      })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// POST /api/users create a new user
router.post('/', (req, res) => {
  // Requires username and pword to create
  User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then(dbUserData => {
      // Save the session for withAuth
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Login uses post because it is in the req.body instead of the url
// POST api/users/login   Login function
router.post('/login', (req, res) => {
  // Query operation
  // expects username: 'email@gmail.com', password: 'password1243'}
  User.findOne({
      where: {
          username: req.body.username 
      }
  })
  .then(dbUserData => {
      if(!dbUserData) {
          res.status(400).json({ message: 'No user with that username!'});
          return;
      }
    
      // Verify user
      const validPassword = dbUserData.checkPassword(req.body.password);
      if(!validPassword) {
          res.status(400).json({ message: 'Incorrect Password!' });
          return;
      }
      req.session.save(() => {
          // declare session variables
          // save them
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;

          res.json({ user: dbUserData, message: 'You are now logged in!'});

      });
  });
});
// POST api/users/logout    Logout function
router.post('/logout', (req, res)=> {
  // if they are logged in destroy the session
  if (req.session.loggedIn) {
     req.session.destroy(() => {
       //destroy the session
       // user will have to log back in
         res.status(204).end();
     });
     
  } else {
      res.status(404).end();
  }
 
});

// PUT /api/users/1  updates user info
router.put('/:id', withAuth,  (req, res) => {
  
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1  deletes a specific user
router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;