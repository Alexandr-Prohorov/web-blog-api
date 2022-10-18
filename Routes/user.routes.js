const Router = require('express')
const router = new Router()
const userController = require('../Controllers/user.controller')

// router.post('/user', userController.createUser);
router.post('/user', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/user/:id', userController.getOneUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);



module.exports = router