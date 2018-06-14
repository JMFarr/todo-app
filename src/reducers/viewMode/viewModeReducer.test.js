import { SET_VIEW_MODE } from '../../constants/actionTypes';
import viewModeReducer from './viewModeReducer';

describe('REDUCER::viewModeReducer()', () => {
	it('should set default state to todo', () => {
		expect(viewModeReducer(undefined, {})).toEqual('todo');
	});

	it('should set the state to the given mode', () => {
		let beforeState = 'all';
		let action = { type: SET_VIEW_MODE, mode: 'todo' };
		let afterState = 'todo';

		expect(viewModeReducer(beforeState, action)).toEqual(afterState);
	});
});