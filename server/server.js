// Dependencies
import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import {loadStripe} from '@stripe/stripe-js';


// stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const YOUR_DOMAIN = 'http://localhost:3000/donate';


// import path from 'path';
import connectDB from './config/database.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';

// Routes (Import):
import animeRoutes from './routes/animeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
// Users
import users from './data/users.js';
import anime from './data/animeData.js';

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
app.use('/api/animes', animeRoutes);
app.use('/api/users', userRoutes);
app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Stubborn Attachments',
                        images: ['https://i.imgur.com/EHyR2nP.png']
                    },
                    unit_amount: 2000
                },
                quantity: 1
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`
    });
    res.json({id: session.id});
});


// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server runnin in ${
    process.env.NODE_ENV
} mode on ${PORT}`.red.bold));
