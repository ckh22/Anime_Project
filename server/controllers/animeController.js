import asyncHandler from 'express-async-handler';
import Anime from '../models/animeModel.js';

// @desc    Fetch all animes
// @route   GET /api/animes
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
// @route   GET /api/animes/:id
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

// @desc    Create a anime
// @route   POST /api/animes
// @access  Private
const createAnime = asyncHandler(async (req, res) => {
	const { title, description, demographic, genre, media, images, production, cast } = req.body;
	const animeExists = await Anime.findOne({ title });

	if (animeExists) {
		res.status(400);
		throw new Error('Anime already exists');
	}

	const anime = new Anime({
		title: title,
		description: description,
		demographic: demographic,
		genre: genre,
		media: media,
		images: images,
		production: production,
		cast: cast,
	});

	const createdAnime = await anime.save();
	res.status(201).json(createAnime);
});

export { getAnimes, getAnimeById, createAnime };
