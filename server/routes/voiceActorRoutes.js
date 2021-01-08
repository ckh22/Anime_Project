import express from 'express';
const router = express.Router();

import { getVoiceActorById, getVoiceActors } from '../controllers/voiceActorController.js';
// import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getVoiceActors);
router.route('/:id').get(getVoiceActorById);

export default router;
