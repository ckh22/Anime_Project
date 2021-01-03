import express from 'express';
const router = express.Router();

import { getAnimes, getAnimeById } from '../controllers/animeController.js';
// import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getAnimes);
router.route('/:id').get(getAnimeById);

export default router;
