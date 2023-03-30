const router = require('express').Router();
// const ObjectId = require('mongodb'.ObjectId);

const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,

} = require('../../controllers/userController.js');

router.route('/').get(getAllUsers).post(createUser);//.delete(deleteUser);

router.route('/:userId').get(getSingleUser);//.put(updateUser);

module.exports = router;