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

export { initialPages, customizeConfig };
