// Dependencies
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Material UI Core
// import {Grid, Paper} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';

// Components
import Message from '../../Components/Message/Message';
import Loader from '../../Components/Loader/Loader';

// Actions
import { listProfiles } from '../../redux/actions/profileActions';

// Styles

const Profiles = ({ history }) => {
	// Page number for pagination later on
	// const pageNumber = match.params.pageNumber || 1;

	// Redux
	const dispatch = useDispatch();
	const profileList = useSelector((state) => state.profileList);
	const userLogin = useSelector((state) => state.userLogin);

	// Decontructing animeDetails on Redux store
	const { loading, error, profiles } = profileList;
	const { userInfo } = userLogin;

	// Material UI Core
	// const classes = useStyles();

	// Effect
	useEffect(() => {
		if (!userInfo) {
			dispatch(listProfiles());
		} else {
			history.push('/login');
		}
	}, [dispatch, history, userInfo]);

	return (
		<>
			<h1>Profiles</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="error">{error}</Message>
			) : (
				<>
					<div className="profiles">
						{profiles.length > 0 ? (
							profiles.map((profile) => <div key={profile._id}>{profile.displayName}</div>)
						) : (
							<h4>No Profiles Found</h4>
						)}
					</div>
				</>
			)}
		</>
	);
};

export default Profiles;
