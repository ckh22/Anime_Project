// Dependencies
import path from 'path';
import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
// import path from 'path';
import connectDB from './config/database.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { createData } from './data/jikan.js';

// Routes (Import):
import animeRoutes from './routes/animeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import voiceActorRoutes from './routes/voiceActorRoutes.js';
import topAnimeRoutes from './routes/topAnimeRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';


// Temporary Data
// import users from './data/users.js';
// import anime from './data/animeData.js';

dotenv.config();

// Function running to connect express with database
// connectDB(); was imported from another file and
// Sends a connection request using .env file and returns
// The connection
connectDB();

const app = express();

// Asking express to use json as a default
app.use(express.json());

// Initial Test Route
app.get('/', (req, res) => {
	res.send('API running nicely boss');
});

// Routes
// app.use("/api/users", require("./routes/api/users"));
app.use('/api/animes', animeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/voiceActors', voiceActorRoutes);
app.use('/api/topAnimes', topAnimeRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/upload', uploadRoutes);

const __dirname = path.resolve();
app.use('/temp', express.static(path.join(__dirname, '/temp')));

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server runnin in ${process.env.NODE_ENV} mode on ${PORT}`.red.bold));
const topAnime = await createData();
