import { TOGGLE_TODO } from '../../constants/actionTypes';

export default function toggleTodo (id) {
	return { type: TOGGLE_TODO, id };
}