// Dependencies Imports
import React, { useEffect } from 'react';

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';

// Material UI Core
// import {Grid, Paper} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';

// Components Imports
import Message from '../../Components/Message/Message';
import Loader from '../../Components/Loader/Loader';
import AnimeCard from './AnimeCard/AnimeCard';
import CarouselFormat from '../../Components/Carousel/CarouselFormat';

// Actions Imports
import { listAnimes } from '../../redux/actions/animeActions';

// Styles Imports
import './Animes.css';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1
//     },
//     paper: {
//         height: 140,
//         width: 100
//     },
//     control: {
//         padding: theme.spacing(2)
//     }
// }));

const Animes = ({ history, match }) => {
	// Page number for pagination later on
	// const pageNumber = match.params.pageNumber || 1;

	// Redux
	const dispatch = useDispatch();
	const animeList = useSelector((state) => state.animeList);

	// Decontructing animeDetails on Redux store
	const { loading, error, animes } = animeList;

	// Material UI Core
	// const classes = useStyles();

	// Effect
	useEffect(() => {
		dispatch(listAnimes());
	}, [dispatch]);

	return (
		<div className="main">
			<div className="anime-content">
				<ul className="sub-nav">
					<li>Winter 2021 Anime</li>
					<li>Popular</li>
					<li>By Decade</li>
					<li>Community</li>
				</ul>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="error">{error}</Message>
				) : (
					<div className="container">
						<CarouselFormat />
						<div className="popular">Hot 🔥</div>
						<div className="animes-flex">
							{animes.map((anime) => (
								<div>
									<AnimeCard anime={anime} className="item-b" key={anime._id} />
								</div>
							))}{' '}
						</div>
					</div>
				)}{' '}
			</div>
		</div>
	);
};

export default Animes;
