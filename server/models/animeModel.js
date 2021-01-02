import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';
const Schema = mongoose.Schema;

const animeSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: false,
		},
		demographic: {
			type: String,
			required: false,
		},
		genre: {
			type: String,
			required: false,
		},
		media: [],
		images: [
			{
				title: {
					type: String,
					required: false,
				},
				image: {
					type: String,
					required: false,
				},
			},
		],
		production: {
			date: {
				type: Date,
				required: false,
			},
			budget: {
				tyep: Number,
				requred: false,
			},
		},
		cast: {
			studio: {
				type: String,
				required: false,
			},
			producer: {
				type: String,
				required: false,
			},
			voiceActor: {
				type: String,
				required: false,
			},
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const Anime = mongoose.model('Anime', animeSchema);

export default Anime;
