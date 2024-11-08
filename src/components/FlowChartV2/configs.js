export const flowChartLiveDataCallback = (values, liveData, setLiveData) => {
  const { nodes, edges } = values;

  setLiveData((_prev) => {
    return {
      nodes,
      edges,
    };
  });
};

export const flowChartCallback = (
  data,
  dataSettings,
  customizeSettings,
  liveData
) => {
  const keys = Object.keys(data);

  return {
    originalData: {
      customizeSettings,
      nodes: liveData?.nodes || [],
      edges: liveData?.edges || [],
    },
  };
};

export const flowChartData = {
  withoutData: true,
  data: {},
  dataSettingsConfig: [],
  customizeConfig: [
    {
      name: "BackgroundVariant",
      type: "select",
      data: ["dots", "lines", "cross", "none"],
    },
    {
      name: "BackgroundColor",
      type: "color",
    },
    {
      name: "MiniMap",
      type: "boolean",
    },
    {
      name: "Controls",
      type: "boolean",
    },
    {
      name: "DownloadButton",
      type: "boolean",
    },

    // {
    //   name: "titleSize",
    //   type: "number",
    //   min: 6,
    //   max: 30,
    // },
    // {
    //   name: "textColor",
    //   type: "color",
    // },
  ],
  dataSettings: {},
  customizeSettings: {
    BackgroundVariant: "dots",
    BackgroundColor: "white",
    MiniMap: true,
    Controls: true,
    DownloadButton: true,
  },
};
