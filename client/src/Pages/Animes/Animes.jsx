// Dependencies
import React, { useState, useEffect } from 'react';

// Components
import Message from '../../Components/Message/Message';
import Loader from '../../Components/Loader/Loader';
import Anime from './Anime/Anime';

// Material UI Core
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { listAnimes } from '../../redux/actions/animeActions';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	},
}));

const Animes = ({ history, match }) => {
	// Page number for pagination later on
	// const pageNumber = match.params.pageNumber || 1;

	// Redux
	const dispatch = useDispatch();
	const animeList = useSelector((state) => state.animeList);

	// Decontructing animeDetails on Redux store
	const { loading, error, animes } = animeList;

	// Material UI Core
	const classes = useStyles();

	// Effect
	useEffect(() => {
		dispatch(listAnimes());
	}, [dispatch]);

	return (
		<>
			<h1>Latest Anime</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="error">{error}</Message>
			) : (
				<>
					<Grid>
						{animes.map((anime) => (
							<Paper key={anime._id}>
								<Anime anime={anime} />
							</Paper>
						))}
					</Grid>
				</>
			)}
		</>
	);
};
export default Animes;
