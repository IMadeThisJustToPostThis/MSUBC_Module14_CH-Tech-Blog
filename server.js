// import packages
const connection = require('./config/connection.js'); // connection to database, which contains sequelize
const routes = require('./controllers/'); // controllers
const express = require('express'); // express middleware
const session = require('express-session'); // session for authentication
const SequelizeStore = require('connect-session-sequelize')(session.Store); // session store
const handlebars = require('express-handlebars'); // handlebars for views
const path = require('path'); // path for environment paths

//setup express
const app = express();
const PORT = process.env.PORT || 3001;

//setup handlebars templating engine
const hbs = handlebars.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//setup session
const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 3600000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict'
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: connection
    })
};

//setup application
app.use(express.json()); // parsing json
app.use(express.urlencoded({ extended: false })); // parsing urls
app.use(express.static(path.join(__dirname, 'public'))); // serve static files
//app.use(routes); // connect routes to app
app.use(session(sess)); // express session

// sync sequelize models to the database, then turn on the server
connection.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening at: http://localhost:${PORT}`);
    });
});