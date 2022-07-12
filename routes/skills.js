var express = require('express');
var router = express.Router();
// Require our todos controller module
const skillsCtrl = require('../controllers/todos');

// All routes will start with '/todos'

// GET /todos (index functionality - list all)
router.get('/', skillsCtrl.index);
// GET /todos/:id (show functionality - show one todo)
router.get('/:id', skillsCtrl.show);


module.exports = router;
