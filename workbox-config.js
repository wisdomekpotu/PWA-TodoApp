module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,html,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};