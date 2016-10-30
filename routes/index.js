const indexRouter                = require('express').Router();
const { chuckjoke }         = require('../services/chucknorris');


indexRouter.get('/', chuckjoke, (req, res)=>{
 res.render('index', {
    random: '',
    chuckjoke: res.value
  });
});

// This route serves your `/login` form
indexRouter.get('/login', (req, res) => {
  res.render('login');
});

// This route serves your `/signup` form
indexRouter.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = indexRouter;
