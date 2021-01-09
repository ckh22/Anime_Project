import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import animes from './data/animeData.js';
import topAnimes from './data/jikanData.js'
import voiceActors from './data/voiceActorData.js'
import TopAnime from './models/topAnimeModel.js'
import User from './models/userModel.js';
import VoiceActor from './models/voiceActorModel.js';
import Anime from './models/animeModel.js';
import connectDB from './config/database.js';
import {createData} from './data/jikan.js'
import fs from 'fs'

dotenv.config();

connectDB();

const importData = async () => {
    try { // Delete pre-existing data
        await Anime.deleteMany();
        await User.deleteMany();
        await VoiceActor.deleteMany();
        await TopAnime.deleteMany();

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleAnimes = animes.map((anime) => {
            return {
                ...anime,
                user: adminUser
            };
        });

        const sampleTopAnimes = topAnimes.map((topAnime) => {
            return {
                ...topAnime,
                user: adminUser
            }
        })

        const sampleVoiceActors = voiceActors.map((voiceActor) => {
            return {
                ...voiceActor,
                user: adminUser
            };
        });
        await VoiceActor.insertMany(sampleVoiceActors);
        await Anime.insertMany(sampleAnimes);
        await TopAnime.insertMany(sampleTopAnimes);

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
        await VoiceActor.deleteMany()
        await TopAnime.deleteMany()

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
