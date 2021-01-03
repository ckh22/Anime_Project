// Dependencies Import
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers Import
import { userLoginReducer } from './redux/reducers/userReducers';
import {
	animeListReducer,
	animeDetailsReducer,
	animeDeleteReducer,
	animeCreateReducer,
	animeUpdateReducer,
} from './redux/reducers/animeReducers';

// Reducers
const reducer = combineReducers({
	userLogin: userLoginReducer,
	animeList: animeListReducer,
	animeDetail: animeDetailsReducer,
	animeCreate: animeCreateReducer,
	animeUpdate: animeUpdateReducer,
	animeDelete: animeDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
