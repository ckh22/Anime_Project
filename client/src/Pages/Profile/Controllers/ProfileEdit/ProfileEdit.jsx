// Dependencies Imports
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { PROFILE_UPDATE_RESET } from '../../../../redux/constants/profileConstants';

// Material UI Core Imports
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
	TextField,
	Button,
	Container,
	FormControlLabel,
	FormControl,
	FormGroup,
	FormLabel,
	InputLabel,
	Input,
} from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

// Components Imports
import Loader from '../../../../Components/Loader/Loader';
import Message from '../../../../Components/Message/Message';
import SearchLocationInput from '../SearchLocationInput/SearchLocationInput';

// Actions Imports
import { getUserProfileById, updateUserProfile } from '../../../../redux/actions/profileActions';

// Styles Imports
import './ProfileEdit.css';

// Material UI Core Styles
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));

const ProfileEdit = ({ match, history }) => {
	const profileId = match.params.id;
	const [profileImage, setProfileImage] = useState('');
	const [uploading, setUploading] = useState(false);
	const [displayName, setDisplayName] = useState('');
	const [biography, setBiography] = useState('');
	const [location, setLocation] = useState('');
	const [progress, setProgress] = useState(0);

	const [social, setSocial] = useState({
		youtube: '',
		twitter: '',
		facebook: '',
		instagram: '',
		twitch: '',
		website: '',
	});

	// Redux
	const dispatch = useDispatch();
	const userProfile = useSelector((state) => state.userProfile);
	const userLogin = useSelector((state) => state.userLogin);
	const profileUpdate = useSelector((state) => state.profileUpdate);

	// Decontructured data
	const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = profileUpdate;
	const { loading, error, profile } = userProfile;
	const { userInfo } = userLogin;

	// Material UI Core
	const classes = useStyles();

	const uploadFileHandler = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('image', file);
		setUploading(true);

		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};

			const { data } = await axios.post('/api/upload', formData, config);

			setProfileImage(data);
			setUploading(false);
		} catch (error) {
			console.error(error);
			setUploading(false);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateUserProfile({
				_id: profileId,
			})
		);
	};

	useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		}
		if (!profile) {
			dispatch(getUserProfileById(profileId));
			if (!profile || !profile._id || profileId) {
				dispatch({ type: PROFILE_UPDATE_RESET });
				dispatch(getUserProfileById(profileId));
			} else {
				setDisplayName(profile.displayName);
				setProfileImage(profile.profileImage);
				setBiography(profile.biography);
				setLocation(profile.location);
			}
		}
	}, [dispatch, userInfo, profile, history, profileId]);

	return (
		<>
			<Container>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Container>
						{loading ? (
							<Loader />
						) : error ? (
							<Message variant="danger">{error}</Message>
						) : (
							<Container className="profile_container">
								<div className="profile_content">
									<form onSubmit={submitHandler}>
										<FormGroup controlId="displayName">
											<FormLabel>Username: </FormLabel>
											<FormControl
												type="displayName"
												placeholder="Enter username"
												value={displayName}
												onChange={(e) => setDisplayName(e.target.value)}
											></FormControl>
										</FormGroup>

										<FormGroup controlId="biography">
											<FormLabel>Biography:</FormLabel>
											<FormControl
												type="biography"
												placeholder="Enter summary"
												value={biography}
												onChange={(e) => setBiography(e.target.value)}
											></FormControl>
										</FormGroup>

										<FormGroup controlId="image">
											<FormLabel>Profile Image:</FormLabel>
											<FormControl
												type="text"
												placeholder="Enter image url"
												value={profileImage}
												onChange={(e) => setProfileImage(e.target.value)}
											></FormControl>
											<div className="form-group">
												<input type="file" onChange={uploadFileHandler} />
											</div>
											{uploading && <Loader />}
										</FormGroup>

										<FormControl>
											<div className="profile_header">
												<img src={profileImage} alt={displayName} />
											</div>

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

										<FormGroup controlId="location">
											<FormLabel>Location</FormLabel>
											<FormControl
												type="text"
												placeholder="Enter location"
												value={location}
												onChange={(e) => setLocation(e.target.value)}
											></FormControl>
										</FormGroup>
										<div>
											<SearchLocationInput onChange={() => null} />
										</div>
										<Button type="submit" variant="primary">
											Update
										</Button>
									</form>
								</div>
							</Container>
						)}
					</Container>
				)}
			</Container>
		</>
	);
};

export default ProfileEdit;
