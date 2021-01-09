import express from 'express';
const router = express.Router();

import { getTopAnimeById, getTopAnimes } from '../controllers/topAnimeController.js';
// import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getTopAnimes);
router.route('/:id').get(getTopAnimeById);

export default router;
