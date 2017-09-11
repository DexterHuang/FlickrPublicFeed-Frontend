var express = require('express');
var request = require('request');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  request.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json&&nojsoncallback=1',
    {
      format: "json"
    },
    (error, response, body) => {
      res.jsonp(body);
    })
});
module.exports = router;
