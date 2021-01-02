import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import anime from './data/animeData.js';
import User from './models/userModel.js';
import Anime from './models/animeModel.js';
import connectDB from './config/database.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
        // Delete pre-existing data
		await Anime.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);

		const adminUser = createdUsers[0]._id;

		const sampleAnimes = animes.map((anime) => {
			return { ...anime, user: adminUser };
		});

		await Anime.insertMany(sampleAnimes);

		console.log('Data Imported!'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Anime.deleteMany();
		await User.deleteMany();

		console.log('Data Destroyed!'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
