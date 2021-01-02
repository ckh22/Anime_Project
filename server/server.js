// Dependencies
import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
// import path from 'path';
import connectDB from './config/database.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Routes (Import):
import animeRoutes from './routes/animeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import profileRoutes from './routes/profileRoutes.js';

// Users
import users from './data/users.js';
import anime from './data/anime.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// Initial Test Route
app.get('/', (req, res) => {
	res.send('API running nicely boss');
});

// Routes
// app.use("/api/users", require("./routes/api/users"));
app.get('/api/users', (req, res) => {
	res.send(users);
});
app.get('/api/anime', (req, res) => {
	res.send(anime);
});

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server runnin in ${process.env.NODE_ENV} mode on ${PORT}`.red.bold));
