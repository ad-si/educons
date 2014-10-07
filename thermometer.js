var svgKit = require('../../svgKit.js')

module.exports = function (conf) {

	var width = 100,
	    height = 100,
	    defaults = {
		    outline: true,
		    color: 'black',
		    temperature: 0.6
	    }


	conf = svgKit.applyDefaults(conf, defaults)

	return ['svg', {
		width: width,
		height: height,
		viewBox: [0, 0, width, height].join()},

		['g', {
			style: {
				fill: 'transparent',
				stroke: 'none',
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
				'stroke-width': 2
			}},
			['path', {
				d: conf.outline ?
				   'M43,10 a1,1 0 0 1 14,0 v61 a14,14 0 1 1 -14,0 z'
					:
				   'M42,10 a1,1 0 0 1 16,0 v60.5 a15,15 0 1 1 -16,0 z' +
				   'M48,74 a9,9 0 1 0 4,0 v' +
				   (-conf.temperature * 62 - 4) +
				   ' h-4 z',
				style: {
					stroke: conf.outline ? conf.color : 'none',
					fill: conf.outline ? false : conf.color
				}}
			],


			['path', {
				d: conf.outline ?
				   'M48,74 a9,9 0 1 0 4,0 v' +
				   (-conf.temperature * 62 - 4) +
				   ' h-4 z'
					:
				   '',
				style: {
					fill: conf.outline ? conf.color : false
				}}
			]
		]
	]
}
