const path = require('path')

module.exports = {
	webpack: {
		alias: {
			'@layouts': path.resolve(__dirname, 'src/layouts'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@containers': path.resolve(__dirname, 'src/containers'),
			'@services': path.resolve(__dirname, 'src/services'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@context': path.resolve(__dirname, 'src/context')
		}
	}
}