const stripe = require('stripe')('sk_test_51I5gN0KxoBNBnSMwgtMwZW88rhzl5YcpJoU2WgHP50Xb68kp0GtMm7JsTxhVJ218s24SO4CQyyjd9lZ26mMMImSf006lTEY1m9');
import asyncHandler from 'express-async-handler';
import stripeModel from '../models/stripeModel'


const createCheckout = asyncHandler(async (req, res) => {
    const session = await stripe.checkout.sessions.create(stripeModel);
    res.json({id: session.id});
});

export {createCheckout}