export default function (conf = {}, tools) {
  const width = 100
  const height = 100
  const defaults = {
    outline: true,
    color: "black",
    temperature: 0.6
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
      ["circle", {
        cx: 50,
        cy: 50,
        r: 33,
        style: {
          fill: conf.outline ? false : conf.color}
      }],
      ["path", {
        d: "M50,17 L50,83 " +
           "M24,70 L76,70 " +
           "M24,30 L76,30 " +
           "M17,50 L83,50 " +
           "M50,17 C27,30 27,70 50,83 " +
           "M50,17 C73,30 73,70 50,83"}

      ]
    ]
  ]).rootElement
}
