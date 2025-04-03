export default function (conf = {}, tools) {
  const width = 100
  const height = 100
  const defaults = {
    outline: true,
    color: "black"
  }
  // const pulse = "M6,51 L34,51 L40,32 L40,80 L54,20 L54,62 L62,51 L94,51"

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
      ["path", {
        d: "M58,70 C58,70 62,81 74,81 C86,81 90,70 90,70 L58,70 Z " +
           "M10,70 C10,70 14,81 26,81 C38,81 42,70 42,70 L10,70 Z ",
        style: {fill: conf.outline ? false : conf.color}}
      ],
      ["path", {
        d: "M74,26 L58,70 L90,70 L74,26 Z " +
           "M26,26 L10,70 L42,70 L26,26 Z " +
           "M74,26 L26,26 L74,26" +
           "M50,14 L50,26"}
      ]
    ]
  ]).rootElement
}
