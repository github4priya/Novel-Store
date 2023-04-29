import express from 'express';
import {registerUser, loginUser} from '../controllers/userControllers.js';

const router = express.Router();

//for registering a user
router.route('/').post(registerUser);

//for logging a user id
router.route('/login').post(loginUser);


export default router;