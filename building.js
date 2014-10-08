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
				'stroke-linejoin': 'round'
			}},
			['path', {
				d: "M7,89 L15,82 L15,39 L21,39 L21,81 L31,81 L31,39 " +
				   "L37,39 L37,81 L47,81 L47,39 L53,39 L53,81 L63,81 L63,39 " +
				   "L69,39 L69,81 L79,81 L79,39 L85,39 L85,82 L93,89 L7,89 Z " +
				   "M7,33 L93,33 L50,11 L7,33 Z",
				fill: conf.outline ? false : conf.color,
				'stroke-width': 2}
			]
		]
	]
}
