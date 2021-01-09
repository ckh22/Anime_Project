import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const topAnimeSchema = new Schema({
    mal_id: {
        type: Number,
        required: true
    },
    rank: {
        type: Number,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false
    },
    image_url: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    episodes: {
        type: Number,
        required: false
    },
    start_date: {
        type: String,
        required: false
    },
    end_date: {
        type: String,
        required: false
    },
    members: {
        type: Number,
        required: false
    }
})

const TopAnime = mongoose.model('TopAnime', topAnimeSchema)

export default TopAnime;