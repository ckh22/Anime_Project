// Dependencies Imports
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';

// Material-UI Core Imports
import { makeStyles } from '@material-ui/core/styles';
import {
	Avatar,
	Button,
	Dialog,
	TextField,
	FormControlLabel,
	Checkbox,
	Grid,
	Box,
	Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Link from '@material-ui/core/Link';

// Components Imports
// import Message from '../Message/Message';
import Loader from '../../../Components/Loader/Loader';

// Style
import './AnimeDetails.css';

// Actions Imports
import { listAnimeDetails } from '../../../redux/actions/animeActions';

const AnimeDetails = ({ match }) => {
	const dispatch = useDispatch();

	const animeDetail = useSelector((state) => state.animeDetail);
	const { loading, error, anime } = animeDetail;

	// Need to bring in userInfo when displaying the edit button
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		if (!anime._id || anime._id !== match.params.id) {
			dispatch(listAnimeDetails(match.params.id));
		}
	}, [dispatch, , animeDetail, match, anime._id]);

	return (
		<div className="main">
			{loading && <Loader />}
			<ul className="sub-nav">
				<li>Episodes</li>
				<li>Manga</li>
				<li>Community</li>
				<li>Characters</li>
				<li>Voice Actors</li>
			</ul>
			<div className="content">
				<div className="jumbo-container">
					<div class="button-container">
						<a href="https://google.com" class="button">
							Join The Community
						</a>
					</div>
					<img
						src="https://www.denofgeek.com/wp-content/uploads/2020/02/my-hero-academia-heroes-rising.png?fit=2092%2C1048"
						alt=""
						className="jumbo-img"
					/>
				</div>
				<div className="top-container">
					<h1>{anime.title}</h1>
					{userInfo ? (
						<div id="form-btn">
							<Button
								color="primary"
								variant="outlined"
								component={RouterLink}
								to={`/anime/${match.params.id}/edit`}
							>
								Edit
							</Button>
						</div>
					) : null}
				</div>

				<div className="grid-form">
					<div className="form-area">
						<div className="summary-area">
							<div className="summary">Summary</div>
							<hr />
							<p className="description">{anime.description} </p>
						</div>
					</div>
					<div className="community-area"></div>
				</div>
			</div>
		</div>
	);
};

export default AnimeDetails;
