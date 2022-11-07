module.exports = {
    make_date: (date) => {return date.toLocaleDateString();},
    
    withAuth: (req, res, next) => {
        if (!req.session.LoggedIn) {
          res.redirect('/login');
        } else {
          next();
        }
      }
};

