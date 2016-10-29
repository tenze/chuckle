const router                = require('express').Router();
// const chucknorris            = require('../services/chucknorris');
const { chuckjoke }         = require('../services/chucknorris');


router.get('/', chuckjoke, (req, res)=>{
 res.render('index', {
    random: '',
    chuckjoke: res.value
  });
});



module.exports = router ;
