// Set up your root reducer here...
import { combineReducers } from 'redux';
import { pendingTasksReducer as pendingTasks } from 'react-redux-spinner';
import links from './links';

const rootReducer = combineReducers({
  links,
  pendingTasks,
});

export default rootReducer;
