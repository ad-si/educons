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
				fill: conf.outline ? 'transparent' : conf.color,
				stroke: conf.color,
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
				'stroke-width': 2
			}},
			['circle', {
				cx: 30,
				cy: 20,
				r: 10}
			],
			['circle', {
				cx: 30,
				cy: 80,
				r: 10}
			],
			['circle', {
				cx: 60,
				cy: 50,
				r: 20}
			],
			['path', {
				transform: 'translate(60,50) rotate(45)',
				d: 'M-20,0 h-12' +
				   'M0,20 v12'
			}]
		]
	]
}
