import { ADD_LINK, REMOVE_LINKS } from '../utils/constants';

export default function linksReducer(state = {}, action) {
	switch (action.type) {
		case ADD_LINK:
			return {
				...state,
        ...action.payload,
      };
      case REMOVE_LINKS:
       return {};
		default:
			return state;
	}
}
