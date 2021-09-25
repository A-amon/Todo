import types from './types'
import { getCurrentDatetime } from '@services/utils'

/**
 * Toggle between dark and light
 * @param {string} currentTheme 
 * @param {function} dispatch 
 */
const switchTheme = (currentTheme, dispatch) => {
	dispatch({
		type: types.SWITCH_THEME,
		theme: currentTheme === 'light' ? 'dark' : 'light'
	})
}

/**
 * Add new item to todo list
 * @param {array} todo 
 * @param {function} dispatch 
 * @param {string} task 
 */
const addTodo = (todo, dispatch, task) => {
	dispatch({
		type: types.ADD_TODO,
		todo: [...todo, { task, completed: false, createdAt: getCurrentDatetime() }]
	})
}

/**
 * Update todo item completion
 * @param {array} todo 
 * @param {function} dispatch 
 * @param {object} task 
 */
const updateTodo = (todo, dispatch, task) => {
	todo.forEach(__todo => {
		if (__todo.createdAt === task.createdAt) {
			Object.assign(__todo, task)
		}
	})

	dispatch({
		type: types.UPDATE_TODO,
		todo: [...todo]
	})
}

/**
 * Remove all completed todo item
 * @param {array} todo 
 * @param {function} dispatch 
 */
const clearCompleted = (todo, dispatch) => {
	dispatch({
		type: types.CLEAR_COMPLETED,
		todo: todo.filter(__todo => !__todo.completed)
	})
}

/**
 * Delete todo item from todo list
 * By createdAt value
 * @param {array} todo 
 * @param {function} dispatch 
 * @param {string} createdAt 
 */
const deleteTodo = (todo, dispatch, createdAt) => {
	dispatch({
		type: types.DELETE_TODO,
		todo: todo.filter(__todo => __todo.createdAt !== createdAt)
	})
}

export {
	switchTheme,
	addTodo,
	updateTodo,
	clearCompleted,
	deleteTodo
}