import { createStore } from 'redux';
import reducers from './reducers';

export default function setupStore (initialState = {}) {
	return createStore(reducers, { ...initialState });
}