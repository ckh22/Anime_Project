import asyncHandler from 'express-async-handler';
import VoiceActor from '../models/voiceActorModel.js';

// @desc    Fetch all voiceActors
// @route   GET /api/products
// @access  Public
const getVoiceActors = asyncHandler(async (req, res) => {
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

	const count = await VoiceActor.countDocuments({ ...keyword });
	const voiceActors = await VoiceActor.find({ ...keyword })
		.limit(pageSize)
		.skip(pageSize * (page - 1));

	res.json({ voiceActors, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single voiceActor
// @route   GET /api/voiceActor/:id
// @access  Public
const getVoiceActorById = asyncHandler(async (req, res) => {
	const voiceActor = await VoiceActor.findById(req.params.id);

	if (voiceActor) {
		res.json(voiceActor);
	} else {
		res.status(404);
		throw new Error('VoiceActor not found');
	}
});

export { getVoiceActors, getVoiceActorById };