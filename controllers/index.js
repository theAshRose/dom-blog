const router = require('express').Router();
const apiRoutes = require('./api')

const landingRoutes = require('./landing-routes.js')
const loginRoutes = require('./login-logout-routes')
// const userLoginRoutes = require('./api/user-routes')


router.use('/api', apiRoutes)

router.use('/', landingRoutes);
router.use('/login', loginRoutes);

// router.use('/userlogin', userLoginRoutes);

module.exports = router;