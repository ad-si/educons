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
				fill:  'transparent',
				stroke: conf.color,
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
				'stroke-width': 2
			}},
			['path.edges', {
				d: "M47,62 L47,75 L43,71 L47,75 L51,71 " +
				   "M72,52 L81,52 L81,14 L73,14 L77,10 L73,14 L77,18 " +
				   "M47,25 L47,38 L43,34 L47,38 L51,34"
			}],
			['path.actions', {
				d: "M29,79 C24.5,79 21,82.5 21,87 " +
				   "L21,87 C21,91.5 24.5,95 29,95 " +
				   "L65,95 C69.5,95 73,91.5 73,87 " +
				   "L73,87 C73,82.5 69.5,79 65,79 L29,79 Z " +
				   "M47,42 L21,52 L47,62 L73,52 L47,42 Z " +
				   "M25,5 L25,24 L69,24 L69,5 L25,5 Z",
				style: {
					fill: conf.outline ? false : conf.color}}
			]
		]
	]
}
