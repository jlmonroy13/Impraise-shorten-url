import { ADD_LINK } from '../utils/constants';

export default function linksReducer(state = {}, action) {
	switch (action.type) {
		case ADD_LINK:
			return {
				...state,
        ...action.payload,
			};
		default:
			return state;
	}
}
