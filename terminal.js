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
			['rect', {
				width: 90,
				height: 70,
				x: 5,
				y: 15,
				rx: 5,
				ry: 5
			}],
			['path', {
				d: "M5,30 h90"}
			],
			['path', {
				d: "M60,50 L80,58 L60,66 " +
				   "M40,50 L20,58 L40,66 " +
				   "M44,74 L56,42"}
			],
			['g', {
				style: {
					stroke: 'none',
					fill: 'black'}},
				['circle', {
					cx: 68,
					cy: 22,
					r: 3
				}],
				['circle', {
					cx: 78,
					cy: 22,
					r: 3
				}],
				['circle', {
					cx: 88,
					cy: 22,
					r: 3
				}]
			]

		]
	]
}



