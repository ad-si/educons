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
				'stroke-width': '2'
			}},
			['g.minus', {transform: "translate(66, 34)"},
				['circle', {r: 13}],
				['path', {d: "M-6,0 h12"}]
			],
			['g.plus', {transform: "translate(34, 34)"},
				['circle', {r: 13}],
				['path', {
					d: "M-6,0 h12 " +
					   "M0,-6 v12"}
				]
			],
			['g.percentage', {transform: "translate(34, 66)"},
				['circle', {
					r: 13}
				],
				['path', {d: "M-5,5 l10,-10"}],
				['circle', {
					cx: -4.5,
					cy: -4.5,
					r: 1.5,
					style: {
						fill: conf.color,
						stroke: 'none'}}
				],
				['circle', {
					cx: 4.5,
					cy: 4.5,
					r: 1.5,
					style: {
						fill: conf.color,
						stroke: 'none'}}
				]
			],
			['g.multiplication', {transform: "translate(66, 66)"},
				['circle', {
					r: 13}
				],
				['path', {d: "M-5,5 l10,-10 z" +
				             "M-5,-5 l10,10 z"}
				]
			]
		]
	]
}
