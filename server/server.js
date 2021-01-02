// Dependencies
import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`.red.bold));