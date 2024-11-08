function removeEmptyItemsAndSubArrays(arr) {
  return arr
    .map((subArray) => subArray.filter((item) => item.value !== ""))
    .filter((subArray) => subArray.length > 0);
}
export const dynamicLineChartCallback = (
  data,
  dataSettings,
  customizeSettings
) => {
  const tempData = removeEmptyItemsAndSubArrays(data);
  const header = tempData.shift();

  return {
    originalData: {
      title: customizeSettings.title,
      titleSize: `${customizeSettings.titleSize}vw`,
      titleColor: customizeSettings.titleColor,
      beginAtZero: true,

      labels:
        dataSettings.label !== undefined
          ? tempData.map((el) => el[dataSettings.label].value)
          : undefined,
      datasets: dataSettings.values
        ? dataSettings.values.map((index) => {
            let color = customizeSettings[header[index]?.value] || "#E64747";
            console.log(color, 11111222);
            return {
              label: header[index].value,
              data: tempData.map((el) => Number(el[index]?.value)),
              color: color,
            };
          })
        : [],
    },
  };
};

export const dynamicLineChartData = {
  data: [
    [{ value: "Label" }, { value: "Public" }, { value: "Private" }],
    [{ value: "2022-11-02" }, { value: "500" }, { value: "300" }],
    [{ value: "2022-11-03" }, { value: "1000" }, { value: "600" }],
    [{ value: "2022-11-04" }, { value: "2000" }, { value: "900" }],
    [{ value: "2022-11-05" }, { value: "3000" }, { value: "1200" }],
    [{ value: "2022-11-06" }, { value: "4000" }, { value: "1500" }],
    [{ value: "2022-11-07" }, { value: "5000" }, { value: "1800" }],
  ],
  dataSettingsConfig: [
    {
      name: "label",
      type: "select",
    },
    {
      name: "values",
      type: "multi-select",
    },
  ],
  customizeConfig: [
    {
      name: "title",
      type: "input",
    },
    {
      name: "titleSize",
      type: "number",
      min: 1,
      max: 5,
    },
    {
      name: "titleColor",
      type: "color",
    },
    {
      name: "color",
      type: "color",
      valueConected: true,
      valueConectedName: "values",
    },
  ],
  dataSettings: {
    label: 0,
    values: [1, 2],
  },
  customizeSettings: {
    title: "Title",
    Public: "#E64747",
    Private: "#E64747",
    titleSize: 2,
    titleColor: "#5CCBE4",
  },
};
