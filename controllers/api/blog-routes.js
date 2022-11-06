const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            title: req.body.content,
            content: req.body.content,
            user_id: req.body.user_id
        })
        return blogData;
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});


module.exports = router;