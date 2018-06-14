import { TOGGLE_TODO } from '../../constants/actionTypes';
import toggleTodo from './toggleTodo';

describe('ACTION::toggleTodo()', () => {
	it('should create a toggleTodo action', () => {
		const id = '12345';
		const expectedAction = {
			type: TOGGLE_TODO,
			id,
		};

		expect(toggleTodo(id)).toEqual(expectedAction);
	});
});