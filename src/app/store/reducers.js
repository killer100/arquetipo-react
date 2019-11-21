import {
	combineReducers
} from 'redux';

const createReducer = (asyncReducers) =>
	combineReducers({
		...asyncReducers,
		red: (state = {}, action) => {
			switch (action.type) {
				case '':
					return state;
				default:
					return state;
			}
		}
	});

export default createReducer;