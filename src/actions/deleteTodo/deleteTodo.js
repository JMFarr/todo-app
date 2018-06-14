import { DELETE_TODO } from '../../constants/actionTypes';

export default function deleteTodo(id = '') {
	return { type: DELETE_TODO, id };
}


