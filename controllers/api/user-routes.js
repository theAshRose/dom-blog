const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/withAuth');


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
      req.session.id = userData.id

      res.status(200).json({ userData });
    });
  } catch (err) {
    console.log("catch activated")
    res.status(500).json(err)
  }
});

router.post('/signup', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.LoggedIn = true;
      req.session.id = dbUserData.id
      res.status(200).json(dbUserData);
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.LoggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
      console.log("we are in.")
    })
  } else {
    res.status(404).end();
  }
});

module.exports = router;