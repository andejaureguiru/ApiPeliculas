const express=require('express');
const router=express.Router();
const userController=require('../controllers/users.controller.js');
const authMiddleware = require('../utils/auth.middleware');

router.post('/', userController.registerUser);
router.get('/',userController.getUsers);
router.post('/login',userController.loginUser);

module.exports=router;