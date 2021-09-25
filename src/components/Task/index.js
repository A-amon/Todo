import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import Card from '@components/Card'
import Checkbox from '@components/Checkbox'

const Task = ({ completed, task, createdAt, onUpdate, onDelete, onDrag, onDrop }) => {
	const [isCompleted, setCompleted] = useState(false)
	const taskId = `task-${createdAt}`
	const taskDescId = `${taskId}__desc`
	const checkboxId = `checkbox-${createdAt}`

	/**
	 * Update isCompleted state
	 * Based on completed prop
	 */
	useEffect(() => {
		completed && setCompleted(completed)
	}, [completed])

	/**
	 * Handle checkbox update
	 * Run onUpdate callback
	 */
	const handleChange = () => {
		setCompleted(!isCompleted)
		onUpdate({ createdAt, completed: !isCompleted })
	}

	return (
		<Card className={`task ${isCompleted ? 'task--checked' : ''}`}
			id={taskId}
			draggable={true}
			onDragOver={event => event.preventDefault()}
			onDragStart={onDrag}
			onDrop={onDrop}>
			<Checkbox checked={isCompleted}
				aria-labelledby={taskDescId}
				onChange={handleChange}
				id={checkboxId}
				name="task-completion"
			/>
			<p className="task__desc" id={taskDescId}>
				{
					task
				}
			</p>
			<button className="task__delete" aria-label={`Delete ${task}`} onClick={onDelete}>
				<svg aria-hidden="true" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" /></svg>
			</button>
		</Card>
	)
}

Task.propTypes = {
	completed: PropTypes.bool.isRequired,
	task: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	onUpdate: PropTypes.func,
	onDelete: PropTypes.func
}

export default Task