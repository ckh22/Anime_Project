import express from 'express';
const router = express.Router();
// import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/', (req, res) => {
	res.send('User Router');
});

export default router;
