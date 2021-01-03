import {
	ANIME_LIST_REQUEST,
	ANIME_LIST_SUCCESS,
	ANIME_LIST_FAIL,
	ANIME_DETAILS_REQUEST,
	ANIME_DETAILS_SUCCESS,
	ANIME_DETAILS_FAIL,
	ANIME_DELETE_REQUEST,
	ANIME_DELETE_SUCCESS,
	ANIME_DELETE_FAIL,
	ANIME_CREATE_RESET,
	ANIME_CREATE_FAIL,
	ANIME_CREATE_SUCCESS,
	ANIME_CREATE_REQUEST,
	ANIME_UPDATE_REQUEST,
	ANIME_UPDATE_SUCCESS,
	ANIME_UPDATE_FAIL,
	ANIME_UPDATE_RESET,
} from '../constants/ANIMEConstants';

//  ANIME_CREATE_REVIEW_REQUEST,
// 	ANIME_CREATE_REVIEW_SUCCESS,
// 	ANIME_CREATE_REVIEW_FAIL,
// 	ANIME_CREATE_REVIEW_RESET,
// 	ANIME_TOP_REQUEST,
// 	ANIME_TOP_SUCCESS,
//  ANIME_TOP_FAIL,

export const animeListReducer = (state = { animes: [] }, action) => {
	switch (action.type) {
		case ANIME_LIST_REQUEST:
			return { loading: true, animes: [] };
		case ANIME_LIST_SUCCESS:
			return {
				loading: false,
				animes: action.payload.animes,
				pages: action.payload.pages,
				page: action.payload.page,
			};
		case ANIME_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const animeDetailsReducer = (state = { anime: { reviews: [] } }, action) => {
	switch (action.type) {
		case ANIME_DETAILS_REQUEST:
			return { ...state, loading: true };
		case ANIME_DETAILS_SUCCESS:
			return { loading: false, anime: action.payload };
		case ANIME_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const animeDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case ANIME_DELETE_REQUEST:
			return { loading: true };
		case ANIME_DELETE_SUCCESS:
			return { loading: false, success: true };
		case ANIME_DELETE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const animeCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case ANIME_CREATE_REQUEST:
			return { loading: true };
		case ANIME_CREATE_SUCCESS:
			return { loading: false, success: true, anime: action.payload };
		case ANIME_CREATE_FAIL:
			return { loading: false, error: action.payload };
		case ANIME_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const animeUpdateReducer = (state = { anime: {} }, action) => {
	switch (action.type) {
		case ANIME_UPDATE_REQUEST:
			return { loading: true };
		case ANIME_UPDATE_SUCCESS:
			return { loading: false, success: true, anime: action.payload };
		case ANIME_UPDATE_FAIL:
			return { loading: false, error: action.payload };
		case ANIME_UPDATE_RESET:
			return { anime: {} };
		default:
			return state;
	}
};
