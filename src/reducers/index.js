import { combineReducers } from 'redux';
import todos from './todos/todosReducer';
import viewMode from './viewMode/viewModeReducer';

const rootReducer = combineReducers({ todos, viewMode });

export default rootReducer;
