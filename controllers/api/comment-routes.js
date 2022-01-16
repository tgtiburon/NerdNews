const router = require('express').Router();
const { Comment }    = require('../../models');
// withAuth for posts/deletes/puts
const withAuth = require('../../utils/auth');

// GET api/comments/    Gets all comments
router.get('/', (req,res) => {
    console.log('------------------------------');
    Comment.findAll({
        
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// GET api/comment/1    Gets a specific comment 
router.get('/:id', (req,res) => {
    console.log('------------------------------');
    Comment.findOne({

        where: {
            id: req.params.id
          }
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
});
// POST api/comment/   withAuth only logged in can post
router.post('/', withAuth, (req,res)=> {

    // Create
    // check to see if logged in before posting
    if (req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            // get the id from the session
            user_id: req.session.user_id
        })
        .then(dbCommentData => {
            res.json(dbCommentData);
        })
        .catch( err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});


//
router.put('/:id', withAuth, (req,res)=> {

    // Update
    // check to see if logged in before posting
    if (req.session) {
        Comment.update({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            // get the id from the session
            user_id: req.session.user_id
        })
        .then(dbCommentData => {
            res.json(dbCommentData);
        })
        .catch( err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

// DELETE api/comments/1   Deletes withAuth
router.delete('/:id',withAuth,  (req, res) => {
    Comment.destroy({
        where: {
            //Which to delete
            id:req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});


module.exports = router;