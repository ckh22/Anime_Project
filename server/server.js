// Dependencies
import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
// import path from 'path';
import connectDB from './config/db.js';

// Routes
import userRoutes from './routes/userRoutes.js';
import animeRoutes from './routes/animeRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/anime', animeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server runnin in ${process.env.NODE_ENV} mode on ${PORT}`.red.bold));
