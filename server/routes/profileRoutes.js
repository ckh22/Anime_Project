import express from 'express';
const router = express.Router();

import {
	getCurrentUserProfile,
	updateUserProfile,
	allUserProfiles,
	createUserProfile,
	getUserProfileById,
} from '../controllers/profileController.js';
import { protect } from '../middleware/authMiddleware.js';

// Protect is used for protecting routes
// Only users should be able to have, and interact with a profile
router.route('/').get(protect, getCurrentUserProfile).post(protect, createUserProfile);
router.route('/:id').get(protect, getUserProfileById);


export default router;
