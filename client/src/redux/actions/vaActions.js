import axios from 'axios';

import {
	VoiceActor_LIST_REQUEST,
	VoiceActor_LIST_SUCCESS,
	VoiceActor_LIST_FAIL,
	VoiceActor_DETAILS_REQUEST,
	VoiceActor_DETAILS_SUCCESS,
	VoiceActor_DETAILS_FAIL,
	VoiceActor_DELETE_SUCCESS,
	VoiceActor_DELETE_REQUEST,
	VoiceActor_DELETE_FAIL,
	VoiceActor_CREATE_REQUEST,
	VoiceActor_CREATE_SUCCESS,
	VoiceActor_CREATE_FAIL,
	VoiceActor_UPDATE_REQUEST,
	VoiceActor_UPDATE_SUCCESS,
	VoiceActor_UPDATE_FAIL,
} from '../constants/vaConstants.js';
import { logout } from './userActions';

export const listVoiceActors = () => async (dispatch) => {
	try {
		dispatch({ type: VoiceActor_LIST_REQUEST });

		const { data } = await axios.get(`/api/voiceActors`);

		dispatch({
			type: VoiceActor_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: VoiceActor_LIST_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const listVoiceActorDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: VoiceActor_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/voiceActors/${id}`);

		dispatch({
			type: VoiceActor_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: VoiceActor_DETAILS_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const deleteVoiceActor = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: VoiceActor_DELETE_REQUEST,
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

		await axios.delete(`/api/voiceActors/${id}`, config);

		dispatch({
			type: VoiceActor_DELETE_SUCCESS,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		if (message === 'Not Authorized: Failure with token') {
			dispatch(logout());
		}
		dispatch({
			type: VoiceActor_DELETE_FAIL,
			payload: message,
		});
	}
};

export const createVoiceActor = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: VoiceActor_CREATE_REQUEST,
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

		const { data } = await axios.post(`/api/VoiceActors`, {}, config);

		dispatch({
			type: VoiceActor_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		if (message === 'Not Authorized: Failure with token') {
			dispatch(logout());
		}
		dispatch({
			type: VoiceActor_CREATE_FAIL,
			payload: message,
		});
	}
};

export const updateVoiceActor = (voiceActor) => async (dispatch, getState) => {
	try {
		dispatch({
			type: VoiceActor_UPDATE_REQUEST,
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

		const { data } = await axios.put(`/api/voiceActors/${voiceActor._id}`, voiceActor, config);

		dispatch({
			type: VoiceActor_UPDATE_SUCCESS,
			payload: data,
		});
		dispatch({ type: VoiceActor_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		if (message === 'Not Authorized: Failure with token') {
			dispatch(logout());
		}
		dispatch({
			type: VoiceActor_UPDATE_FAIL,
			payload: message,
		});
	}
};
