function removeEmptyItemsAndSubArrays(arr) {
  return arr
    .map((subArray) => subArray.filter((item) => item.value !== ""))
    .filter((subArray) => subArray.length > 0);
}
export const lineChartCallback = (data, dataSettings, customizeSettings) => {
  const tempData = removeEmptyItemsAndSubArrays(data);
  const header = tempData.shift();

  return {
    originalData: {
      title: customizeSettings.title,
      titleSize: `${customizeSettings.titleSize}vw`,
      titleColor: customizeSettings.titleColor,
      beginAtZero: true,
      data: {
        labels:
          dataSettings.label !== undefined
            ? tempData.map((el) => el[dataSettings.label].value)
            : undefined,
        datasets: dataSettings.values
          ? dataSettings.values.map((index) => {
              let color = customizeSettings[header[index]?.value] || "#E64747";
              // let fill = customizeSettings[header[index]?.value] || "#E64747";
              return {
                label: header[index].value,
                data: tempData.map((el) => el[index]?.value),
                color: color,
                // fill: fill,
              };
            })
          : [],
      },
    },
  };
};

export const lineChartData = {
  data: [
    [{ value: "Label" }, { value: "Public" }, { value: "Private" }],
    [{ value: "January" }, { value: "500" }, { value: "300" }],
    [{ value: "February" }, { value: "1000" }, { value: "600" }],
    [{ value: "March" }, { value: "2000" }, { value: "900" }],
    [{ value: "April" }, { value: "3000" }, { value: "1200" }],
    [{ value: "May" }, { value: "4000" }, { value: "1500" }],
    [{ value: "June" }, { value: "5000" }, { value: "1800" }],
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

  dataSettings: {
    label: 0,
    values: [1, 2],
  },
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
  customizeSettings: {
    title: "Title",
    Public: "#E64747",
    Private: "#E64747",
    titleSize: 2,
    titleColor: "#5CCBE4",
  },
};
