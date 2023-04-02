const router = require('express').Router();
// const ObjectId = require('mongodb'.ObjectId);

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,

} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);//.get = no body, .post = JSON username & email, .put = JSON id & username

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);//Attach user id to URL except for .put need both URL id extension AND JSON body username.

// Add or delete a friend
// /api/friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

// /api/friends/:friendId
// router.route('/:friendId').delete(deleteFriend);


module.exports = router;