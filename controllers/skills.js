const skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function update(req, res) {
  req.body.done = !!req.body.done;
  skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  const skill = skill.getOne(req.params.somethingcrazy);
  res.render('skills/edit', { skill });
}

function deleteSkill(req, res) {
  skill.delete(req.params.id);
  // If data is mutated we need to redirect
  // Where we redirect to, is entirely up to you
  // what do want your app to do?
  res.redirect('/skills');
}

function create(req, res) {
  // The model is responsible for CRUD
  console.log('req.body', req.body)
  skill.create(req.body);
  // If data is updated/added we need to redirect
  // Where we redirect to, is entirely up to you
  // what do want your app to do?
  res.redirect('/skills');
}

function newSkill(req, res) {
  // render the new.ejs that contains a form
  res.render('skills/new');
}

function show(req, res) {
  // Get the skill for the id that is passed as a route param
  // All route params are accessed via the req.params object
  // console.log(req.params)
  const skill = skill.getOne(req.params.id);
  res.render('skills/show', { skill });
}

function index(req, res) {
  // Obtain the array of skills from the skill model
  const skills = skill.getAll();
  res.render('skills/index', { skills });
}