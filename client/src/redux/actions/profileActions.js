import axios from 'axios';
import {
	PROFILE_CREATE_REQUEST,
	PROFILE_LIST_REQUEST,
	PROFILE_UPDATE_REQUEST,
	PROFILE_DETAILS_REQUEST,
	PROFILE_CREATE_SUCCESS,
	PROFILE_LIST_SUCCESS,
	PROFILE_UPDATE_SUCCESS,
	PROFILE_DETAILS_SUCCESS,
	PROFILE_CREATE_FAIL,
	PROFILE_LIST_FAIL,
	PROFILE_UPDATE_FAIL,
	PROFILE_DETAILS_FAIL,
	PROFILE_CREATE_RESET,
	PROFILE_UPDATE_RESET,
} from '../constants/profileConstants';
import { logout } from './userActions';

export const getCurrentUserProfile = (user) => async (dispatch, getState) => {
	try {
		dispatch({
			type: PROFILE_DETAILS_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/profile`, user, config);

		dispatch({
			type: PROFILE_DETAILS_SUCCESS,
			payload: data,
		});
		localStorage.setItem('profileDetails', JSON.stringify(data));
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		if (message === 'Not Authorized: Failure with token') {
			dispatch(logout());
		}
		dispatch({
			type: PROFILE_DETAILS_FAIL,
			payload: message,
		});
	}
};

export const getUserProfileById = (id) => async (dispatch, getState) => {
	dispatch({
		type: PROFILE_DETAILS_REQUEST,
	});

	const {
		userLogin: { userInfo },
	} = getState();
	const config = {
		headers: {
			Authorization: `Bearer ${userInfo.token}`,
		},
	};
	const { data } = await axios.get(`/api/profile/${id}`, config);
	dispatch({
		type: PROFILE_DETAILS_SUCCESS,
		payload: data,
	});
};

export const updateUserProfile = (user) => async (dispatch, getState) => {};

export const listProfiles = () => async (dispatch, getState) => {
	try {
		dispatch({ type: PROFILE_LIST_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
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
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
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
