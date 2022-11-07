const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    console.log("elfmeat best meat")
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            }
        });
        console.log(userData + "userData")
        if (!userData) {
            res.status(400).json({ message: "wrong credentials, FOOL" });
            return;
        }
        console.log("elfmeat best meat2")
        const validPassword = await userData.checkPassword(req.body.password); 
        
        if (!validPassword) {
            res.status(400).json(err);
            return;
        }

            console.log("finish me if you DARE")

            req.session.save(() => {
            req.session.LoggedIn = true;

            res.status(200).json({userData});
        });
    } catch (err) {
        console.log("catch activated")
        res.status(500).json(err)
    }
});

module.exports = router;