const defaultState = {
	showMenu: false,
};

export default function linksReducer(state = defaultState, action) {
	switch (action.type) {
		case 'SET_SHOW_MENU':
			return {
				...state,
				showMenu: action.payload,
			};
		default:
			return state;
	}
}
