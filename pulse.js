var svgKit = require('../../svgKit.js')

module.exports = function (conf) {

	var width = 100,
	    height = 100,
	    defaults = {
		    outline: true,
		    color: 'black'
	    },
	    pulse = "M6,51 L34,51 L40,32 L40,80 L54,20 L54,62 L62,51 L94,51"


	conf = svgKit.applyDefaults(conf, defaults)

	return ['svg', {
		width: width,
		height: height,
		viewBox: [0, 0, width, height].join()},

		['g', {
			style: {
				fill: conf.outline ? 'transparent' : conf.color,
				stroke: conf.color,
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
				'stroke-width': 2
			}},
			['path', {
				d: pulse + (conf.outline ? '' : "z")}
			]
		]
	]
}
