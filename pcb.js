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
				stroke: 'black',
				'stroke-width': 2,
				fill: 'transparent'}},

			['g#left-bottom',
				['circle', {
					cx: 30,
					cy: 52,
					r: 3}
				],
				['circle', {
					cx: 8,
					cy: 92,
					r: 4,
					style: {'stroke-width': 3}}
				],
				['path', {
					d: "M27,52 h-15 a 4,4 0 0 0 -4,4 v31"}
				]
			],

			['g#left-top',
				['circle', {
					cx: 30,
					cy: 40,
					r: 3}
				],
				['circle', {
					cx: 8,
					cy: 40,
					r: 4,
					style: {'stroke-width': 3}}
				],
				['path', {
					d: "M27,40 h-15"}
				]
			],

			['g#bottom-left',
				['circle', {
					cx: 45,
					cy: 65,
					r: 3}
				],
				['circle', {
					cx: 28,
					cy: 84,
					r: 4,
					style: {'stroke-width': 3}}
				],
				['path', {
					d: "M42,65 h-10 a4,4 0 0 0 -4,4 v10"}
				]
			],

			['g#bottom-right',
				['circle', {
					cx: 57,
					cy: 65,
					r: 3}
				],
				['circle', {
					cx: 75,
					cy: 80,
					r: 4,
					style: {'stroke-width': 3}}
				],
				['path', {
					d: "M60,65 h11 a4,4 0 0 1 4,4 v8"}
				]
			],

			['g#right-bottom',
				['circle', {
					cx: 72,
					cy: 52,
					r: 3}
				],
				['circle', {
					cx: 92,
					cy: 58,
					r: 4,
					style: {'stroke-width': 3}}
				],
				['path', {
					d: "M75,52 h10 a8,8 0 0 1 4,2"}
				]
			],

			['g#right-top',
				['circle', {
					cx: 72,
					cy: 40,
					r: 3}
				],
				['circle', {
					cx: 90,
					cy: 40,
					r: 4,
					style: {'stroke-width': 3}}
				],
				['path', {
					d: "M75,40 h10"}
				]
			],

			['g#top-right',
				['circle', {
					cx: 56,
					cy: 25,
					r: 3}
				],
				['circle', {
					cx: 56,
					cy: 8,
					r: 4,
					style: {'stroke-width': 3}}
				],
				['path', {
					d: "M56,12 v10"}
				]
			],
			['g#top-left',
				['circle', {
					cx: 45,
					cy: 25,
					r: 3}
				],
				['circle', {
					cx: 30,
					cy: 8,
					r: 4,
					style: {'stroke-width': 3}}
				],
				['path', {
					d: "M35,8 h6 a4,4 0 0 1 4,4 v10"}
				]
			],
			['rect', {
				x: 36,
				y:31,
				width: 28,
				height: 28,
				rx: 8,
				ry: 8,
				fill: conf.outline ? '' : conf.color
			}]
		]
	]
}
