import PropTypes from 'prop-types'

const Card = (props) => {
	const { as, children, className } = props
	const CardTag = as

	return (
		<CardTag {...props} className={`card ${className || ''}`}>
			{
				children
			}
		</CardTag>
	)
}

Card.defaultProps = {
	as: 'li'
}

Card.propTypes = {
	as: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]),
	className: PropTypes.string
}

export default Card