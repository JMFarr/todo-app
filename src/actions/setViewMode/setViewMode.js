import { SET_VIEW_MODE } from '../../constants/actionTypes';

const modes = {
	all: true,
	todo: true,
	done: true
}

export default function setViewMode (mode = 'todo') {
	if(modes[mode] !== true) mode = 'todo';
	return { type: SET_VIEW_MODE, mode };
}