import express from 'express';
const router = express.Router();
import {createCheckout} from '../controllers/stripeController'

router.post('/create-checkout-session', createCheckout)


export default router;
