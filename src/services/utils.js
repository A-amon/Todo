/**
 * Get numbers < 10 in double digits
 * @param {number} value 
 * @returns {string}
 */
const getDoubleDigit = (value) => {
	const isLesserThanTen = value < 10
	return `${isLesserThanTen ? '0' : ''}${value}`
}

/**
 * Get current datetime in {DDMMYYYY}T{HHMMSS} format
 * @returns {string}
 */
const getCurrentDatetime = () => {
	const date = new Date()
	const day = getDoubleDigit(date.getDate())
	const month = getDoubleDigit(date.getMonth() + 1)
	const year = getDoubleDigit(date.getFullYear())
	const hour = getDoubleDigit(date.getHours())
	const minute = getDoubleDigit(date.getMinutes())
	const second = getDoubleDigit(date.getSeconds())

	const datetime = `${day}${month}${year}T${hour}${minute}${second}`
	return datetime
}

export {
	getDoubleDigit,
	getCurrentDatetime
}