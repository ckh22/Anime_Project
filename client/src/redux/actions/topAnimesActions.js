import axios from 'axios';

import {
	TOP_ANIME_LIST_REQUEST,
	TOP_ANIME_LIST_SUCCESS,
	TOP_ANIME_LIST_FAIL,
	TOP_ANIME_DETAILS_REQUEST,
	TOP_ANIME_DETAILS_SUCCESS,
	TOP_ANIME_DETAILS_FAIL,
	TOP_ANIME_DELETE_SUCCESS,
	TOP_ANIME_DELETE_REQUEST,
	TOP_ANIME_DELETE_FAIL,
	TOP_ANIME_CREATE_REQUEST,
	TOP_ANIME_CREATE_SUCCESS,
	TOP_ANIME_CREATE_FAIL,
	TOP_ANIME_UPDATE_REQUEST,
	TOP_ANIME_UPDATE_SUCCESS,
	TOP_ANIME_UPDATE_FAIL,
} from '../constants/topAnimeConstants';
import { logout } from './userActions';

export const listTopAnimes = () => async (dispatch) => {
	try {
		dispatch({ type: TOP_ANIME_LIST_REQUEST });

		const { data } = await axios.get(`/api/topAnimes`);

		dispatch({
			type: TOP_ANIME_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: TOP_ANIME_LIST_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const listTopAnimeDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: TOP_ANIME_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/topAnimes/${id}`);

		dispatch({
			type: TOP_ANIME_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: TOP_ANIME_DETAILS_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const deleteTopAnime = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: TOP_ANIME_DELETE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		await axios.delete(`/api/topAnimes/${id}`, config);

		dispatch({
			type: TOP_ANIME_DELETE_SUCCESS,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		if (message === 'Not Authorized: Failure with token') {
			dispatch(logout());
		}
		dispatch({
			type: TOP_ANIME_DELETE_FAIL,
			payload: message,
		});
	}
};

export const createTopAnime = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: TOP_ANIME_CREATE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.post(`/api/topAnimes`, {}, config);

		dispatch({
			type: TOP_ANIME_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		if (message === 'Not Authorized: Failure with token') {
			dispatch(logout());
		}
		dispatch({
			type: TOP_ANIME_CREATE_FAIL,
			payload: message,
		});
	}
};

export const updateTopAnime = (anime) => async (dispatch, getState) => {
	try {
		dispatch({
			type: TOP_ANIME_UPDATE_REQUEST,
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

		const { data } = await axios.put(`/api/topAnimes/${anime._id}`, anime, config);

		dispatch({
			type: TOP_ANIME_UPDATE_SUCCESS,
			payload: data,
		});
		dispatch({ type: TOP_ANIME_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		const message = error.response && error.response.data.message ? error.response.data.message : error.message;
		if (message === 'Not Authorized: Failure with token') {
			dispatch(logout());
		}
		dispatch({
			type: TOP_ANIME_UPDATE_FAIL,
			payload: message,
		});
	}
};
