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
			['g.bottle', {
				transform: "translate(53, 25)"},
				['path', {
					d: "M4,50 L30,50 L30,9 L4,9 L4,50 Z"
				}
				],
				['path.capAndLabel', {
					d: "M4,27 L19,27 L19,39 L4,39 L4,27 Z " +
					   "M0,9 L34,9 L34,0 L0,0 L0,9 Z",
					style: {fill: conf.outline ? false : conf.color}}
				]
			],
			['g.syringe', {
				transform: "translate(12, 6)"},
				['path.body', {
					d: "M8,8 L8,60 L24,60 L24,8 L8,8 Z" +
					   "M0,8 L32,8"}
				],
				['path.liquid', {
					d: "M8,36 L24,36 L24,60 L8,60 L8,36 Z",
					style: {fill: conf.outline ? false : conf.color}}
				],
				['path.handle', {
					d: "M12,0 L12,8 L20,8 L20,0 L12,0 Z" +
					   "M8,0 L24,0"}
				],
				['path.needle', {
					d: "M16,67 L16,88 L16,67 Z "}
				],
				['path', {
					d: "M13,60 L13,65 C13,65 13,67 16,67 " +
					   "C19,67 19,65 19,65 L19,60 L13,60 Z ",
					style: {fill: conf.outline ? false : conf.color}}
				]
			]
		]
	]
}
