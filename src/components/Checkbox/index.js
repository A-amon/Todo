import PropTypes from 'prop-types'

const Checkbox = (props) => {
	const { name, id, checked, onChange, ariaHidden, filteredProps } = props

	return (
		<div className="checkbox" aria-hidden={ariaHidden}>
			<input className="checkbox__input"
				type="checkbox"
				name={name}
				id={id}
				checked={checked}
				onChange={onChange}
				{...filteredProps}
			/>
			<span className="checkbox__image"></span>
		</div>
	)
}

Checkbox.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	onChange: PropTypes.func
}

export default Checkbox