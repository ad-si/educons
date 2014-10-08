var svgKit = require('../../svgKit.js')

module.exports = function (conf) {

	var width = 100,
	    height = 100,
	    defaults = {
		    outline: true,
		    color: 'black'
	    }


	conf = svgKit.applyDefaults(conf, defaults)

	return ['svg', {
		width: width,
		height: height,
		viewBox: [0, 0, width, height].join()},

		['g', {
			style: {
				fill: 'transparent',
				stroke: conf.color,
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
				'stroke-width': 2
			}},
			['path', {
				d: "M8,44 L8,60 L32,72 L88,44 L88,28 L64,16 L8,44 Z " +
				   "M8,44 L32,56 L88,28 " +
				   "M32,56 L32,72",
				style: {
					fill: conf.outline ? 'transparent' : conf.color}}
			],
			['path.legs', {
				d: "M80,40 L84,42 L84,56 " +
				   "M72,44 L76,46 L76,60 " +
				   "M64,48 L68,50 L68,64 " +
				   "M56,52 L60,54 L60,68 " +
				   "M48,56 L52,58 L52,72 " +
				   "M40,60 L44,62 L44,76 " +
				   "M16,70 L16,64"}
			]

		]
	]
}
