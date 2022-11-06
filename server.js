const path = require('path');
const express = require('express');
const session = require('express-session')
const exhbs = require('express-handlebars');
const cookieObj = require('connect-session-sequelize')(session.Store)
const sequelize = require('./config/connection')
const routes = require('./controllers')
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);





// const sess = {
//     secret: 'Super secret secret',
//     // Express session will use cookies by default, but we can specify options for those cookies by adding a cookies property to our session options.
//     // Tells our session to use cookies
//     // cookie: {},
//     cookie: {
//       // maxAge sets the maximum age for the session to be active. Listed in milliseconds.
//       maxAge: 3600,
//       //  httpOnly tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
//       httpOnly: false, //set for HTTP and HTTPS
//       // secure tells express-session to only initialize session cookies when the protocol being used is HTTPS. Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.
//       secure: false,
//       // sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
//       sameSite: 'strict',
//     },
//     resave: false,
//     saveUninitialized: true,
//     // Sets up session store
//     store: new cookieObj({
//       db: sequelize,
//     }),
//   };

  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => 
      console.log(`App listening on port ${PORT}!`));
  });
  