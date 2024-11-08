function removeEmptyItemsAndSubArrays(arr) {
  return arr
    .map((subArray) => subArray.filter((item) => item.value !== ""))
    .filter((subArray) => subArray.length > 0);
}
export const universalBarCallback = (data, dataSettings, customizeSettings) => {
  const tempData = removeEmptyItemsAndSubArrays(data);
  const header = tempData.shift();

  const newValues = dataSettings.values.filter((el) => {
    return el <= tempData[0].length - 1;
  });

  return {
    originalData: {
      data: {
        labels:
          dataSettings.label !== undefined
            ? tempData.map((el) => el[dataSettings.label].value)
            : undefined,
        datasets: newValues
          ? newValues.map((index) => {
              let color =
                customizeSettings?.[header?.[index]?.value] || "#E64747";

              return {
                label: header?.[index]?.value,
                data: tempData?.map((el) => el?.[index]?.value),
                backgroundColor: color,
              };
            })
          : [],
      },
      options: {
        indexAxis: customizeSettings.type === "vertical" ? "y" : "x",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: !!customizeSettings.title,
            text: customizeSettings.title || "",
          },
        },
      },
    },
  };
};

export const universalBarData = {
  data: [
    [{ value: "Label" }, { value: "Public" }, { value: "Private" }],
    [{ value: "Page A" }, { value: "500" }, { value: "300" }],
    [{ value: "Page B" }, { value: "1000" }, { value: "600" }],
    [{ value: "Page C" }, { value: "2000" }, { value: "900" }],
    [{ value: "Page D" }, { value: "3000" }, { value: "1200" }],
    [{ value: "Page E" }, { value: "4000" }, { value: "1500" }],
    [{ value: "Page F" }, { value: "5000" }, { value: "1800" }],
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
      name: "color",
      type: "color",
      valueConected: true,
      valueConectedName: "values",
    },
    {
      name: "type",
      type: "select",
      data: ["horisontal", "vertical"],
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
    type: "horisontal",
  },
};
