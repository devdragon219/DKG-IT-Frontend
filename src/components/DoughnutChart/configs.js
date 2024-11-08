function removeEmptyItemsAndSubArrays(arr) {
  return arr
    .map((subArray) => subArray.filter((item) => item.value !== ""))
    .filter((subArray) => subArray.length > 0);
}
export const doughnutChartCallback = (
  data,
  dataSettings,
  customizeSettings
) => {
  const tempData = removeEmptyItemsAndSubArrays(data);
  const header = tempData.shift();

  return {
    originalData: {
      title: customizeSettings.title,
      titleFontSize: `${customizeSettings.titleFontSize}vw`,
      titleFontColor: customizeSettings.titleFontColor,
      beginAtZero: true,
      data: {
        labels:
          dataSettings.label !== undefined
            ? tempData.map((el) => el[dataSettings.label].value)
            : undefined,
        datasets: dataSettings.values
          ? dataSettings.values.map((index) => {
              const backgroundColors = tempData.map(
                (el) => el[dataSettings.color]?.value || "#E64747"
              );
              return {
                label: header[index].value,
                data: tempData.map((el) => el[index]?.value),
                backgroundColor: backgroundColors,
              };
            })
          : [],
      },
    },
  };
};

export const doughnutChartData = {
  data: [
    [{ value: "Label" }, { value: "Value" }, { value: "Color" }],
    [
      { value: "United States" },
      { value: "3836" },
      { value: "rgba(255, 99, 132, 0.5)" },
    ],
    [
      { value: "United Kingdom" },
      { value: "2555" },
      { value: "rgba(54, 162, 235, 0.2)" },
    ],
    [
      { value: "Germany" },
      { value: "255" },
      { value: "rgba(255, 206, 86, 0.2)" },
    ],
    [{ value: "Italy" }, { value: "877" }, { value: "rgba(75, 192, 192, 0.2" }],
    [
      { value: "France" },
      { value: "746" },
      { value: "rgba(255, 99, 132, 0.5)" },
    ],
    [
      { value: "Spain" },
      { value: "617" },
      { value: "rgba(54, 162, 235, 0.2)" },
    ],
    [
      { value: "Australia" },
      { value: "535" },
      { value: "rgba(255, 206, 86, 0.2)" },
    ],
    [{ value: "Other" }, { value: "535" }, { value: "red" }],
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

  dataSettings: {
    label: 0,
    color: 2,
    values: [1],
  },
  customizeConfig: [
    {
      name: "title",
      type: "input",
    },
    {
      name: "titleFontSize",
      type: "number",
      min: 1,
      max: 5,
    },
    {
      name: "titleFontColor",
      type: "color",
    },
  ],
  customizeSettings: {
    title: "Title",
    titleFontSize: 2,
    titleFontColor: "#5CCBE4",
  },
};
