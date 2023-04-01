const { application } = require('express');
const { db } = require('../models/thought');
const User = require('../models/user');
//try to get bonus of removing user's thoughts when user deleted

module.exports = {

  //get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  //get individual user by ID
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId, 
    thoughts: req.params.thoughtId})
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

  addFriend(req, res) {
    User.findOneAndUpdate(
    { _id: params.id },
    { $addToSet: { friends: params.friendsId } },
    { new: true }
  )
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => res.status(500).json(err));
},

  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $pull: { friends: params.friendsId } },
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

// app.get('/path', (req, res) => {
//   db.collection('listOfDocuments')

// below notes on methods()

// .find() find all

// .sort({item: 1 || -1}) sorts in ascending or descending order

// .skip(1) skip first doc

// .limit(5) limits to 5 results

// toArray((err, results)) => {
//   if (err) throw err;
//   res.send(results);
// }
// })

