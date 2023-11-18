const express = require('express');
const router = express.Router();
const {getAllUsers, getSingleUser, updateUser, updateUserPassword, showMe} = require('../controllers/userController');

router.get('/', getAllUsers);
router.get('/showMe', showMe);
router.patch('/update-user', updateUser);
router.patch('/update-user-password', updateUserPassword);
router.get('/:id', getSingleUser);

module.exports = router;