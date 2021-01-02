import express from 'express';
const router = express.Router();

router.route('/', (req, res) => {
	res.send('Profile Router');
});

export default router;
