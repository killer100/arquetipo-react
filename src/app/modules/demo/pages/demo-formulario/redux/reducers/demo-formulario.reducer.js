import {
	formularioActions
} from "../actions/demo-formulario.action";

const initialState = {
	title: 'Hola Mundo!'
};

const demoFormularioReducer = (state = initialState, action) => {
	switch (action.type) {
		case formularioActions.SET_TITLE:
			return {
				...state, title: action.payload.title
			};
		default:
			return state;
	}
}

export default demoFormularioReducer;