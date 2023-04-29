import express from 'express';
import { createBook, getBooks, homeBooks } from '../controllers/BooksControllers.js'
import {protect} from '../middlewares/authMiddleware.js'

const router = express.Router();


//redirecting to thier controllers
router.route('/').post(protect, homeBooks); // get all book lists from all users
router.route('/create').post(protect, createBook); // create a ticket for a book for sail
router.route('/dashboard').get(getBooks); // get all book lists from a perticular user

export default router;