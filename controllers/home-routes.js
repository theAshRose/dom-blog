const router = require('express').Router();
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
                        attributes: ['content']
                    }

                ],
            })
        const commentData = await Comment.findAll(
            {
                include: [
                    {
                        model: User,
                        attributes: ['username']
                    }
                ],

            })
        console.log(commentData)
        
        const comments = commentData.map((posts) => posts.get({ plain: true }));
        const blogs = blogData.map((post) => post.get({ plain: true }));
    //    const comments = blogs.Comment.map((post) => post.get({ plain: true }));
        // let comments;
        // let commentsArr = [];
        // let string;
        // for (x=0; x<blogs.length; x++){
        //    comments = blogs[x].comments;
        //    commentsArr.push(comments)
        //    string = JSON.parse(JSON.stringify(commentsArr))
        // }
        
        console.log(comments)
        console.log(blogs)
        res.render('home',
            {
                blogs,
                comments,
                LoggedIn: req.session.LoggedIn
            });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

// router.get('/home', async (req, res) => {
//     try {
//         const commentData = await Comment.findAll(
//             {
//                 include: [
//                     {
//                         model: User,
//                         attributes: ['username'],
//                     }
//                 ],
//             })

//         const comments = blogData.map((post) => post.get({ plain: true }));
//         res.render('home',
//             { blogs
//             // isLogged: req.session.isLogged 
//         });
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err)
//     }
// });


module.exports = router;