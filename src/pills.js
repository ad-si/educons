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
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }},
      ["path", {
        transform: "translate(64, 47) rotate(-30) translate(-64, -47)",
        d: "M60,10 C54.5,10 50,14.5 50,20 L50,74 " +
           "C50,79.5 54.5,84 60,84 " +
           "L68,84 C73.5,84 78,79.5 78,74 L78,20 " +
           "C78,14.5 73.5,10 68,10 L60,10 Z " +
           "M50,47 h28"}
      ],
      ["path", {
        transform: "translate(27, 67) rotate(30) translate(-27, -67)",
        d: "M44,67 C44,76.5 36.5,84 27,84 C17.5,84 10,76.5 10,67 " +
           "C10,57.5 17.5,50 27,50 C36.5,50 44,57.5 44,67 L44,67 Z " +
           "M27,50 v34"}
      ]
    ]
  ]).rootElement
}
