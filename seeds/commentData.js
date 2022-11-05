
const {Comment} = require('../models')

const commentData = [
    {
        content: "wow, such a good post.",
        user_id: 1,
        blog_id: 1
    },
    {
        content: "wow, such a fantastic post.",
        user_id: 2,
        blog_id: 2
    },
    {
        content: "wow, such a RIVETING post.",
        user_id: 3,
        blog_id: 3
    },
    {
        content: "wow, such a smart smart.",
        user_id: 4,
        blog_id: 4
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
