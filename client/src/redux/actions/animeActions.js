import axios from 'axios';

import {
	ANIME_LIST_REQUEST,
	ANIME_LIST_SUCCESS,
	ANIME_LIST_FAIL,
	ANIME_DETAILS_REQUEST,
	ANIME_DETAILS_SUCCESS,
	ANIME_DETAILS_FAIL,
	ANIME_DELETE_SUCCESS,
	ANIME_DELETE_REQUEST,
	ANIME_DELETE_FAIL,
	ANIME_CREATE_REQUEST,
	ANIME_CREATE_SUCCESS,
	ANIME_CREATE_FAIL,
	ANIME_UPDATE_REQUEST,
	ANIME_UPDATE_SUCCESS,
	ANIME_UPDATE_FAIL,
} from '../constants/animeConstants';
import { logout } from './userActions';

export const listAnimes = () => async (dispatch) => {
	try {
		dispatch({ type: ANIME_LIST_REQUEST });

		const { data } = await axios.get(`/api/animes`);

		dispatch({
			type: ANIME_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ANIME_LIST_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const listAnimeDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: ANIME_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/animes/${id}`);

		dispatch({
			type: ANIME_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ANIME_DETAILS_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const deleteAnime = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: ANIME_DELETE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		await axios.delete(`/api/animes/${id}`, config);

		dispatch({
			type: ANIME_DELETE_SUCCESS,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		if (message === 'Not Authorized: Failure with token') {
			dispatch(logout());
		}
		dispatch({
			type: ANIME_DELETE_FAIL,
			payload: message,
		});
	}
};

export const createAnime = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: ANIME_CREATE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		// Creating Anime should require authorization and a bearer token
		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.post(`/api/animes`, {}, config);

		dispatch({
			type: ANIME_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		if (message === 'Not Authorized: Failure with token') {
			dispatch(logout());
		}
		dispatch({
			type: ANIME_CREATE_FAIL,
			payload: message,
		});
	}
};

export const updateAnime = (anime) => async (dispatch, getState) => {
	try {
		dispatch({
			type: ANIME_UPDATE_REQUEST,
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

		const { data } = await axios.put(`/api/animes/${anime._id}`, anime, config);

		dispatch({
			type: ANIME_UPDATE_SUCCESS,
			payload: data,
		});
		dispatch({ type: ANIME_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		if (message === 'Not Authorized: Failure with token') {
			dispatch(logout());
		}
		dispatch({
			type: ANIME_UPDATE_FAIL,
			payload: message,
		});
	}
};
