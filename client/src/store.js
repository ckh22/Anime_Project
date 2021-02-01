// Dependencies Import
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers Import
import {
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userListReducer,
	userDeleteReducer,
	userUpdateReducer,
} from './redux/reducers/userReducers';

import {
	animeListReducer,
	animeDetailsReducer,
	animeDeleteReducer,
	animeCreateReducer,
	animeUpdateReducer,
} from './redux/reducers/animeReducers';

import {
	voiceActorListReducer,
	voiceActorDetailsReducer,
	voiceActorDeleteReducer,
	voiceActorCreateReducer,
	voiceActorUpdateReducer,
} from './redux/reducers/vaReducers';

import {
	topAnimeCreateReducer,
	topAnimeDeleteReducer,
	topAnimeDetailsReducer,
	topAnimeListReducer,
	topAnimeUpdateReducer,
} from './redux/reducers/topAnimeReducers';

import {
	profileListReducer,
	profileDetailsReducer,
	profileCreateReducer,
	profileUpdateReducer,
	userProfileReducer,
	profileUserLocationReducer,
} from './redux/reducers/profileReducers';

// Reducers
const reducer = combineReducers({
	// User
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userList: userListReducer,
	userDetails: userDetailsReducer,
	userUpdate: userUpdateReducer,
	userDelete: userDeleteReducer,

	// Anime
	animeCreate: animeCreateReducer,
	animeList: animeListReducer,
	animeDetail: animeDetailsReducer,
	animeUpdate: animeUpdateReducer,
	animeDelete: animeDeleteReducer,

	// Voice Actor
	voiceActorCreate: voiceActorCreateReducer,
	voiceActorList: voiceActorListReducer,
	voiceActorDetail: voiceActorDetailsReducer,
	voiceActorUpdate: voiceActorUpdateReducer,
	voiceActorDelete: voiceActorDeleteReducer,

	// Top Anime
	topAnimeCreate: topAnimeCreateReducer,
	topAnimeList: topAnimeListReducer,
	topAnimeDetail: topAnimeDetailsReducer,
	topAnimeUpdate: topAnimeUpdateReducer,
	topAnimeDelete: topAnimeDeleteReducer,

	// Profile
	profileCreate: profileCreateReducer,
	profileList: profileListReducer,
	profileDetails: profileDetailsReducer,
	profileUpdate: profileUpdateReducer,
	userProfile: userProfileReducer,
	profileUserLocation: profileUserLocationReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const userProfileInfoFromStorage = localStorage.getItem('userProfileInfo')
	? JSON.parse(localStorage.getItem('userProfileInfo'))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
	userProfile: { userProfileInfo: userProfileInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
