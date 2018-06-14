import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem/TodoListItem';
import toggleTodo from '../../actions/toggleTodo/toggleTodo';
import deleteTodo from '../../actions/deleteTodo/deleteTodo';

export class TodoList extends Component {
	static propTypes = {
	todos: PropTypes.array,
	viewMode: PropTypes.string
}	

	createTodoFilter () {
		switch(this.props.viewMode) {
			case 'all':
				return { done: null };
			case 'done':
				return { done: false };
			default:
				return { done: true };
		}
	}

	renderTodoItems () {
		const { todos } = this.props;
		if(todos.length < 1) {
			return (
				<div 
				className="js-todo-placeholder todo-list__placeholder"
				>
					Looks like there are no todos. Use the box below to add some!
				</div>
			);
		}
		const todoItems = [];
		const todoFilter = this.createTodoFilter();
		todos.forEach(todo => {
			if(todo.done === todoFilter.done) return;
			todoItems.push(
				<TodoListItem 
				key={todo.id} 
				todo={todo} 
				markAsDone={() => {
					if(!todo.done) this.props.toggleTodo(todo.id);
				}}
				markAsTodo={() => {
					if(todo.done) this.props.toggleTodo(todo.id);
				}}
				deleteTodo={() => this.props.deleteTodo(todo.id)}
				/>
			);
			
		});

		return todoItems;
	}
	render () {
		return (
			<ul className="todo-list">
				{this.renderTodoItems()}
			</ul>
		);
	}
}



const mapStateToProps = ({todos, viewMode}) => ({todos, viewMode});

const mapDispatchToProps = { toggleTodo, deleteTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);