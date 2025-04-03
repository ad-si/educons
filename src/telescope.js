export default function (conf = {}, tools) {
  const width = 100
  const height = 100
  const defaults = {
    outline: true,
    color: "black"
  }

  conf = Object.assign(defaults, conf)

  return tools.shaven(["svg", {
    width: width,
    height: height,
    viewBox: [0, 0, width, height].join()},

    ["g", {
      style: {
        fill: "transparent",
        stroke: conf.color,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": 2
      }},
      ["path.tripod", {
        d: "M28,84 L52,32 v56 v-56 L76,84"}
      ],
      ["path.body", {
        transform: "translate(52,30) " +
                   "rotate(-20) " +
                   "translate(38,-11) " +
                   "scale(-1,1)",
        d: "M0,0 h10 l2,2 h50 l2,2 h10 v-4 h2 v4 h4 v5 " +
           "h-16 l-2,2 h-50 l-2,2 h-10 z",
        style: {fill: conf.outline ? false : conf.color}}
      ]
    ]
  ]).rootElement
}
