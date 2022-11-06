const router = require('express').Router();
const { Blog, User, Comment } = require('../models');

// router.get('/', async (req, res) => {
//     try {
//             res.render('all')
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err)
//     }
// });

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll(
            {
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                    }
                ]
            })

        const blogs = blogData.map((post) => post.get({ plain: true }));
        res.render('home',
            { blogs
            // isLogged: req.session.isLogged 
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

// router.get('/', async (req, res) => {
//     try {
//         const blogData = await Blog.findAll({
//             title: req.body.content,
//             content: req.body.content,
//             user_id: req.body.user_id
//         })

//         const blogs = blogData.map((blog) =>
//         blog.get({plain: true}) 
//         );
//         res.render('home', {blogs});
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err)
//     }
// });



module.exports = router;