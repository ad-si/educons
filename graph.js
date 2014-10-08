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
			['circle', {
				cx: 66,
				cy: 44,
				r: conf.outline ? 3 : 4
			}],
			['path', {
				d: conf.outline ?
				   "M70,38 L74,32 " +
				   "M13,83 L34,62 L38,68 L46,50 L54,63 L62,50 "
					:
					//"M70,38 l 4,-6 " +
				   "M16,80 L34,62 L38,68 L46,50 L54,63 L64,48 a1,1 0 0 0 4,-8 L74,32 v48 z",
				style: {
					fill: conf.outline ? false : 'black'}}
			],
			// Coordinate system
			['path', {d: "M13,17 v66 h74"}]
		]
	]
}
