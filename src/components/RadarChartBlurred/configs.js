function removeEmptyItemsAndSubArrays(arr) {
  return arr
    .map((subArray) => subArray.filter((item) => item.value !== ""))
    .filter((subArray) => subArray.length > 0);
}
export const radarChartBlurredCallback = (
  data,
  dataSettings,
  customizeSettings
) => {
  const tempData = removeEmptyItemsAndSubArrays(data);
  const header = tempData.shift();

  return {
    originalData: {
      radarFontSize: customizeSettings.radarFontSize,
      legendFontSize: customizeSettings.legendFontSize,
      blured: customizeSettings.blured,
      backgroundColor: customizeSettings.backgroundColor,
      labels: header
        .filter((_el, index) => {
          return dataSettings.values.indexOf(index) !== -1;
        })
        .map((el) => el.value),
      datasets: tempData.map((el) => {
        console.log(el, dataSettings.color, 1111);
        return {
          legend: el[dataSettings.label].value,
          data: el
            .filter((_el, index) => {
              return dataSettings.values.indexOf(index) !== -1;
            })
            .map((el) => el.value),
          color: el[dataSettings.color].value,
        };
      }),
    },
  };
};

export const radarChartBlurredData = {
  data: [
    [
      { value: "legend" },
      { value: "General" },
      { value: "Technical" },
      { value: "Marketing" },
      { value: "color" },
    ],
    [
      { value: "Company A" },
      { value: "78" },
      { value: "58" },
      { value: "16.667" },
      { value: "#be5bba" },
    ],
    [
      { value: "Company B" },
      { value: "68" },
      { value: "54" },
      { value: "50" },
      { value: "#d44c7d" },
    ],
    [
      { value: "Company C" },
      { value: "62" },
      { value: "42" },
      { value: " 66.667" },
      { value: "#ab2354" },
    ],
    [
      { value: "Company D" },
      { value: "59" },
      { value: "58" },
      { value: "55.556" },
      { value: "#821c43" },
    ],
    [
      { value: "Company E" },
      { value: "79" },
      { value: "69.376" },
      { value: "41.667" },
      { value: "#5a1631" },
    ],
  ],
  dataSettingsConfig: [
    {
      name: "label",
      type: "select",
    },
    {
      name: "color",
      type: "select",
    },
    {
      name: "values",
      type: "multi-select",
    },
  ],
  customizeConfig: [
    {
      name: "backgroundColor",
      type: "color",
    },
    {
      name: "blured",
      type: "boolean",
    },
    {
      name: "radarFontSize",
      type: "number",
      min: 0.5,
      max: 3,
    },
    {
      name: "legendFontSize",
      type: "number",
      min: 0.5,
      max: 3,
    },
  ],
  dataSettings: {
    label: 0,
    color: 4,
    values: [1, 2, 3],
  },
  customizeSettings: {
    backgroundColor: "#283045",
    blured: false,
    legendFontSize: 1.5,
    radarFontSize: 1.5,
  },
};
