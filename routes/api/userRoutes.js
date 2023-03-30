const router = require('express').Router();
const ObjectId = require('mongodb'.ObjectId);

const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,

} = require('../../controllers/userController.js');

router.route('/').get(getAllUsers).post(createUser).post(deleteUser);

router.route('/:userId').get(getSingleUser);

module.exports = router;