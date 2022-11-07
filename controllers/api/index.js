const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-routes')
const commentRoutes = require('./comment-routes')

router.use('/user_routes', userRoutes);
router.use('/blog', blogRoutes);
// router.use('/comment-routes', commentRoutes);

module.exports = router;
