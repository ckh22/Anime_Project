import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import { getUsers, authUser } from '../controllers/userController.js';

router.route('/').get(getUsers);
router.post('/login', authUser);

export default router;
