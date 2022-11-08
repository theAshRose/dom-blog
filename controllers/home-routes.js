const router = require('express').Router();
const withAuth = require('../utils/withAuth')
const { Blog, User, Comment } = require('../models');

router.get('/home', async (req, res) => {
    try {
        const blogData = await Blog.findAll(
            {
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                    },
                    {
                        model: Comment,
                        attributes: ['content', 'created_at'],
                        include: [
                            {
                                model: User,
                                attributes: ['username'],
                            },]
                    }
                ],
            })
        const blogs = blogData.map((post) => post.get({ plain: true }));
        console.log(blogData)
        res.render('home',
            {
                blogs,
                LoggedIn: req.session.LoggedIn
            });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});


module.exports = router;