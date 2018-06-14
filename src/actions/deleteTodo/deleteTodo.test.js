import { DELETE_TODO } from '../../constants/actionTypes';
import deleteTodo from './deleteTodo';

describe('ACTION::deleteTodo()', () => {
	it('should create a deleteTodo action', () => {
		const id = '12345';
		const expectedAction = {
			type: DELETE_TODO,
			id,
		};

		expect(deleteTodo(id)).toEqual(expectedAction);
	});
});