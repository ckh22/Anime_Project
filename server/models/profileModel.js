import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const profileSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user',
	},
	displayName: {
		type: String,
	},
	profileImage: {
		type: String,
	},
	biography: {
		type: String,
	},
	location: {
		type: String,
	},
	social: {
		youtube: {
			type: String,
		},
		twitter: {
			type: String,
		},
		facebook: {
			type: String,
		},
		instagram: {
			type: String,
		},
		twitch: {
			type: String,
		},
		website: {
			type: String,
		},
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
