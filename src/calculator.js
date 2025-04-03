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
        "stroke-width": "2"
      }},
      ["g.minus", {transform: "translate(66, 34)"},
        ["circle", {r: 13}],
        ["path", {d: "M-6,0 h12"}]
      ],
      ["g.plus", {transform: "translate(34, 34)"},
        ["circle", {r: 13}],
        ["path", {
          d: "M-6,0 h12 " +
             "M0,-6 v12"}
        ]
      ],
      ["g.percentage", {transform: "translate(34, 66)"},
        ["circle", {
          r: 13}
        ],
        ["path", {d: "M-5,5 l10,-10"}],
        ["circle", {
          cx: -4.5,
          cy: -4.5,
          r: 1.5,
          style: {
            fill: conf.color,
            stroke: "none"}}
        ],
        ["circle", {
          cx: 4.5,
          cy: 4.5,
          r: 1.5,
          style: {
            fill: conf.color,
            stroke: "none"}}
        ]
      ],
      ["g.multiplication", {transform: "translate(66, 66)"},
        ["circle", {
          r: 13}
        ],
        ["path", {d: "M-5,5 l10,-10 z" +
                     "M-5,-5 l10,10 z"}
        ]
      ]
    ]
  ]).rootElement
}
