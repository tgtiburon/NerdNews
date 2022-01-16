
// Checks to see if the user is logged in
const withAuth = (req, res, next) => {
    if(!req.session.user_id) {
        // not logged in so direct to login
        res.redirect('/login');
    } else {
        // if logged in move to next function
        next();
    }
}



module.exports = withAuth;