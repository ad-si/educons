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
        d: conf.outline ?
           "M40,13 h22 L60,17 v12 L76,72 C81,86 61,87 51,87 " +
           "C41,87 21,86 26,72 L42,29 L42,17 L40,13 Z " +
           "M33,53 C41,56 45,56 51,54 C57,52 61,51 69,53"
          :
           "M40,13 h22 L60,17 v12 L76,72 C81,86 61,87 51,87 " +
           "C41,87 21,86 26,72 L42,29 L42,17 L40,13 Z " +
           "M33,53 C41,56 45,56 51,54 C57,52 61,51 69,53" +
           "L60,29 L60,17 L62,13 L40,13 L42,17 L42,17 v12 z"
      }
      ]
    ]
  ]).rootElement
}
