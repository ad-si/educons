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
        fill: conf.outline ? "transparent" : conf.color,
        stroke: conf.color,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2"
      }},
      ["path", {
        d: "M26,42 v48 " +
           "M26,10 v8 " +
           "M74,10 v24 " +
           "M74,58 v32 " +
           "M50,10 v44 " +
           "M50,78 v12"}
      ],
      ["rect", {
        width: 12,
        height: 16,
        x: 20,
        y: 22,
        rx: 2,
        ry: 2
      }],
      ["rect", {
        width: 12,
        height: 16,
        x: 44,
        y: 58,
        rx: 2,
        ry: 2
      }],
      ["rect", {
        width: 12,
        height: 16,
        x: 68,
        y: 38,
        rx: 2,
        ry: 2
      }]
    ]
  ]).rootElement
}
