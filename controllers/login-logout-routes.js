const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        // res.redirect('login')
        res.render('login',
            // { layout: 'default', template: 'body'}
            );
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

module.exports = router;