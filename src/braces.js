export default function (conf = {}, tools) {
  const width = 100
  const height = 100
  const defaults = {
    outline: true,
    color: "black"
  }

  function getHashIcon () {
    if (!conf.outline)
      return ["path", {
        d: "M42,58 L35,58 L35,56 L42,56 " +
           "L43.5,46 L36.5,46 L36.5,44 L44,44 " +
           "L45.5,30.5 L47.5,30.5 L46,44 L56,44 " +
           "L58,30.5 L60,30.5 L58,44 L64.5,44 L64.5,46 " +
           "L57.5,46 L56,56 L63,56 L63,58 " +
           "L56,58 L54,72 L52,72 L54,58 L44,58 " +
           "L42,72 L40,72 L42,58 Z" +

             // Inner cutoff
                   "M54.24,56.16 " +
           "L55.68,45.78 L45.54,45.78 L44.1,56.16 L54.24,56.16 Z",
        style: {
          fill: conf.color
        }}
      ]
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
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }},
      ["path", {
        d: "M36,18 " +
           "C26,18 26,18 26,34 " +
           "C26,48 28,50 16,50 " +
           "C28,50 26,52 26,66 " +
           "C26,82 26,82 36,82 " +

           "M64,18 " +
           "C74,18 74,18 74,34 " +
           "C74,48 72,50 84,50 " +
           "C72,50 74,52 74,66 " +
           "C74,82 74,82 64,82"}
      ],
      getHashIcon()
    ]
  ]).rootElement
}
