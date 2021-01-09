import {
	TOP_ANIME_LIST_REQUEST,
	TOP_ANIME_LIST_SUCCESS,
	TOP_ANIME_LIST_FAIL,
	TOP_ANIME_DETAILS_REQUEST,
	TOP_ANIME_DETAILS_SUCCESS,
	TOP_ANIME_DETAILS_FAIL,
	TOP_ANIME_DELETE_REQUEST,
	TOP_ANIME_DELETE_SUCCESS,
	TOP_ANIME_DELETE_FAIL,
	TOP_ANIME_CREATE_RESET,
	TOP_ANIME_CREATE_FAIL,
	TOP_ANIME_CREATE_SUCCESS,
	TOP_ANIME_CREATE_REQUEST,
	TOP_ANIME_UPDATE_REQUEST,
	TOP_ANIME_UPDATE_SUCCESS,
	TOP_ANIME_UPDATE_FAIL,
	TOP_ANIME_UPDATE_RESET,
} from '../constants/topAnimeConstants';

//  TOP_ANIME_CREATE_REVIEW_REQUEST,
// 	TOP_ANIME_CREATE_REVIEW_SUCCESS,
// 	TOP_ANIME_CREATE_REVIEW_FAIL,
// 	TOP_ANIME_CREATE_REVIEW_RESET,
// 	TOP_ANIME_TOP_REQUEST,
// 	TOP_ANIME_TOP_SUCCESS,
//  TOP_ANIME_TOP_FAIL,

export const topAnimeListReducer = (state = { topAnimes: [] }, action) => {
	switch (action.type) {
		case TOP_ANIME_LIST_REQUEST:
			return { loading: true, topAnimes: [] };
		case TOP_ANIME_LIST_SUCCESS:
			return {
				loading: false,
				topAnimes: action.payload.topAnimes,
				pages: action.payload.pages,
				page: action.payload.page,
			};
		case TOP_ANIME_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const topAnimeDetailsReducer = (state = { topAnime: { reviews: [] } }, action) => {
	switch (action.type) {
		case TOP_ANIME_DETAILS_REQUEST:
			return { ...state, loading: true };
		case TOP_ANIME_DETAILS_SUCCESS:
			return { loading: false, topAnime: action.payload };
		case TOP_ANIME_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const topAnimeDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case TOP_ANIME_DELETE_REQUEST:
			return { loading: true };
		case TOP_ANIME_DELETE_SUCCESS:
			return { loading: false, success: true };
		case TOP_ANIME_DELETE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const topAnimeCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case TOP_ANIME_CREATE_REQUEST:
			return { loading: true };
		case TOP_ANIME_CREATE_SUCCESS:
			return { loading: false, success: true, topAnime: action.payload };
		case TOP_ANIME_CREATE_FAIL:
			return { loading: false, error: action.payload };
		case TOP_ANIME_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const topAnimeUpdateReducer = (state = { topAnime: {} }, action) => {
	switch (action.type) {
		case TOP_ANIME_UPDATE_REQUEST:
			return { loading: true };
		case TOP_ANIME_UPDATE_SUCCESS:
			return { loading: false, success: true, topAnime: action.payload };
		case TOP_ANIME_UPDATE_FAIL:
			return { loading: false, error: action.payload };
		case TOP_ANIME_UPDATE_RESET:
			return { topAnime: {} };
		default:
			return state;
	}
};