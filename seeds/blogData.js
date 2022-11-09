const { Blog } = require('../models')

const blogData = [
    {
        title: "Why Manuel should wear cowboy hats more",
        content: "He commands more authority and presence when wearing a cowboy hat. No one can question the hat. It exudes alpha energy.",
        user_id: 1
    },
    {
        title: "Why cats exist",
        content: "They sleep anywhere, any table any chair.",
        user_id: 2
    },
    {
        title: "Why I like tech blogs",
        content: "You get to blog about your tech",
        user_id: 3
    },
    {
        title: 'How many woods can i woods chuck the chuck?',
        content: "It depends on the chuck.",
        user_id: 4
    },
]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;

