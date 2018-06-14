import { SET_VIEW_MODE } from '../../constants/actionTypes';
import setViewMode from './setViewMode';

describe('ACTION::setViewMode()', () => {
	
	it('should default to "todo"', () => {
		const expectedAction = { type: SET_VIEW_MODE, mode: 'todo'}
		expect(setViewMode()).toEqual(expectedAction);
	});

	it('should create an action with the correct mode', () => {		
	 	const expectedAction = { type: SET_VIEW_MODE, mode: 'done'}
		expect(setViewMode('done')).toEqual(expectedAction);
	});

	it('should change mode to "todo" when invalid mode entered', () => {
		const expectedAction = { type: SET_VIEW_MODE, mode: 'todo'}
		expect(setViewMode('not a valid mode')).toEqual(expectedAction);
	});
});