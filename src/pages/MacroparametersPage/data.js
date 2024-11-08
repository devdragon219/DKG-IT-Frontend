export const JSON_DATA = {
  originalData: {
    data: [
      {
        macro_panel: {
          type: "KeyParameters",
          data: {
            originalData: {
              mainNameforPage: "General Overview",
              widthBlock: 350,
              macroBlocks: [
                {
                  iconName: "FiGlobe",
                  text: "Total Visualizations Created",
                  infoMain: "1934",
                  description11: "",
                  fontColor: "#fff",
                },
                {
                  iconName: "FiBarChart2",
                  text: "Total Visualizations Types",
                  infoMain: "103",
                  description11: "",
                  fontColor: "#fff",
                },
                {
                  iconName: "FiPercent",
                  text: "Total GeoDashboard V2",
                  infoMain: "59",
                  description1: "",
                  fontColor: "#fff",
                },
                {
                  iconName: "FiBarChart2",
                  text: "Total GeoMaps",
                  infoMain: "35",
                  description1: "",
                  fontColor: "#fff",
                },
                {
                  iconName: "FiPercent",
                  text: "Total Document Creator V2",
                  infoMain: "43",
                  description1: "",
                  fontColor: "#fff",
                },
              ],
            },
          },
          defaultKey: 0,
          binded: false,
          blured: false,
        },
        graph_one: {
          type: "IframeGeoDash",
          data: {
            originalData: {
              url: "https://tools.dkv.global/diagrams/number2/index.html?slug=it_macroparameters",
              config: {
                width: "680",
                height: "2000",
                seamless: "true",
                scrolling: "yes",
              },
            },
          },
          defaultKey: 0,
          binded: false,
          blured: false,
        },
        graph_two: {
          type: "IframeGeoDash",
          data: {
            originalData: {
              url: "https://tools.dkv.global/product/front_leaderBoard",
              config: {
                width: "1000",
                height: "2000",
                seamless: "true",
                scrolling: "yes",
              },
            },
          },
          defaultKey: 0,
          binded: false,
          blured: false,
        },
        graph_three: { type: null, data: null, blured: false },
        graph_fore: {
          type: "IframeGeoDash",
          data: {
            originalData: {
              url: "https://platform.dkv.global/files/diagrams/number14/index.html?slug=ap",
              config: {
                width: "680",
                height: "421",
                seamless: "true",
                scrolling: "no",
              },
            },
          },
          defaultKey: 0,
          binded: false,
          blured: false,
        },
        pageTheme: {
          theme: {
            name: "custom",
            backgroundHeader:
              "linear-gradient(-30deg, #398bbc 0%, #0c5393 40%, #398bbc 50%)",
            backgroundFooter:
              "linear-gradient(90deg, #0c5393 0%, #398bbc 100%)",
            textColor: "black",
            barColor1: "#0c5393",
            barColor2: "#398bbc",
            radarSettings: {
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "#398bbc",
              pointBackgroundColor: "#398bbc",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "#398bbc",
            },
          },
        },
      },
    ],
    layout: [
      [
        {
          w: 6,
          h: 11,
          x: 0,
          y: 11,
          i: "graph_one-1-IframeGeoDash-0",
          moved: false,
          static: false,
        },
        {
          w: 6,
          h: 11,
          x: 0,
          y: 0,
          i: "graph_fore-1-IframeGeoDash-0",
          moved: false,
          static: false,
        },
        {
          w: 6,
          h: 22,
          x: 6,
          y: 0,
          i: "graph_two-1-IframeGeoDash-0",
          moved: false,
          static: false,
        },
      ],
    ],
  },
};
