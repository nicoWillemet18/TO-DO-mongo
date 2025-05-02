const express = require('express');
const Sprint = require('../models/sprint');
const router = express.Router();

router.get('/', async (req, res) => {
  const sprints = await Sprint.find();
  res.json(sprints);
});

router.post('/', async (req, res) => {
  const sprint = new Sprint(req.body);
  await sprint.save();
  res.json(sprint);
});

router.delete('/:id', async (req, res) => {
  await Sprint.findByIdAndDelete(req.params.id);
  res.json({ message: 'Sprint eliminado' });
});

router.put('/:id', async (req, res) => {
  const sprint = await Sprint.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(sprint);
});

module.exports = router;
