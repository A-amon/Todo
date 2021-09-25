import PropTypes from 'prop-types'
import { useState } from 'react'
import Card from '@components/Card'
import Checkbox from '@components/Checkbox'
import { isTextEmpty } from '@services/form'

const CreateInput = ({ onSubmit }) => {
	const [error, setError] = useState('')
	const [task, setTask] = useState('')

	/**
	 * Validate submitted input value
	 * Call onSubmit if valid
	 * @param {object} event 
	 */
	const validateSubmit = (event) => {
		setError('')
		if (!isTextEmpty(task)) {
			onSubmit(event, task)
			resetFields()
		}
		else {
			event.preventDefault()
			setError('Your task is empty!')
		}
	}

	/**
	 * Reset checkbox and input field value
	 */
	const resetFields = () => {
		setTask('')
	}

	return (
		<Card as="form" className="create-input" onSubmit={validateSubmit}>
			<Checkbox
				name="create-completed"
				id="create-checkbox"
				ariaHidden="true" />
			<input className="create-input__input"
				type="text"
				placeholder="Create new input"
				value={task}
				aria-label="Create new input"
				aria-describedby="create-input__response"
				onChange={event => setTask(event.target.value)}
				onBlur={() => setError('')} />
			<strong id="create-input__response"
				className={`create-input__response ${error.length > 0 && "show"}`}>
				{error}
			</strong>
		</Card>
	)
}

CreateInput.propTypes = {
	onSubmit: PropTypes.func
}

export default CreateInput