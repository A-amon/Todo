import PropTypes from 'prop-types'
import { createContext, useReducer } from 'react'
import { reducer, initialState } from './reducer'

const todoContext = createContext()

const TodoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<todoContext.Provider value={{ state, dispatch }}>
			{children}
		</todoContext.Provider>
	)
}

TodoProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	])
}

export { todoContext, TodoProvider }