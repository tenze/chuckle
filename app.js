const dotEnv              = require('dotenv').config({silent: true});
const express             = require('express');
const logger              = require('morgan');
const path                = require('path');
const bodyParser          = require('body-parser');
const session             = require('express-session');
const cookieParser        = require('cookie-parser');
const methodOverride      = require('method-override');
const chucknorris         = require('./services/chucknorris');

const authRouter          = require('./routes/auth');
const indexRouter         = require('./routes/index');
const jokeRouter        = require('./routes/joke');
const userRouter         = require('./routes/user');


const app               = express();
const SECRET            = 'tacos3000';

app.set('view engine', 'ejs');
app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cookieParser());

// const login     = require('./routes/');

app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/joke', jokeRouter);



app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));

// Listen on port for connections
// process.env.PORT is needed for when we deploy to Heroku
const port              = process.argv[2] || process.env.PORT || 3000;
app.listen(port, ()=> console.log('i\'m listening on port', port));
