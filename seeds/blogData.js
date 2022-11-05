const { Blog } = require('../models')

const blogData = [
    {
        title: "Why Manuel should wear cowboy hats more",
        content: "He commands more authority and presence when wearing a cowboy hat. No one can question the hat. It exudes alpha energy.",
        user_id: 1
    },
    {
        title: "Vasu's questions",
        content: "Why does Jerome hate me? What is my file structure again? Its '.env' right?",
        user_id: 2
    },
    {
        title: "Why haven't i been offered a TA position?",
        content: "I swear im a smartypants, my mommy said so. I must achieve heights unseen",
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

