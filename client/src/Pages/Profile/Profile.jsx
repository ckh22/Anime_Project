// Dependencies Imports
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link as RouterLink } from 'react-router-dom';

// Material UI Core Imports
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
	Avatar,
	Button,
	Dialog,
	TextField,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	Link,
	Menu,
	MenuItem,
	Grid,
	Box,
	Typography,
	Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// Components Imports
import Loader from '../../Components/Loader/Loader';
import Message from '../../Components/Message/Message';

// Actions Imports
import { getCurrentUserProfile } from '../../redux/actions/profileActions';

// Material UI Core Styles

const Profile = ({ history }) => {
	// Redux
	const dispatch = useDispatch();
	const profileDetails = useSelector((state) => state.profileDetails);
	const userLogin = useSelector((state) => state.userLogin);

	// Decontructured data
	const { loading, error, profile } = profileDetails;
	const { userInfo } = userLogin;

	// Material UI Core

	useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		}
		if (!profile) {
			dispatch(getCurrentUserProfile());
		}
	}, [dispatch, userInfo, profile, history]);

	return (
		<>
			<Container maxWidth="sm">
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<div className="profile_container">
						<h1>{profile.displayName}</h1>
						<p>{profile.location}</p>
						<p>{profile.biography}</p>
					</div>
				)}
			</Container>
		</>
	);
};

export default Profile;
