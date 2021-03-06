import axios from 'axios';
import {
	PROFILE_CREATE_REQUEST,
	PROFILE_LIST_REQUEST,
	PROFILE_DETAILS_REQUEST,
	PROFILE_USER_REQUEST,
	PROFILE_UPDATE_REQUEST,
	PROFILE_USER_LOCATION_REQUEST,
	PROFILE_CREATE_SUCCESS,
	PROFILE_LIST_SUCCESS,
	PROFILE_DETAILS_SUCCESS,
	PROFILE_USER_SUCCESS,
	PROFILE_UPDATE_SUCCESS,
	PROFILE_USER_LOCATION_SUCCESS,
	PROFILE_CREATE_FAIL,
	PROFILE_LIST_FAIL,
	PROFILE_USER_FAIL,
	PROFILE_UPDATE_FAIL,
	PROFILE_USER_LOCATION_FAIL,
	PROFILE_DETAILS_FAIL,
} from '../constants/profileConstants';
import { logout } from './userActions';

export const currentUserProfile = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: PROFILE_USER_REQUEST,
		});

		const {
			userLogin: {
				userInfo: { createdUser },
			},
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${createdUser.token}`,
			},
		};

		const { data } = await axios.get(`/api/profile`, config);
		localStorage.setItem('userProfile', JSON.stringify(data));
		dispatch({
			type: PROFILE_USER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		if (message === 'Not Authorized: Failure with token') {
			dispatch(logout());
		}
		dispatch({
			type: PROFILE_USER_FAIL,
			payload: message,
		});
	}
};

export const getUserProfileById = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: PROFILE_DETAILS_REQUEST,
		});

		const {
			userLogin: {
				userInfo: { createdUser },
			},
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${createdUser.token}`,
			},
		};

		const { data } = await axios.get(`/api/profile/${id}`, config);
		dispatch({
			type: PROFILE_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PROFILE_DETAILS_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const updateUserProfile = (profile) => async (dispatch, getState) => {
	try {
		dispatch({
			type: PROFILE_UPDATE_REQUEST,
		});

		const {
			userLogin: {
				userInfo: { createdUser },
			},
		} = getState();
		
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${createdUser.token}`,
			},
		};

		const { data } = await axios.put(`/api/profile/${profile._id}`, profile, config);

		dispatch({
			type: PROFILE_UPDATE_SUCCESS,
			payload: data,
		});
		dispatch({ type: PROFILE_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		if (message === 'Not authorized, token failed') {
			dispatch(logout());
		}
		dispatch({
			type: PROFILE_UPDATE_FAIL,
			payload: message,
		});
	}
};

export const listProfiles = () => async (dispatch, getState) => {
	try {
		dispatch({ type: PROFILE_LIST_REQUEST });

		const {
			userLogin: {
				userInfo: { createdUser },
			},
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${createdUser.token}`,
			},
		};

		const { data } = await axios.get(`/api/profile/all`, config);
		dispatch({
			type: PROFILE_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PROFILE_LIST_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const createUserProfile = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: PROFILE_CREATE_REQUEST,
		});

		const {
			userLogin: {
				userInfo: { createdUser },
			},
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${createdUser.token}`,
			},
		};

		const { data } = await axios.post(`/api/profile`, {}, config);

		dispatch({
			type: PROFILE_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		if (message === 'Not Authorized: Failure with token') {
			dispatch(logout());
		}
		dispatch({
			type: PROFILE_CREATE_FAIL,
			payload: message,
		});
	}
};
