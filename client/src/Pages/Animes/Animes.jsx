// Dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Material UI Core
import { Card, CardContent, Typography } from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';

const Animes = () => {
	const dispatch = useDispatch();
	const animeDetails = useSelector((state) => state.animeDetails);
	const { loading, error, anime } = animeDetails;

	return (
		<div>
			{' '}
			{anime.map((anime) => (
				<div key={anime.id}>
					<Card>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								<br /> {anime.title}
								<br /> {anime.description}{' '}
							</Typography>
							<Link to={`/animes/${anime.id}`}>
								<img src={anime.images[0].url} alt="" />
							</Link>
						</CardContent>
					</Card>
				</div>
			))}{' '}
		</div>
	);
};

export default Animes;
