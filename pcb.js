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
		['g',
			['g#left-bottom', {
				transform: "translate(4,48)"},
				['circle', {
					transform: "translate(26.5,3.5) " +
					           "scale(-1,-1) " +
					           "translate(-26.5,-3.5)",
					cx: 26.5,
					cy: 3.5,
					r: conf.outline ? 3 : 3.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 2 : 0}
				],
				['circle', {
					cx: 4.5,
					cy: 43.5,
					r: conf.outline ? 4 : 4.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 3 : 0}
				],
				['path', {
					fill: 'transparent',
					stroke: 'black',
					'stroke-width': 2,
					d: "M23,4 L8,4 C6,4 4,6 4,8 L4,40"}
				]
			],

			['g#left-top', {
				transform: "translate(6,35)"},
				['circle', {
					transform: "translate(24.5,4.5) " +
					           "scale(-1,-1) " +
					           "translate(-24.5,-4.5)",
					cx: 24.5,
					cy: 4.5,
					r: conf.outline ? 3 : 3.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 2 : 0}],
				['circle', {
					cx: 4.5,
					cy: 4.5,
					r: 4.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 3 : 0}],
				['path', {
					fill: 'transparent',
					stroke: 'black',
					'stroke-width': 2,
					d: "M21,5 L8,5"}]
			],

			['g#bottom-left', {
				transform: "translate(20,62)"},
				['circle', {
					cx: 24.5,
					cy: 3.5,
					r: conf.outline ? 3 : 3.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 2 : 0}],
				['circle', {
					cx: 4.5,
					cy: 21.5,
					r: conf.outline ? 4 : 4.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 3 : 0}],
				['path', {
					fill: 'transparent',
					stroke: 'black',
					'stroke-width': 2,
					d: "M21,4 L6,4 C5,4 4,5 4,6 L4,18"}
				]
			],

			['g#bottom-right', {
				transform: "translate(53,62)"},
				['circle', {
					cx: 3.5,
					cy: 3.5,
					r: conf.outline ? 3 : 3.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 2 : 0}
				],
				['circle', {
					cx: 19.5,
					cy: 21.5,
					r: conf.outline ? 4 : 4.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 3 : 0}
				],
				['path', {
					fill: 'transparent',
					stroke: 'black',
					'stroke-width': 2,
					d: "M7,4.04492188 L17,4 C18,4 19,5 19,6 L19,18"}
				]
			],

			['g#right-bottom', {
				transform: 'translate(67,48)'},
				['circle', {
					transform: "translate(3.5,3.5) " +
					           "scale(-1,-1) " +
					           "translate(-3.5,-3.5)",
					cx: 3.5,
					cy: 3.5,
					r: conf.outline ? 3 : 3.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 2 : 0}
				],
				['circle', {
					'stroke-width': 3,
					cx: 26.5,
					cy: 10.5,
					r: conf.outline ? 4 : 4.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 3 : 0}
				],
				['path', {
					fill: 'transparent',
					stroke: 'black',
					'stroke-width': 2,
					d: "M7.02319336,4 L16,4 C19,4 21,6 23,8"}
				]
			],

			['g#right-top',
				{transform: "translate(67,35)"},
				['circle', {
					transform: "translate(3.5, 4.5) " +
					           "scale(-1, -1) " +
					           "translate(-3.5, -4.5)",
					cx: 3.5,
					cy: 4.5,
					r: conf.outline ? 3 : 3.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 2 : 0}],
				['circle', {
					cx: 19.5,
					cy: 4.5,
					r: conf.outline ? 4 : 4.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 3 : 0}
				],
				['path', {
					fill: 'transparent',
					stroke: 'black',
					'stroke-width': 2,
					d: "M7,5 L14,5"}
				]
			],

			['g#top-right',
				{transform: "translate(52,3)"},
				['circle', {
					cx: 4.5,
					cy: 22.5,
					r: conf.outline ? 3 : 3.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 2 : 0}],
				['circle', {
					cx: 4.5,
					cy: 4.5,
					r: conf.outline ? 4 : 4.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 3 : 0}],
				['path', {
					fill: 'transparent',
					stroke: 'black',
					'stroke-width': 2,
					d: "M4,19 L4,9"}
				]
			],
			['g#top-left', {
				transform: "translate(24,3)"},
				['circle', {
					cx: 20.5,
					cy: 22.5,
					r: conf.outline ? 3 : 3.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 2 : 0}],
				['circle', {
					cx: 4.5,
					cy: 4.5,
					r: conf.outline ? 4 : 4.5,
					fill: conf.outline ? 'transparent' : 'black',
					stroke: 'black',
					'stroke-width': conf.outline ? 3 : 0}],
				['path', {
					fill: 'transparent',
					stroke: 'black',
					'stroke-width': 2,
					d: "M8,5 L18,5 C19,5 20,6 20,7 L20,19"}
				]
			],
			['rect', {
				x: conf.outline ? 36 : 34,
				y: conf.outline ? 31 : 29,
				width: conf.outline ? 28 : 30,
				height: conf.outline ? 28 : 30,
				rx: 10,
				ry: 10,
				fill: conf.outline ? 'transparent' : conf.color,
				stroke: 'black',
				'stroke-width': conf.outline ? 2 : 0
			}]
		]
	]
}
