// Dependencies Imports
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
// import { PROFILE_UPDATE_RESET } from '../../redux/constants/profileConstants';

// Material UI Core Imports
import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';

// Components Imports
import Loader from '../../../Components/Loader/Loader';
import Message from '../../../Components/Message/Message';

// Actions Imports
import { getUserProfileById } from '../../redux/actions/profileActions';

// Styles Imports
// import './Profile.css';

// Material UI Core Styles
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));

const ProfileCard = ({ match, history }) => {
	// const profileId = match.params.id;
	const [displayName, setDisplayName] = useState('');
	const [profileImage, setProfileImage] = useState('');
	const [biography, setBiography] = useState('');
	const [location, setLocation] = useState('');

	// Redux
	const dispatch = useDispatch();
	const profileDetails = useSelector((state) => state.profileDetails);
	const userLogin = useSelector((state) => state.userLogin);

	// Decontructured data
	const { userInfo } = userLogin;
	const { loading, error, profile } = profileDetails;

	// Material UI Core
	const classes = useStyles();

	useEffect(() => {
		if (!userInfo) {
			history.push('/');
		} else {
			console.log('lol')
		}
	}, [dispatch, history, profile, userInfo, match]);

	return (
		<>
			<Container>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="error">{error}</Message>
				) : (
					<Container className="profile_container">
						<div className="profile_content">
							<div className="profile_edit_button">
								{userInfo ? (
									<div id="form-btn">
										<Button
											color="primary"
											variant="outlined"
											component={RouterLink}
											to={`/profile/${match.params.id}`}
										>
											Edit
										</Button>
									</div>
								) : null}
							</div>
							<div className="profile_header">
								<img src={profileImage} alt={displayName} />
							</div>
							<div>
								<p>{displayName}</p>
							</div>
							<div>
								<p>{biography}</p>
							</div>
							<div>
								<p>{location}</p>
							</div>
							<Profiles />
						</div>
					</Container>
				)}
			</Container>
		</>
	);
};

export default ProfileCard;
