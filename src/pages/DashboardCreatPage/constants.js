const initialLayouts = [
  {
    lg: [
      { x: 0, y: 0, w: 4, h: 17, i: "graph_one" },
      { x: 4, y: 0, w: 4, h: 8, i: "graph_two" },
      { x: 4, y: 3, w: 4, h: 9, i: "graph_three" },
      { x: 8, y: 0, w: 4, h: 17, i: "graph_fore" },
    ],
    sm: [
      { x: 0, y: 0, w: 4, h: 17, i: "graph_one" },
      { x: 4, y: 0, w: 4, h: 8, i: "graph_two" },
      { x: 4, y: 3, w: 4, h: 9, i: "graph_three" },
      { x: 8, y: 0, w: 4, h: 17, i: "graph_fore" },
    ],
  },
  {
    lg: [
      { x: 0, y: 0, w: 4, h: 17, i: "graph_one" },
      { x: 4, y: 0, w: 4, h: 8, i: "graph_two" },
      { x: 4, y: 3, w: 4, h: 9, i: "graph_three" },
      { x: 8, y: 0, w: 4, h: 17, i: "graph_fore" },
    ],
    sm: [
      { x: 0, y: 0, w: 4, h: 17, i: "graph_one" },
      { x: 4, y: 0, w: 4, h: 8, i: "graph_two" },
      { x: 4, y: 3, w: 4, h: 9, i: "graph_three" },
      { x: 8, y: 0, w: 4, h: 17, i: "graph_fore" },
    ],
  },
];

const initialPages = [
  {
    macro_panel: {
      type: "macro_panel",
      data: [],
      customizeSettings: {
        iconColor: "white",
        iconBackgroundColor: "#ffffff29",
        iconTextSize: 15,
        iconInfoSize: 10,
        mainColor1: "#398bbc",
        mainColor2: "#0c5393",
      },
    },
    graph_one: {
      type: null,
      data: null,
      blured: false,
    },
    graph_two: {
      type: null,
      data: null,
      blured: false,
    },
    graph_three: {
      type: null,
      data: null,
      blured: false,
    },
    graph_fore: {
      type: null,
      data: null,
      blured: false,
    },
  },
];

const customizeConfig = [
  {
    name: "mainColor2",
    type: "color",
  },
  {
    name: "mainColor1",
    type: "color",
  },
  {
    name: "iconColor",
    type: "color",
  },
  {
    name: "iconBackgroundColor",
    type: "color",
  },
  {
    name: "iconTextSize",
    type: "number",
    min: 10,
    max: 30,
  },
  {
    name: "iconInfoSize",
    type: "number",
    min: 10,
    max: 30,
  },
];

export { initialLayouts, initialPages, customizeConfig };
