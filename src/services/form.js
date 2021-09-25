/**
 * Check if text is empty
 * @param {string} value 
 * @returns {boolean}
 */
const isTextEmpty = (value) => {
	return !value || value.replace(' ', '').length === 0
}

export {
	isTextEmpty
}