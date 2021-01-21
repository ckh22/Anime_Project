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

const Studio = mongoose.model('Studio', studioSchema);

export default Studio;
