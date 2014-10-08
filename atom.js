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
			['circle', {
				cx: 17,
				cy: 42,
				r: 4,
				style: {
					fill: conf.color,
					stroke: 'none'}
			}],
			['circle', {
				cx: 50,
				cy: 50,
				r: 5,
				style: {
					fill: conf.color,
					stroke: 'none'}
			}],
			['circle', {
				cx: 83,
				cy: 58,
				r: 4,
				style: {
					fill: conf.color,
					stroke: 'none'}
			}],
			['ellipse', {
				cx: 50,
				cy: 50,
				rx: 15,
				ry: 41
			}],
			['ellipse', {
				transform: 'translate(50,50) rotate(60)',
				rx: 15,
				ry: 41
			}],
			['ellipse', {
				transform: 'translate(50,50) rotate(120)',
				rx: 15,
				ry: 41
			}]
		]
	]
}



