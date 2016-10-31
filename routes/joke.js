const router              = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { chuckjoke }         = require('../services/chucknorris');
const { getFavorites,
        saveFavorite,
        deleteFavorites } = require('../models/favorites');

router.get('/', chuckjoke, authenticate, getFavorites, (req, res) => {
  res.render('joke/index', {
    user: res.user,
    // results: res.results || [],
    chuckjoke: res.value,
    favorites: res.favorites || []
  });
});

// router.post('/search', authenticate, chuckjoke, getFavorites, (req,res) => {
//   res.render('joke/index', {
//     user: res.user,
//     results: res.results || [],
//     chuckjoke: res.value,
//     favorites: res.favorites || []
//   });
// });

router.delete('/favorites/:id', deleteFavorites, (req, res) => {
  res.redirect('/joke');
});

router.post('/favorites', saveFavorite, (req, res) => {
   console.log(saveFavorite);
  res.redirect('/joke');

});

module.exports = router;

