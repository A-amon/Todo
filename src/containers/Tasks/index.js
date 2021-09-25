import { useState, useEffect, useContext, useRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { todoContext } from '@context'
import Task from '@components/Task'
import Card from '@components/Card'
import { updateTodo, clearCompleted, deleteTodo } from '@context/actions'

const Tasks = () => {
	const [currentTab, setCurrentTab] = useState('All')
	const { state, dispatch } = useContext(todoContext)
	const [filtered, setFiltered] = useState([])

	const taskListRef = useRef(null)

	const [dragId, setDragId] = useState()

	useEffect(() => {
		const { todo } = state

		setFiltered(filterTodos(currentTab, todo))

		taskListRef.current.focus()	// Focus on tasks list
	}, [state.todo, currentTab])

	/**
	 * Filter todo items
	 * By current tab
	 * @param {string} currentTab 
	 * @param {array} todo 
	 * @returns {array}
	 */
	const filterTodos = (currentTab, todo) => {
		let filtered = [...todo]

		if (currentTab !== 'All') {
			filtered = filtered.filter(__todo =>
				currentTab === 'Completed' ? __todo.completed : !__todo.completed
			)
		}

		return filtered
	}

	/**
	 * Handle task drag event
	 * @param {object} event 
	 */
	const handleDrag = (event) => {
		setDragId(event.currentTarget.id)
	}

	/**
	 * Handle task drop event
	 * @param {object} event 
	 */
	const handleDrop = (event) => {
		const dropId = event.currentTarget.id
		const dropCreatedAt = dropId.split('-')[1]
		const dropTask = filtered.findIndex(__todo => __todo.createdAt === dropCreatedAt)

		const dragCreatedAt = dragId.split('-')[1]
		const dragTask = filtered.findIndex(__todo => __todo.createdAt === dragCreatedAt)

		setFiltered(reorderTodo(dragTask, dropTask, filtered))
	}

	/**
	 * Reorder list items
	 * @param {number} dragInd 
	 * @param {number} dropInd 
	 * @param {number} todo 
	 * @returns 
	 */
	const reorderTodo = (dragInd, dropInd, list) => {
		const reordered = [...list]

		/**
		 * Move dragged item to above drop area
		 * Remove original dragged item
		 */
		if (dropInd < dragInd) {
			reordered.splice(dropInd, 0, list[dragInd])
			reordered.splice(dragInd + 1, 1)
		}

		/**
		 * Move dragged item to below drop area
		 * Remove original dragged item
		 */
		else if (dropInd > dragInd) {
			reordered.splice(dropInd + 1, 0, list[dragInd])
			reordered.splice(dragInd, 1)
		}

		return reordered
	}

	return (
		<Card as="div" className="tasks__container">
			<ul className="tasks" aria-describedby="tasks__none" ref={taskListRef} tabIndex="-1">
				<TransitionGroup component={null}>
					{
						filtered
							.map(todo => (
								<CSSTransition key={todo.createdAt} timeout={200} classNames='task'>
									<Task onUpdate={task => updateTodo(state.todo, dispatch, task)}
										onDelete={() => deleteTodo(state.todo, dispatch, todo.createdAt)}
										onDrag={handleDrag}
										onDrop={handleDrop}
										{...todo}
									/>
								</CSSTransition>
							))
					}
				</TransitionGroup>
			</ul>
			{
				filtered.length === 0 && (
					<Card as="div" className="tasks__none" id="tasks__none">
						No tasks here
					</Card>
				)
			}
			<Card as="div" className="tasks__footer">
				<p className="tasks__left">
					{filtered.length} items left
				</p>
				<div className="tasks__tabs">
					<button className={`tasks__tab ${currentTab === 'All' ? 'tasks__tab--current' : ''}`} onClick={() => setCurrentTab('All')}>
						All
					</button>
					<button className={`tasks__tab ${currentTab === 'Active' ? 'tasks__tab--current' : ''}`} onClick={() => setCurrentTab('Active')}>
						Active
					</button>
					<button className={`tasks__tab ${currentTab === 'Completed' ? 'tasks__tab--current' : ''}`} onClick={() => setCurrentTab('Completed')}>
						Completed
					</button>
				</div>
				<button className="tasks__clear" onClick={() => clearCompleted(state.todo, dispatch)}>
					Clear completed
				</button>
			</Card>
		</Card>
	)
}

export default Tasks