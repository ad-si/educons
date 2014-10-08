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
			['path.tripod', {
				d: "M28,84 L52,32 v56 v-56 L76,84"}
			],
			['path.body', {
				transform: 'translate(52,30) ' +
				           'rotate(-20) ' +
				           'translate(38,-11) ' +
				           'scale(-1,1)',
				d: "M0,0 h10 l2,2 h50 l2,2 h10 v-4 h2 v4 h4 v5 " +
				   "h-16 l-2,2 h-50 l-2,2 h-10 z",
				style: {fill: conf.outline ? false : conf.color}}
			]
		]
	]
}
