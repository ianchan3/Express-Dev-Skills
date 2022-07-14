var express = require('express');
var router = express.Router();

// The index router is a great place to define routes
// for the home/welcome/landing, about, contact, etc. pages.
// In the future, we'll also define our authentication routes here

// All routes "starts with" /

// GET /
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Skill' });
});

module.exports = router;
