import React, { Component } from 'react';
import { connect } from 'react-redux';
import addTodo from '../../actions/addTodo/addTodo';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
	static defaultProps = {
		addTodo: f => f,
	}

	constructor(props) {
		super(props);

		this.state = { inputValue: '' };
	}
	
	render() {
		return (
			<form className="add-todo-form">
				<input 
					className="js-todo-textbox add-todo-form__input" 
					type="text" placeholder="Enter a todo here..." 
					value={this.state.inputValue}
					onChange={(e) => {
						this.setState({ inputValue: e.target.value})
					}}
				/>
				<button 
					className="js-todo-submit add-todo-form__button"
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						this.props.addTodo(this.state.inputValue);						
						this.setState({ inputValue: '' });
					}}
				>
					Add
				</button>
			</form>
		);
	}
}

AddTodo.propTypes = {
	addTodo: PropTypes.func
}

const mapDispatchToProps = { addTodo };

export default connect(undefined, mapDispatchToProps)(AddTodo);