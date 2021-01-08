import {
	VoiceActor_LIST_REQUEST,
	VoiceActor_LIST_SUCCESS,
	VoiceActor_LIST_FAIL,
	VoiceActor_DETAILS_REQUEST,
	VoiceActor_DETAILS_SUCCESS,
	VoiceActor_DETAILS_FAIL,
	VoiceActor_DELETE_REQUEST,
	VoiceActor_DELETE_SUCCESS,
	VoiceActor_DELETE_FAIL,
	VoiceActor_CREATE_RESET,
	VoiceActor_CREATE_FAIL,
	VoiceActor_CREATE_SUCCESS,
	VoiceActor_CREATE_REQUEST,
	VoiceActor_UPDATE_REQUEST,
	VoiceActor_UPDATE_SUCCESS,
	VoiceActor_UPDATE_FAIL,
	VoiceActor_UPDATE_RESET,
} from '../constants/vaConstants';

//  VoiceActor_CREATE_REVIEW_REQUEST,
// 	VoiceActor_CREATE_REVIEW_SUCCESS,
// 	VoiceActor_CREATE_REVIEW_FAIL,
// 	VoiceActor_CREATE_REVIEW_RESET,
// 	VoiceActor_TOP_REQUEST,
// 	VoiceActor_TOP_SUCCESS,
//  VoiceActor_TOP_FAIL,

export const voiceActorListReducer = (state = { voiceActors: [] }, action) => {
	switch (action.type) {
		case VoiceActor_LIST_REQUEST:
			return { loading: true, voiceActors: [] };
		case VoiceActor_LIST_SUCCESS:
			return {
				loading: false,
				voiceActors: action.payload.voiceActors,
				pages: action.payload.pages,
				page: action.payload.page,
			};
		case VoiceActor_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const voiceActorDetailsReducer = (state = { voiceActor: { reviews: [] } }, action) => {
	switch (action.type) {
		case VoiceActor_DETAILS_REQUEST:
			return { ...state, loading: true };
		case VoiceActor_DETAILS_SUCCESS:
			return { loading: false, voiceActor: action.payload };
		case VoiceActor_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const voiceActorDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case VoiceActor_DELETE_REQUEST:
			return { loading: true };
		case VoiceActor_DELETE_SUCCESS:
			return { loading: false, success: true };
		case VoiceActor_DELETE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const voiceActorCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case VoiceActor_CREATE_REQUEST:
			return { loading: true };
		case VoiceActor_CREATE_SUCCESS:
			return { loading: false, success: true, voiceActor: action.payload };
		case VoiceActor_CREATE_FAIL:
			return { loading: false, error: action.payload };
		case VoiceActor_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const voiceActorUpdateReducer = (state = { voiceActor: {} }, action) => {
	switch (action.type) {
		case VoiceActor_UPDATE_REQUEST:
			return { loading: true };
		case VoiceActor_UPDATE_SUCCESS:
			return { loading: false, success: true, voiceActor: action.payload };
		case VoiceActor_UPDATE_FAIL:
			return { loading: false, error: action.payload };
		case VoiceActor_UPDATE_RESET:
			return { voiceActor: {} };
		default:
			return state;
	}
};