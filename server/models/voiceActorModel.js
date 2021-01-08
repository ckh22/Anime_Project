import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';
const Schema = mongoose.Schema;

const voiceActorSchema = new Schema(
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
		genre: ['Adventure', 'Shonen', 'SuperHero', 'Fantasy'],
		media: [],
		images: [
			{
				title: {
					type: String,
					required: false,
				},
				url: {
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
				type: Number,
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
	},
	{
		timestamps: true,
	}
);

const VoiceActor = mongoose.model('VoiceActor', voiceActorSchema);

export default VoiceActor;