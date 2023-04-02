const Thought= require('../models/thought');
// const { v4: uuidv4 } = require('uuid');
// const mongoose = require('mongoose');
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
    Thought.findOne({ _id: req.params.thoughtId, 
    users: req.params.userId})
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

// create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

// update a user
  updateUser(req, res) {
    User.updateOne({_id: req.params.userId}, { $set: req.body })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
},

// delete a user
  deleteUser(req, res) {
    User.deleteOne({_id: req.params.userId})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  
//add a friend
  addFriend(req, res) {
    console.log(req.params.userId),
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  
//delete friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "no user found with this ID" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
},

};

