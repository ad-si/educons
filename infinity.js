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
				fill: conf.outline ? 'transparent' : 'black',
				stroke: 'black',
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
				'stroke-width': '2'
			}},
			['path', {
				d: "M4,50 C4,40 12,30 24,30 C35,30 42,40 50,50 " +
				   "C58,60 65,70 76,70 C88,70 96,60 96,50 C96,40 88,30 76,30 " +
				   "C65,30 58,40 50,50 C42,60 35,70 24,70 C12,70 4,59 4,50 L4,50 Z"}
			]
		]
	]
}



