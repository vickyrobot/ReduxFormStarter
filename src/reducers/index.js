import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: PostReducer,
  from: formReducer
});

export default rootReducer;
