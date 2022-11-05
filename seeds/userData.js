const { User } = require('../models');

const userData = [
    {
        username: "Jack Styles",
        email: "jack@jackstyles.com",
        password: "123AbcJack"
    },
    {
        username: "Jeffy Stuart",
        email: "jeffy@jeffystuart.com",
        password: "123AbcJack"
    },
    {
        username: "Jerome Smith",
        email: "jerome@jeromesmith.com",
        password: "123AbcJerome"
    },
    {
        username: "Jerry Smith",
        email: "jerry@jerrysmith.com",
        password: "123AbcJerry"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;