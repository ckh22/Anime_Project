import React from 'react';
import animes from '../../../Data/animes';

const Anime = ({ match }) => {
	const anime = animes.find((e) => e.id === match.params.id);
	return (
		<div>
			{anime.id}
			<br />
			{anime.title}
			<br />
			{anime.description}
			<br />
			{anime.demographic}
			<br />
			{anime.genre.map((res) => (
				<div key={res}>{res}</div>
			))}
			<br />
			<img src={anime.images[0].url} alt="" />
			<br />
			<div>
				{' '}
				{anime.production.date}
				<br />${anime.production.budget}
			</div>
		</div>
	);
};

export default Anime;
