import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends Component {
	static propTypes = {
		todo: PropTypes.object.isRequired,
		markAsDone: PropTypes.func.isRequired,
		markAsTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired
	}


	render () {
		const { className, todo, markAsTodo, markAsDone, deleteTodo, children, ...props } = this.props;
		
		return (
			<li 
				
				className={className ? `js-todo todo-list__item ${className}` : 'js-todo todo-list__item'} 
				data-id={todo.id} 
				data-done={todo.done} 
				{...props}
			>
				<p className="todo-list__item__text">{todo.text}</p>			
				<button 
					className="js-todo-done-button todo-list__item__button" 
					onClick={markAsDone}
					style={{display: todo.done ? 'none' : 'inline-block' }}
				>
					Done
				</button>
				<button 
					className="js-todo-todo-button todo-list__item__button--todo" 
					onClick={markAsTodo}
					style={{display: todo.done ? 'inline-block' : 'none'}}
				>	
					Todo
				</button>
				<button 
					className="js-todo-delete-button todo-list__item__button--delete" 
					onClick={deleteTodo}
				>
					Delete
				</button>										
			</li>
		);
	}	
}

export default TodoListItem;