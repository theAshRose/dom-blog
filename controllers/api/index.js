const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-routes')
// const commentRoutes = require('./comment-routes')
// const dash = require('../dashboard-routes')

router.use('/user_routes', userRoutes);
router.use('/blog', blogRoutes);
// router.use('/dashboard', dash)
// router.use('/comment-routes', commentRoutes);

module.exports = router;
