export default function (conf = {}, tools) {
  const width = 100
  const height = 100
  const defaults = {
    outline: true,
    color: "black"
  }
  const pulse = "M6,51 L34,51 L40,32 L40,80 L54,20 L54,62 L62,51 L94,51"

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
        "stroke-width": 2
      }},
      ["path", {
        d: pulse + (conf.outline ? "" : "z")}
      ]
    ]
  ]).rootElement
}
