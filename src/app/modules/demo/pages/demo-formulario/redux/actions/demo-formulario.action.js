const SET_TITLE = '[DEMO FORMULARIO] SET_TITLE';

export const formularioActions = {
	SET_TITLE
};

export const formularioActionsCreators = {
	SET_TITLE: (title) => ({
		type: SET_TITLE,
		payload: {
			title
		}
	})
};