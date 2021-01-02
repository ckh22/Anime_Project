const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudioSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	founded: {
		type: Date,
		required: true,
	},
	projects: [],
	location: {
		type: String,
	},
	
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
