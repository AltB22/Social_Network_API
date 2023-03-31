const router = require('express').Router();
// const ObjectId = require('mongodb'.ObjectId);

const {
  getAllUsers,
  // getSingleUser,
  // createUser,
  // updateUser,
  // deleteUser,

} = require('../../controllers/userController.js');

router.route('/').get(getAllUsers);//.post(createUser).put(updateUser);

// router.route('/delete').delete(deleteUser);
// router.route('/:userId').get(getSingleUser);

module.exports = router;