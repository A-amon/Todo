import types from './types'

const initialState = {
	todo: [],
	theme: 'dark'
}

const reducer = (state, action) => {
	switch (action.type) {
		case types.SWITCH_THEME:
			return { ...state, theme: action.theme }
		case types.INIT_TODO:
		case types.ADD_TODO:
		case types.UPDATE_TODO:
		case types.DELETE_TODO:
		case types.CLEAR_COMPLETED:
			return { ...state, todo: action.todo }
		default:
			return state
	}
}

export { reducer, initialState }