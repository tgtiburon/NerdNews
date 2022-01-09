const router = require('express').Router();
//const res = require('express/lib/response');
const { Comment }    = require('../../models');


router.get('/', (req,res) => {
    console.log('------------------------------');
    Comment.findAll({
        //Query config
      //  attributes: ['id', 'comment_text'],
        // We could use 
        // order: [['created_at', 'DESC']],
        // include is a join
        // include: [
        //     {
        //         model: User, 
        //         attributes: ['username']
        //     }
        // ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    

});

router.post('/', (req,res)=> {

    // Create

    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
    })
    .then(dbCommentData => {
        res.json(dbCommentData);
    })
    .catch( err => {
        console.log(err);
        res.status(400).json(err);
    });

});

router.delete('/', (req, res) => {

});


module.exports = router;