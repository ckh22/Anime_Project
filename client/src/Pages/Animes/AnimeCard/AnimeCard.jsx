// Dependencies Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Style
import './AnimeCard.css';

const AnimeCard = ({ anime }) => {
	return (
		<>
			<Link to={`/anime/${anime._id}`}>
				<div className="anime-card_container">
					<div className="future_image">Future Image</div>
					<div className="anime-card_title">{anime.title}</div>
				</div>
			</Link>
		</>
	);
};

export default AnimeCard;
