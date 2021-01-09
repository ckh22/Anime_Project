import asyncHandler from 'express-async-handler';
import TopAnime from '../models/topAnimeModel.js';

// @desc    Fetch all animes
// @route   GET /api/products
// @access  Public
const getTopAnimes = asyncHandler(async (req, res) => {
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

	const count = await TopAnime.countDocuments({ ...keyword });
	const topAnimes = await TopAnime.find({ ...keyword })
		.limit(pageSize)
		.skip(pageSize * (page - 1));

	res.json({ topAnimes, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single anime
// @route   GET /api/anime/:id
// @access  Public
const getTopAnimeById = asyncHandler(async (req, res) => {
	const topAnime = await TopAnime.findById(req.params.id);

	if (topAnime) {
		res.json(topAnime);
	} else {
		res.status(404);
		throw new Error('Top anime not found');
	}
});

export { getTopAnimeById, getTopAnimes };
