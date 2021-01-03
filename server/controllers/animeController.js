import asyncHandler from 'express-async-handler';
import Anime from '../models/animeModel.js';

// @desc    Fetch all animes
// @route   GET /api/products
// @access  Public
const getAnimes = asyncHandler(async (req, res) => {
	const pageSize = 10;
	const page = Number(req.query.pageNumber) || 1;

	const keyword = req.query.keyword
		? {
				name: {
					$regex: req.query.keyword,
					$options: 'i',
				},
		  }
		: {};

	const count = await Anime.countDocuments({ ...keyword });
	const animes = await Anime.find({ ...keyword })
		.limit(pageSize)
		.skip(pageSize * (page - 1));

	res.json({ animes, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single anime
// @route   GET /api/anime/:id
// @access  Public
const getAnimeById = asyncHandler(async (req, res) => {
	const anime = await Anime.findById(req.params.id);

	if (anime) {
		res.json(anime);
	} else {
		res.status(404);
		throw new Error('Anime not found');
	}
});

export { getAnimes, getAnimeById };
