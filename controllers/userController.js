const { application } = require('express');
const { db } = require('../models/thought');
const User = require('../models/user');

module.exports = {

  //get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  //get individual user by ID
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId})
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

  // update a new user
  updateUser(req, res) {
    User.updateOne(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
// update a new user
  deleteUser(req, res) {
    User.deleteOne({_id: req.params.userId})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
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

