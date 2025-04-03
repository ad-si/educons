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
      ["circle", {
        cx: 30,
        cy: 20,
        r: 10}
      ],
      ["circle", {
        cx: 30,
        cy: 80,
        r: 10}
      ],
      ["circle", {
        cx: 60,
        cy: 50,
        r: 20}
      ],
      ["path", {
        transform: "translate(60,50) rotate(45)",
        d: "M-20,0 h-12" +
           "M0,20 v12"
      }]
    ]
  ]).rootElement
}
