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
			},
			transform: "translate(45, 60) " +
			           "rotate(45) " +
			           "translate(-45, -60)"},
			['path', {
				d: "M59,42 L59,64 C59,69 57,78 45,78 C33,78 31,69 31,64 L31,42 " +
				   "L15,42 L15,64 C15,83 27,94 45,94 C63,94 75,83 75,64 L75,42 " +
				   "L59,42 L59,42 Z " +
				   "M31,42 L31,26 L15,26 L15,42 L31,42 L31,42 Z " +
				   "M59,42 L75,42 L75,26 L59.00001,26.0004693 L59,42 L59,42 Z"}
			],
			['path', {
				d: "M32,10 l5,8 l5,-8 l5,8 l5,-8 l5,8"}
			]

		]
	]
}
