const router = require('express').Router();


// GET /dashboard/newpost  
router.get('/newpost', (req,res) => {
    res.render('new-post');
});



module.exports = router;