const express = require('express');
const router = express.Router();
// Use the controllers as Middleware
const userController = require('./controllers/userController.js')


/* GET users listing. */
router.get('/users', userController.index);

/* Create new User */
router.post('/user/create', userController.store);

/* GET user withID. */
router.get('/user/:id', userController.show);

/* Update user. */
router.put('/user/:id/update', userController.update);

/* Delete user withID. */
router.post('/user/:id/delete', userController.destroy);

module.exports = router;
