import PropTypes from 'prop-types'

const ThemeSwitch = ({ onChange }) => {
	return (
		<fieldset className="theme-switch">
			<label className="theme-switch__label theme-switch__label--light">
				<p className="sr-only">
					Light mode
				</p>
				<input className="theme-switch__input"
					type="radio"
					name="theme"
					id="theme-light"
					onChange={onChange} />
			</label>
			<label className="theme-switch__label theme-switch__label--dark">
				<p className="sr-only">
					Dark mode
				</p>
				<input className="theme-switch__input"
					type="radio"
					name="theme"
					id="theme-dark"
					onChange={onChange} />
			</label>
		</fieldset>
	)
}

ThemeSwitch.propTypes = {
	onChange: PropTypes.func
}

export default ThemeSwitch