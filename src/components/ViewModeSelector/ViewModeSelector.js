import React, { Component } from 'react';
import { connect } from 'react-redux';
import setViewMode from '../../actions/setViewMode/setViewMode';
import PropTypes from 'prop-types';

export class ViewModeSelector extends Component {
	static propTypes = {
		setViewMode: PropTypes.func.isRequired
	};	

	render () {

		const {viewMode} = this.props;
		return (
			<ul className="view-mode-selector">
				<li>
					<button
						className={ 
							viewMode === 'todo' 
							? "js-view-mode-button-todo view-mode-selector__button--active"
							: "js-view-mode-button-todo view-mode-selector__button"
						}
						onClick={() => this.props.setViewMode('todo')}						
					>
						Todo
					</button>
				</li>
				<li>
					<button
						className={ 
							viewMode === 'done' 
							? "js-view-mode-button-done view-mode-selector__button--active"
							: "js-view-mode-button-done view-mode-selector__button"
						}
						onClick={() => this.props.setViewMode('done')}
					>
						Done
					</button>
				</li>
				<li>
					<button 
						className={ 
							viewMode === 'all' 
							? "js-view-mode-button-all view-mode-selector__button--active"
							: "js-view-mode-button-all view-mode-selector__button"
						}
						onClick={() => this.props.setViewMode('all')}
					>
						All
					</button>
				</li>
			</ul>
		);
	}
}

const mapStateToProps = ({viewMode}) => ({viewMode});

const mapDispatchToProps = { setViewMode };

export default connect(mapStateToProps, mapDispatchToProps)(ViewModeSelector);

