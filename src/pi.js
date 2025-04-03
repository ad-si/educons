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
        d: "M16,39" +
           "L18,39 " +
           "C20,35 20.5,29 36,31 " +
           "C35.5,69 24,71 24,79 " +
           "C24,85 28,87 30,87 " +
           "C42,87 44,31 44,31 " +
           "L60,31 " +
           "C59,45 56.5,57 56,71 " +
           "C56,80.5 60.5,87 68,87 " +
           "C80.5,87.5 83,77 83,71 " +
           "L81,71 " +
           "C81,72 80,75 76,75 " +
           "C60,75 68,52 68,31 " +
           "L84,31 " +
           "L84,19 " +
           "C47.5,19.5 20,11 16,39 " +
           "L16,39 Z"}
      ]
    ]
  ]).rootElement
}
