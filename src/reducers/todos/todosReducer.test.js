import * as actionTypes from '../../constants/actionTypes';
import todosReducer from './todosReducer';

describe('REDUCER::todos()', () => {
	it('should return a default state', () => {
		expect(todosReducer(undefined, {})).toEqual([]);
	});

	it('should add a todo', () => {
		const beforeState = [];
		const action = { 
			type: actionTypes.ADD_TODO,
			todo: {
				id: '1234',
				text: 'test',
				done: false
			}
		};
		const afterState = [
			action.todo
		];
		

		expect(todosReducer(beforeState, action)).toEqual(afterState);
	});

	it('should delete the correct todo', () => {
		const beforeState = [
			{ id: '1', text: 'todo 1', done: false },
			{ id: '2', text: 'todo 2', done: true }				
		];		
		const action = {
			type: actionTypes.DELETE_TODO,
			id: '2'
		};
		const afterState = [
			{ id: '1', text: 'todo 1', done: false }		
		];
		

		expect(todosReducer(beforeState, action)).toEqual(afterState);
	});

	it('should mark the correct todo as done', () => {
		const beforeState = [
			{ id: '1', text: 'todo 1', done: false },
			{ id: '2', text: 'todo 2', done: true }				
		];
		
		const action = {
			type: actionTypes.TOGGLE_TODO,
			id: '1'
		};
		const afterState = [
			{ id: '1', text: 'todo 1', done: true },
			{ id: '2', text: 'todo 2', done: true }				
		];
		

		expect(todosReducer(beforeState, action)).toEqual(afterState);
	});

	it('should mark the correct todo as todo', () => {
		const beforeState = [
			{ id: '1', text: 'todo 1', done: false },
			{ id: '2', text: 'todo 2', done: true }				
		];
		
		const action = {
			type: actionTypes.TOGGLE_TODO,
			id: '2'
		};
		const afterState = [
			{ id: '1', text: 'todo 1', done: false },
			{ id: '2', text: 'todo 2', done: false }				
		];
		

		expect(todosReducer(beforeState, action)).toEqual(afterState);
	});

});