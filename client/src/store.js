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

// Reducers
const reducer = combineReducers({
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userList: userListReducer,
	userDetails: userDetailsReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateReducer,
	animeList: animeListReducer,
	animeDetail: animeDetailsReducer,
	animeCreate: animeCreateReducer,
	animeUpdate: animeUpdateReducer,
	animeDelete: animeDeleteReducer,
	voiceActorList: voiceActorListReducer,
	voiceActorDetail: voiceActorDetailsReducer,
	voiceActorCreate: voiceActorCreateReducer,
	voiceActorUpdate: voiceActorUpdateReducer,
	voiceActorDelete: voiceActorDeleteReducer,
	topAnimeList: topAnimeListReducer,
	topAnimeDetail: topAnimeDetailsReducer,
	topAnimeCreate: topAnimeCreateReducer,
	topAnimeUpdate: topAnimeUpdateReducer,
	topAnimeDelete: topAnimeDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
