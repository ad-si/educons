export default function (conf = {}, tools) {
  const width = 100
  const height = 100
  const defaults = {
    outline: true,
    color: "black",
    temperature: 0.6
  }

  conf = Object.assign(defaults, conf)

  const tubeHeight = Math.round(-conf.temperature * 60 - 8)

  return tools.shaven(["svg", {
    width: width,
    height: height,
    viewBox: [0, 0, width, height].join()},

    ["g", {
      style: {
        fill: "transparent",
        stroke: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": 2
      }},

      ["path", {
        d: conf.outline ?
           "M44,11 a1,1 0 0 1 12,0 v62 a12,12 0 1 1 -12,0 z"
          :
           "M44,11 a1,1 0 0 1 12,0 v62 a12,12 0 1 1 -12,0 z" +
           "M48,77 a7,7 0 1 0 4,0 v" +
           tubeHeight +
           " h-4 z",
        style: {
          stroke: conf.color,
          fill: conf.outline ? false : conf.color
        }}
      ],

      ["path", {
        d: conf.outline ?
           "M49,78 a6,6 0 1 0 2,0 v" +
           tubeHeight +
           " h-2 z"
          :
           false,
        style: {
          fill: conf.outline ? conf.color : false
        }},
        conf.outline ? "" : false
      ]
    ]
  ]).rootElement
}
