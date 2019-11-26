import {
	combineReducers
} from 'redux';
import app from './app';

const createReducer = (asyncReducers) =>
	combineReducers({
		...asyncReducers,
		app
	});

export default createReducer;