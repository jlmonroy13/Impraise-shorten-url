// Set up your root reducer here...
import { combineReducers } from 'redux';
import links from './links';

const rootReducer = combineReducers({
  links,
});

export default rootReducer;
