var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: 'TP' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'TP' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'TP' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'TP' });
});




module.exports = router;
