const router = require('express').Router();
const userRoutes = require('./userRoutes');
const friendRoutes = require('./friendRoutes');

router.use('/users', userRoutes);
router.use('/friends', friendRoutes);

module.exports = router;
