const router = require('express').Router();
const apiRoutes = require('./api')

const homeRoutes = require('./home-routes.js')
const loginRoutes = require('./login-logout-routes')


router.use('./api', apiRoutes)

router.use('/', homeRoutes);
router.use('/login', loginRoutes)

module.exports = router;