import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
import AddTodo from './AddTodo/AddTodo';
import ViewModeSelector from './ViewModeSelector/ViewModeSelector';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='app-container'>
				<ViewModeSelector/>
				<TodoList />
				<AddTodo />
			</div>
		);
	}
}

export default App;