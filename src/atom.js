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

      ["circle", {
        cx: 50,
        cy: 50,
        r: 5,
        style: {
          fill: conf.color,
          stroke: "none"}
      }, conf.outline],

      ["circle", {
        transform: "translate(50,50) rotate(30)",
        cx: -33,
        cy: 9,
        r: 4,
        style: {
          fill: conf.color,
          stroke: "none"}
      }, conf.outline],

      ["circle", {
        transform: "translate(50,50) rotate(30)",
        cx: 33,
        cy: -9,
        r: 4,
        style: {
          fill: conf.color,
          stroke: "none"}
      }, conf.outline],

      ["ellipse", {
        cx: 50,
        cy: 50,
        rx: 15,
        ry: 40
      }, conf.outline],

      ["ellipse", {
        transform: "translate(50,50) rotate(60)",
        rx: 15,
        ry: 40
      }, conf.outline],

      ["ellipse", {
        transform: "translate(50,50) rotate(120)",
        rx: 15,
        ry: 40
      }, conf.outline],


      ["path", {
        transform: "translate(50,50)" +
                   "rotate(90)",
        d: "M-41,0 a41,16 0 0 0 82,0 a41,16 0 0 0 -82,0" +
           "M-5,0 a1,1 0 0 1 10,0 a1,1 0 0 1 -10,0" //+
        //"M0,5 a1,1 0 0 0 10,0 a1,1 0 0 0 -10,0"
        ,
        style: {stroke: "none"}
      }, !conf.outline],

      ["path", {
        transform: "translate(50,50)" +
                   "rotate(30)",
        d: "M-41,0 a41,16 0 0 1 82,0 a41,16 0 0 1 -82,0" +
             // Larger cutoff to prevent antialiasing artifacts
                   "M-8,0 a1,1 0 0 0 16,0 a1,1 0 0 0 -16,0" +
             // Electron 1
                   "M-39,9 a1,1 0 0 0 12,0 a1,1 0 0 0 -12,0" +
           "M-37,9 a1,1 0 0 1 8,0 a1,1 0 0 1 -8,0" +
             // Electron 2
                   "M39,-9 a1,1 0 0 0 -12,0 a1,1 0 0 0 12,0" +
           "M37,-9 a1,1 0 0 1 -8,0 a1,1 0 0 1 8,0",
        style: {stroke: "none"}
      }, !conf.outline],

      ["path", {
        transform: "translate(50,50) rotate(-30)",
        d: "M-41,0 a41,16 0 0 0 82,0 a41,16 0 0 0 -82,0" +
          // Larger cutoff to prevent antialiasing artifacts
                   "M-8,0 a1,1 0 0 1 16,0 a1,1 0 0 1 -16,0",
        style: {stroke: "none"}
      }, !conf.outline]
    ]
  ]).rootElement
}
