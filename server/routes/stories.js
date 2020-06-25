/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
const express = require('express');
const router = new express.Router();

const storiesList = require('../storiesList');

/**
 * GET all stories
 * => {stories: [story, story, ...]}
 */

router.get('/', function(req, res, next) {
  return res.json({ stories: storiesList });
});

/**
 * POST new story
 * {newStory: "story"} => {message: ""}
 */

router.post('/', function(req, res, next) {
  // validate data here WIP
  storiesList.unshift(req.body.newStory);

  return res.status(200).json({ message: 'New story added' });
});

module.exports = router;
