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
			['path.body', {
				d: "M10,74 L90,74 C90,42 74,26 56,26 C53,26 52,28 50,28 " +
				   "C48,28 47,26 44,26 C26,26 10,42 10,74 L10,74 Z"
			}],
			['path.connections', {
				d: "M50,58 v16 " +
				   "M50,28 v22 " +
				   "M25,74 c0,-10 -5,-5 -8,-8" +
				   "M62,74 c0,-10 5,-5 7,-7" +
				   "M62,68 c-5,-2 0,0 -5,-5" +

				   "M79,38 C79,38 69,36 69,43" +

				   "M28,61 C28,61 30,59 33,59" +
				   "M30,55 C29,53 26,53 25,53" +
				   "M42,62 C42,62 25,60 31,49" +

				   "M35,39 C34,44 35,49 40,50" +
				   "M50,35 C50,35 55,40 62,39" +
				   "M85,49 C85,49 79,46 75,52 C77,56 74,61 74,61" +
				   "M58,40 C58,40 55,46 63,48 C71,50 64,59 64,59" +
				   "M25,33 L30,41 C30,41 35,37 43,39 C41,37 42,35 42,35"}
			]

		]
	]
}
