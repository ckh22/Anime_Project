// Dependencies Imports
import React, { useEffect } from 'react';
// import { Link as RouterLink } from 'react-router-dom';

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';

// Material UI Core Imports
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

// Components Imports
import Loader from '../../Components/Loader/Loader';
import Message from '../../Components/Message/Message';

// Actions Imports
import { currentUserProfile } from '../../redux/actions/profileActions';

// Material UI Core Styles

// Styles Imports
import './Profile.css';

const Profile = ({ history }) => {
	// Redux
	const dispatch = useDispatch();
	const userProfile = useSelector((state) => state.userProfile);
	const userLogin = useSelector((state) => state.userLogin);

	// Decontructured data
	const { loading, error, profile } = userProfile;
	const { userInfo } = userLogin;

	// Material UI Core

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
				<div className="profile_container">
					{profile ? (
						<>
							<div className="profile_content">
								<h1>{profile.displayName}</h1>
								<img src={profile.profileImage} alt={profile.displayName} />
								<p>{profile.location}</p>
								<p>{profile.biography}</p>
							</div>
						</>
					) : (
						<h1>Loading</h1>
					)}
				</div>
			)}
		</>
	);
};

export default Profile;
