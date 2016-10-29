const fetch       = require('node-fetch');
const API_URL      = 'http://api.icndb.com/jokes/random/5';


function chuckjoke (req,res,next) {
  fetch(`${API_URL}`)
  .then(apiResponse => {
    console.log('THIS IS API RESPONSE: ' + apiResponse)
    return apiResponse.json()
  })
  .then((data) => {
      res.value = data;
      next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}


module.exports = { chuckjoke };
