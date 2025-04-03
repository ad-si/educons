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
        "stroke-width": 2
      }},
      ["path", {
        d: "M21,83 L21,93 L79,93 L79,83 L66,83 C68,79 80,54 58,33 " +
           "L67,15 L65,14 L67,10 L61,7 L59,11 L57,10 L34,56 L36,57 " +
           "L34,61 L40,64 L42,60 L44,61 L54,41 " +
           "C72,62 56,83 44,83 L21,83 Z"}
      ],
      ["path", {
        d: "M46,73 L22,61 L20,65 L44,77 L46,73 Z"}
      ]
    ]
  ]).rootElement
}
