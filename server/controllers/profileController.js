import asyncHandler from 'express-async-handler';
import Profile from '../models/profileModel.js';
import path from 'path';

// @desc    Get user profile
// @route   GET /api/profile/me
// @access  Private
const getCurrentUserProfile = asyncHandler(async (req, res) => {
	const profile = await Profile.findOne({
		user: req.user._id,
	}).populate('user', ['userName']);

	// If profile exists
	if (profile) {
		res.json(profile);
	} else {
		res.status(500);
		throw new Error('Profile not found');
	}
	// If is profile
	res.json(profile);
});

// @desc    Get one user profile by ID
// @route   GET /api/profile/:id
// @access  Private
const getUserProfileById = asyncHandler(async (req, res) => {
	const profile = await Profile.findById(req.params._id);
	if (profile) {
		res.json(profile);
	} else {
		res.status(404);
		throw new Error('Profile not found');
	}
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
	const profile = await Profile.findById(req.user._id);

	if (profile) {
		profile.biography = req.body.biography || profile.biography;
		profile.location = req.body.location || profile.location;
		profile.social.youtube = req.body.social.youtube || profile.social.youtube;
		profile.social.twitter = req.body.social.twitter || profile.social.twitter;
		profile.social.facebook = req.body.social.facebook || profile.social.facebook;
		profile.social.instagram = req.body.social.instagram || profile.social.instagram;
		profile.social.twitch = req.body.social.twitch || profile.social.twitch;
		profile.social.website = req.body.social.website || profile.social.website;

		const updatedProfile = await profile.save();

		res.json({
			updatedProfile,
		});
	} else {
		res.status(404);
		throw new Error('Profile not found');
	}
});

// @route      GET api/profile
// @desc       Get all profile
// @access     Public
const allUserProfiles = asyncHandler(async (req, res) => {
	try {
		const allProfiles = await Profile.find({});
		res.json(allProfiles);
	} catch (error) {
		res.status(500);
		throw new Error('No profiles found');
	}
});

// @route      POST api/profile/create
// @desc       Create a profile
// @access     Private
const createUserProfile = asyncHandler(async (req, res) => {
	const profile = new Profile({
		user: req.user._id,
		displayName: req.user.userName,
		profileImage: '/images/sample.jpg',
		biography: 'Add a biography',
		location: 'Pick a location',
		social: {
			youtube: 'youtube.com',
			twitter: 'twitter.com',
			facebook: 'facebook.com',
			instagram: 'instagram.com',
			twitch: 'twitch.com',
		},
	});
	const createdProfile = await profile.save();
	res.status(201).json(createdProfile);
});

export { getCurrentUserProfile, updateUserProfile, allUserProfiles, createUserProfile, getUserProfileById };
