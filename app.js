const dotEnv              = require('dotenv').config({silent: true});
const express             = require('express');
const logger              = require('morgan');
const path                = require('path');
const bodyParser          = require('body-parser');
const session             = require('express-session');
const cookieParser        = require('cookie-parser');
const methodOverride      = require('method-override');
const chucknorris         = require('./services/chucknorris');


const homeRoute = require('./routes/home');
const app = express();
const SECRET            = 'tacos3000';
const port              = process.argv[2] || process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('views', 'views');





app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', homeRoute);

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));

app.listen(port, ()=> console.log('i\'m listening on port', port));
