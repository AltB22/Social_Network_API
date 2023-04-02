const Thought= require('../models/thought');
// const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
//try to get bonus of removing user's thoughts when user deleted
//need a post route to create reactions stored in an individual thought's reactions array field and delete route to pull and remove a reaction by reaction's reactionId val.
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
          ? res.status(404).json({ message: 'No such thought exists!' })
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

  // update a thought
  updateThought(req, res) {
    Thought.updateOne({_id: req.params.thoughtId}, { $set: req.body })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },

// update a new thought
  deleteThought(req, res) {
     Thought.deleteOne({_id: req.params.thoughtId})
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },

  //add a reaction
  addReaction(req, res) {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;
    const reactionId = mongoose.Types.ObjectId();
    // reaction.reactionId = uuidv4();
    Thought.findOneAndUpdate(
      { _id: thoughtId },
      { $push: { reactions: { reactionId, reactionBody, username } } },
      { new: true }
    )
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
  
//delete reaction
  deleteReaction(req, res) {
    const { thoughtId, reactionId } = req.params;
    Thought.findOneAndUpdate(
      { _id: thoughtId },
      { $pull: { reactions: {_id: reactionId } } },
      { new: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "no thought found with this ID" });
          return;
        }
        dbThoughtData.reactions.forEach((reaction) => {
          reaction.username = undefined;
          reaction.reactionBody = undefined;
        }),
        dbThoughtData.save()
        .then((savedThought) => {
          res.json(dbThoughtData);
        })
        .catch((err) => res.status(400).json(err));
      })
      .catch((err) => res.status(400).json(err));
},

};


