// Dependencies Imports
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';

// Material UI Core Imports
import clsx from 'clsx';
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
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
		// border: '1px solid red',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	textField: {
		width: '100%',
	},
}));

const Profile = ({ match, history }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	// Redux
	const dispatch = useDispatch();
	const profileDetails = useSelector((state) => state.profileDetails);
	const userLogin = useSelector((state) => state.userLogin);

	// Decontructured data
	const { loading, error, profile } = profileDetails;
	const { userInfo } = userLogin;

	// Material UI Core
	const classes = useStyles();

	useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		}
		if (!profile._id || profile._id !== match.params.id) {
			dispatch(getCurrentUserProfile(match.params.id));
		}
	}, [dispatch, match, profile._id]);

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
						<img src={profile.profileImage} alt={profile.title} />
						<p>{profile.location}</p>
						<p>{profile.biography}</p>
						

					</div>
				)}
			</Container>
		</>
	);
};

export default Profile;
