import express from 'express';
const router = express.Router();

import { getAnimes, getAnimeById, createAnime } from '../controllers/animeController.js';
import { protect } from '../middleware/authMiddleware.js';

// Protect is used for protecting a route
// Only users should be able to create anime or add anime data
router.route('/').get(getAnimes).post(protect, createAnime);
router.route('/:id').get(getAnimeById);

export default router;
