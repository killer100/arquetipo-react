import {
	combineReducers
} from 'redux';
import leftSideBar from './left-side-bar.reducer';

const appReducers = combineReducers({
	leftSideBar
});

export default appReducers;