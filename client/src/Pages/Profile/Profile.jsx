// Dependencies Imports
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { PROFILE_UPDATE_RESET } from '../../redux/constants/profileConstants';

// Material UI Core Imports
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container, FormControlLabel, FormControl, InputLabel, Input } from '@material-ui/core';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

// Components Imports
import Loader from '../../Components/Loader/Loader';
import Message from '../../Components/Message/Message';
import SearchLocationInput from './SearchLocationInput/SearchLocationInput';

// Actions Imports
import { currentUserProfile, updateUserProfile } from '../../redux/actions/profileActions';

// Styles Imports
import './Profile.css';

// Material UI Core Styles
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));

const Profile = ({ match, history }) => {
	const profileId = match.params.id;
	const [displayName, setDisplayName] = useState('');
	const [profileImage, setProfileImage] = useState('');
	const [biography, setBiography] = useState('');
	const [location, setLocation] = useState('');
	const [uploading, setUploading] = useState(false);

	// Redux
	const dispatch = useDispatch();
	const userProfile = useSelector((state) => state.userProfile);
	const userLogin = useSelector((state) => state.userLogin);

	// Decontructured data
	const { loading, error, profile } = userProfile;
	const { userInfo } = userLogin;
	const profileUpdate = useSelector((state) => state.profileUpdate);
	const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = profileUpdate;
	// Material UI Core
	const classes = useStyles();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateUserProfile({
				_id: profileId,
				displayName,
				profileImage,
				biography,
				location,
			})
		);
	};
	const handleCapture = (e) => {
		const fileReader = new FileReader();
		const name = e.accept.includes('image') ? 'images' : 'videos';

		fileReader.readAsDataURL(e.files[0]);
		fileReader.onload = (e) => {
			this.setState((prevState) => ({
				[name]: [...prevState[name], e.target.result],
			}));
		};
	};
	useEffect(() => {
		if (!userInfo) {
			history.push('/');
		} else {
			if (!profile || !profile._id || profileId) {
				dispatch({ type: PROFILE_UPDATE_RESET });
				dispatch(currentUserProfile());
			} else {
				setDisplayName(profile.displayName);
				setProfileImage(profile.profileImage);
				setBiography(profile.biography);
				setLocation(profile.location);
			}
		}
	}, [dispatch, history, profileId, profile]);

	return (
		<>
			<Container>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Container className="profile_container">
						{profile ? (
							<>
								<div className="profile_content">
									<form onSubmit={submitHandler} className={classes.form}>
										<FormControl>
											<img src={profile.profileImage} alt={profile.displayName} />

											<Input required type="text" value={profileImage}></Input>
											<input
												accept="image/*"
												className={classes.input}
												style={{ display: 'none' }}
												id="raised-button-file"
												multiple
												type="file"
											/>
											<label htmlFor="raised-button-file">
												<Button variant="raised" component="span" className={classes.button}>
													Upload
												</Button>
											</label>
										</FormControl>

										<div>
											<TextField
												error={error ? true : false}
												helperText={error}
												variant="outlined"
												margin="normal"
												required
												label={profile.displayName}
												name="displayName"
												onChange={(e) => setDisplayName(e.target.value)}
											/>
										</div>
										<div>
											<TextField
												error={error ? true : false}
												helperText={error}
												variant="outlined"
												margin="normal"
												required
												label={profile.biography}
												name="biography"
												onChange={(e) => setBiography(e.target.value)}
											/>
										</div>
										<div>
											<TextField
												error={error ? true : false}
												helperText={error}
												variant="outlined"
												margin="normal"
												required
												label={profile.location}
												name="location"
												onChange={(e) => setLocation(e.target.value)}
											/>
										</div>
										<div>
											<SearchLocationInput onChange={() => null} />
										</div>
									</form>
									<Button type="submit">Save</Button>
								</div>
							</>
						) : (
							<h1>Loading</h1>
						)}
					</Container>
				)}
			</Container>
		</>
	);
};

export default Profile;
