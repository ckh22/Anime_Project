import express from 'express';
import asyncHandler from 'express-async-handler';
import Anime from '../models/animeModel.js';

const router = express.Router();


// @desc:    Fetch all anime
// @route:   GET /api/anime
// @access:  Public  
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const anime = await Anime.find({});
		res.send(anime);
	})
);

// @desc:    Fetch all anime by id
// @route:   GET /api/anime/:id
// @access:  Public  
router.get(
	'/:id',
	asyncHandler((req, res) => {
		const anime = anime.findById(req.params.id);
		if (anime) {
			res.json(anime);
		} else {
			res.status(404).json({ message: 'Anime not found' });
		}
	})
);

export default router;
