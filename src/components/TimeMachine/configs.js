function removeEmptyItemsAndSubArrays(arr) {
  return arr
    .map((subArray) => subArray.filter((item) => item.value !== ""))
    .filter((subArray) => subArray.length > 0);
}
export const timeMachineCallback = (data, dataSettings, customizeSettings) => {
  const tempData = removeEmptyItemsAndSubArrays(data);
  const header = tempData.shift();
  const { iFrames, ...config } = customizeSettings;
  return {
    originalData: {
      iFrames: iFrames,
      config: { ...config },
      data: tempData.map((item) => {
        return {
          link: item[dataSettings.link].value,
          year: item[dataSettings.years].value,
        };
      }),
    },
  };
};

export const timeMachineData = {
  data: [
    [{ value: "Link" }, { value: "Year" }],
    [
      {
        value: "https://tools.dkv.global/assets/number13.webp",
      },
      { value: "1999" },
    ],
    [
      {
        value:
          "https://tools.dkv.global/product/Investors_Companies_Insilico_Medicine",
      },
      { value: "2001" },
    ],
    [
      {
        value: "https://tools.dkv.global/assets/number4.webp",
      },
      { value: "2024" },
    ],
  ],
  dataSettingsConfig: [
    {
      name: "link",
      type: "select",
    },
    {
      name: "years",
      type: "select",
    },
  ],
  customizeConfig: [
    {
      name: "iFrames",
      type: "boolean",
    },
    {
      name: "mainColor",
      type: "color",
    },
    {
      name: "thumbRadius",
      type: "number",
      min: 10,
      max: 30,
    },
    {
      name: "markColor",
      type: "color",
    },
    {
      name: "markActiveColor",
      type: "color",
    },
    {
      name: "markRadius",
      type: "number",
      min: 5,
      max: 20,
    },
    {
      name: "labelFontSize",
      type: "number",
      min: 10,
      max: 30,
    },
    {
      name: "position",
      type: "select",
      data: ["bottom", "top"],
    },
  ],
  dataSettings: {
    link: 0,
    years: 1,
  },
  customizeSettings: {
    iFrames: false,
    mainColor: "#1976d2",
    thumbRadius: 15,
    markColor: "red",
    markActiveColor: "#1976d2",
    markRadius: 5,
    labelFontSize: 12,
    position: "bottom",
  },
};
