import { SET_VIEW_MODE } from '../../constants/actionTypes';

export default function viewModeReducer ( state = 'todo', action ) {
	switch(action.type) {
		case SET_VIEW_MODE: 
			return action.mode;
		default: 
			return state;
	}
}