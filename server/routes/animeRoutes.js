import express from 'express';
const router = express.Router();

router.route('/', (req, res) => {
	res.send('Anime Router');
});

export default router;
