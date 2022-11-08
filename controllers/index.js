const router = require('express').Router();
const apiRoutes = require('./api')


const signUpRoutes = require('./signup-routes')
const landingRoutes = require('./landing-routes.js')
const loginRoutes = require('./login-logout-routes')
// const homeRoutes = require('./home-routes')
// const dashyRoutes = require('./dashboard-routes.js')



router.use('/api', apiRoutes);
// router.use('/home', homeRoutes);
// router.use('/dashboard', dashyRoutes);
router.use('/', landingRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signUpRoutes);



module.exports = router;