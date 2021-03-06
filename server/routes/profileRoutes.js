import express from 'express';
const router = express.Router();
import {
	getCurrentUserProfile,
	getUserProfileById,
	updateUserProfile,
	allUserProfiles,
	createUserProfile,
} from '../controllers/profileController.js';
import { protect } from '../middleware/authMiddleware.js';

// Protect is used for protecting routes
// Only users should be able to have, and interact with a profile
router.route('/all').get(protect, allUserProfiles);
router.route('/').get(protect, getCurrentUserProfile).post(protect, createUserProfile);
router.route('/:id').get(protect, getUserProfileById).put(protect, updateUserProfile);

export default router;
