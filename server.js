const exphbs = require('express-handlebars');

const express = require('express');
const session = require('express-session')
const app = express();
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sequelize = require('./config/connection')
const routes = require('./controllers')

const helpers = require('./utils/helpers')


require('dotenv').config()
const path = require('path');
// const router = require('./controllers');
const PORT = process.env.PORT || 3001;


const sess = {
  secret: 'Super',
  cookie: {  
    maxAge: 60 * 1000,   
    httpOnly: false,    
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess))



// app.use(require('./controllers/landing-routes'))
app.use(require('./controllers/home-routes'))
app.use(require('./controllers/dashboard-routes'))

app.use(express.static(path.join(__dirname, 'public')))
const hbs = exphbs.create({ helpers })
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', hbs.engine)


// app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => 
    console.log(`App listening on port ${PORT}!`));
});

// app.use(router);
