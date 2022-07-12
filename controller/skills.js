const Todo = require('../models/skills');

module.exports = {
  index,
  show
};

function show(req, res) {
  // Get the todo for the id that is passed as a route param
  // All route params are accessed via the req.params object
  // console.log(req.params)
  const todo = Todo.getOne(req.params.id);
  res.render('skills/show', { skill });
}

function index(req, res) {
  // Obtain the array of todos from the Todo model
  const todos = Todo.getAll();
  res.render('skills/index', { skills });
}