import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import setupStore from '../setupStore';
import App from './App';

describe('APP INTEGRATION', () => {
	let store;

	beforeEach(() => {
		store = setupStore();
	});

	it('should have a placeholder when there are no todos', () => {
		const wrapper = mount(<Provider store={store}><App /></Provider>);

		expect(wrapper.find('.js-todo').exists()).toBe(false);		
		expect(wrapper.find('.js-todo-placeholder').exists()).toBe(true);
	});

	it('should add a todo when one is entered', () => {
		const wrapper = mount(<Provider store={store}><App /></Provider>);

		wrapper.find('input.js-todo-textbox').simulate('change', {target: {value: 'My test value'}});
		wrapper.find('.js-todo-submit').simulate('click');
		expect(wrapper.find('.js-todo-placeholder').exists()).toBe(false);
		expect(wrapper.find('.js-todo').exists()).toBe(true);		
	});

	it('should mark todos as done', () => {

		const initialState = {
			todos: [
				{id: '0', text: 'test todo', done: false },
				{id: '1', text: 'test todo', done: false }				
			],
			viewMode: 'all'
		}

		store = setupStore(initialState);

		const wrapper = mount(<Provider store={store}><App /></Provider>);
		expect(wrapper.find('[data-done=true]').length).toEqual(0);		
		wrapper.find('.js-todo-done-button').at(0).simulate('click');
		expect(wrapper.find('[data-done=true]').length).toEqual(1);
		wrapper.find('.js-todo-done-button').at(1).simulate('click');
		expect(wrapper.find('[data-done=true]').length).toEqual(2);

	});

	it('should mark todos as todo', () => {

		const initialState = {
			todos: [
				{id: '0', text: 'test todo', done: true },
				{id: '1', text: 'test todo', done: true }				
			],
			viewMode: 'all'
		}

		store = setupStore(initialState);

		const wrapper = mount(<Provider store={store}><App /></Provider>);

		expect(wrapper.find('[data-done=false]').length).toEqual(0);		
		wrapper.find('.js-todo-todo-button').at(0).simulate('click');
		expect(wrapper.find('[data-done=false]').length).toEqual(1);
		wrapper.find('.js-todo-todo-button').at(1).simulate('click');
		expect(wrapper.find('[data-done=false]').length).toEqual(2);

	});

	it('should delete todos', () => {

		const initialState = {
			todos: [
				{id: '0', text: 'test todo', done: false }			
			],
			viewMode: 'all'
		}

		store = setupStore(initialState);

		const wrapper = mount(<Provider store={store}><App /></Provider>);

		expect(wrapper.find('[data-id="0"]').exists()).toBe(true);		
		wrapper.find('.js-todo-delete-button').at(0).simulate('click');
		expect(wrapper.find('[data-id="0"]').exists()).toBe(false);

	});

	it('should switch between view modes', () => {
		const initialState = {
			todos: [
				{id: '0', text: 'test todo', done: true },
				{id: '1', text: 'test todo', done: false },				
				{id: '2', text: 'test todo', done: false },				
				{id: '3', text: 'test todo', done: true },
				{id: '4', text: 'test todo', done: false }
			],
			viewMode: 'todo'
		}

		store = setupStore(initialState);

		const wrapper = mount(<Provider store={store}><App /></Provider>);

		expect(wrapper.find('.js-todo').length).toEqual(3);
		wrapper.find('.js-view-mode-button-all').simulate('click');
		expect(wrapper.find('.js-todo').length).toEqual(5);
		wrapper.find('.js-view-mode-button-done').simulate('click');
		expect(wrapper.find('.js-todo').length).toEqual(2);
		wrapper.find('.js-view-mode-button-todo').simulate('click');
		expect(wrapper.find('.js-todo').length).toEqual(3);		
	});
});