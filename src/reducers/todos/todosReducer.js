import * as actionTypes from '../../constants/actionTypes';

export default function todosReducer (state = [], action) {
	switch(action.type) {
		case actionTypes.ADD_TODO:
			return [ ...state, action.todo ]
			
		case actionTypes.DELETE_TODO: {			
			return state.filter(todo => todo.id !== action.id);
		}
			
		case actionTypes.TOGGLE_TODO: {
			const newState = [...state];
			newState.forEach(todo => {
				if (todo.id === action.id) todo.done = !todo.done;
			});
			return newState;
		}
		
		default:
			return state;
	}
}