const Thought= require('../models/thought');
// const ObjectId = require('mongodb'.ObjectId);

module.exports = {

  //get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  //get individual thought by ID
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId})
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },

  // update a new thought
  updateThought(req, res) {
    Thought.updateOne({_id: req.params.thoughtId})
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
// update a new user
  deleteThought(req, res) {
     Thought.deleteOne({_id: req.params.thoughtId})
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },

};


