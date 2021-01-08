import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import { getUsers, authUser, registerUser } from '../controllers/userController.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', authUser);

export default router;
