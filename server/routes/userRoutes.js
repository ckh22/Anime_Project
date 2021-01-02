import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import { getUsers } from '../controllers/userController.js';

router.route('/').get(getUsers);

export default router;
