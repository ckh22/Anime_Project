import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile, currentUserProfile } from '../../../../redux/actions/profileActions';

// Components Imports
import Loader from '../../../../Components/Loader/Loader';
import Message from '../../../../Components/Message/Message';

// Material-UI Core
import { Container, FormControl, FormGroup, FormLabel, Button } from '@material-ui/core';

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

	// Decontructured data
	const { loading, error, profile } = userProfile;
	const { userInfo } = userLogin;

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
			dispatch(currentUserProfile());
		}
	}, [dispatch, userInfo, profile, history]);

	return (
		<>
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

							<FormGroup controlId="location">
								<FormLabel>Location</FormLabel>
								<FormControl
									type="text"
									placeholder="Enter location"
									value={location}
									onChange={(e) => setLocation(e.target.value)}
								></FormControl>
							</FormGroup>

							<Button type="submit" variant="primary">
								Update
							</Button>
						</form>
					)}
				</Container>
			)}
		</>
	);
};

export default ProfileEdit;
