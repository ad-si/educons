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
				stroke: 'none',
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
				'stroke-width': 2
			}},


			['path', {
				d: conf.outline
					?
                   'M36,54 h-6 l-12,10 v-10 h-8 a8,8 0 0 1 -8,-8 v-20 ' +
                   'a8,8 0 0 1 8,-8 h40 a8,8 0 0 1 8,8 v20 a8,8 0 0 1 -8,8 h-2'
					:
                   'M36,55 h-6 l-13,11 v-11 h-7 a9,9 0 0 1 -9,-9 v-20 ' +
                   'a9,9 0 0 1 9,-9 h40 a9,9 0 0 1 9,9 v20 a9,9 0 0 1 -9,9 h-2',
				style: {
					stroke: conf.outline ? conf.color : 'none',
					fill: conf.outline ? false : conf.color
				}
			}],


			['path', {
				d: conf.outline
					?
                   'M52,44 h-2 a8,8 0 0 0 -8,8 v20 a8,8 0 0 0 8,8 h20 ' +
                   'l12,10 v-10 h8 a8,8 0 0 0 8,-8 v-20 a8,8 0 0 0 -8,-8 h-26'
					:
                   'M61,44 v2 a11,11 0 0 1 -11,11 h-9 v15 a9,9 0 0 0 9,9 h19 ' +
                   'l13,11 v-11 h7 a9,9 0 0 0 9,-9 v-19 a9,9 0 0 0 -9,-9 z',
				style: {
					stroke: conf.outline ? conf.color : 'none',
					fill: conf.outline ? false : conf.color
				}
			}],

			['path', {
				d: "M61,67 C61,69 62,70 64,70 C66,70 69,68 70,68 " +
				   "C70,67 72,65 73,63 C75,63 75,64 75,65 " +
				   "C75,67 73,69 70,69 L71,72 C77,71 79,69 79,65 " +
				   "C79,62 77,61 74,60 C74,60 75,59 75,59 L71,59 " +
				   "C71,59 71,59 71,59 C70,59 69,59 69,60 C69,59 69,57 69,57 " +
				   "C71,57 74,57 76,56 L76,53 C73,54 71,54 69,54 " +
				   "C69,53 69,52 69,52 L66,52 C66,52 66,53 66,54 " +
				   "C64,54 62,54 62,54 L62,57 L62,57 C63,57 64,57 66,57 " +
				   "C66,58 66,60 66,60 C63,62 61,64 61,67 L61,67 Z M71,63 " +
				   "C70,63 69,64 69,65 C69,64 69,63 69,63 C69,63 70,63 71,63 " +
				   "L71,63 Z M66,64 C66,65 66,66 67,67 C66,67 65,67 65,67 " +
				   "C64,68 64,67 64,67 C64,65 64,64 66,64 L66,64 Z",
				style: {
					fill: conf.outline ? 'black' : 'white'
				}
			}],

			['path', {
				d: "M27,24 L20,44 L24,44 L26,39 " +
				   "L33,39 L35,44 L40,44 " +
				   "L32,24 L27,24 L27,24 Z " +
				   "M27,36 L29,29 " +
				   "L29,29 L32,36 L27,36 L27,36 Z",
				style: {
					fill: conf.outline ? 'black' : 'white'
				}
			}]
		]
	]
}
