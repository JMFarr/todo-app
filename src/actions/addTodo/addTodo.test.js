import addTodo from './addTodo';
import { ADD_TODO, ADD_TODO_ERROR } from '../../constants/actionTypes';

describe('ACTION::addTodo()', () => {
	it('should create an action to add a Todo', () => {
		const text = 'the todo should have this text'
		const expectedAction = {
			type: ADD_TODO,
			todo: {
				id: 'dontCare',
				done: false,
				text
			}			
		};
		
		let action = addTodo(text)

		expect(action.todo.id).toBeDefined()

		action.todo.id = 'dontCare';

		expect(action).toEqual(expectedAction);
	});

	it('should give an error message if given an empty string', () => {
		const text = '';
		const expectedAction = {
			type: ADD_TODO_ERROR,

		};
	});
});