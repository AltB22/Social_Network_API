const router = require('express').Router();

const {
  getAllFriends,
  addFriend,
  removeFriend
} = require('../../controllers/friendController');

// /api/friends
router.route('/').get(getAllFriends).post(addFriend);

// /api/friends/:friendId
router.route('/:friendId').delete(removeFriend);

module.exports = router;
