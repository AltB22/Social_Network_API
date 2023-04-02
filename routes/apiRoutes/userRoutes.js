const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,

} = require('../../controllers/userController.js');

//get all users and create new user
router.route('/').get(getUsers).post(createUser);//.get = no body, .post = JSON username & email.

//get one user by ID, update a user by ID, and delete a user by ID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);//Attach user id to URL except for .put need both URL id extension AND JSON body username.

// Add and delete a friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);






module.exports = router;