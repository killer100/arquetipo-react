import * as ACTIONS from '../../actions';

const initialState = {
	open: false,
	width: 240
};

const leftSideBar = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.OPEN_SIDEBAR:
			return {
				...state, open: true
			};

		case ACTIONS.HIDE_SIDEBAR:
			return {
				...state, open: false
			};
		default:
			return state;
	}
}

export default leftSideBar;