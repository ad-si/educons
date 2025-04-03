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
        fill: conf.outline ? "transparent" : "black",
        stroke: "black",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2"
      }},
      ["path", {
        d: "M50,2 C82,28 70,56 66,86 L34,86 C30,57 18,28 50,2 L50,2 Z " +
           "M34.5,86 L25.5,98 C11.5,76 11.5,68 29.5,60 " +
           "M65.5,86 L74.5,98 C88.5,76 88.5,68 70.5,60 " +
           "M50,60 v38"}
      ],
      // Bullseye
      ["circle", {
        cx: 50,
        cy: 38,
        r: 8
      }]
    ]
  ]).rootElement
}
