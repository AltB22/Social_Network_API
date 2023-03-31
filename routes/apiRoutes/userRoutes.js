const router = require('express').Router();
// const ObjectId = require('mongodb'.ObjectId);

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,

} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);//.get = no body, .post = JSON username & email, .put = JSON id & username

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);//Attach user id to URL


module.exports = router;