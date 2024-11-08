function removeEmptyItemsAndSubArrays(arr) {
  return arr
    .map((subArray) => subArray.filter((item) => item.value !== ""))
    .filter((subArray) => subArray.length > 0);
}

export const pieChartLabelsCallback = (
  data,
  dataSettings,
  customizeSettings
) => {
  const tempData = removeEmptyItemsAndSubArrays(data);
  const header = tempData.shift();

  return {
    originalData: {
      ...customizeSettings,
      data: tempData.map((el) => {
        return {
          name: el?.[dataSettings?.name]?.value,
          value: Number(el[dataSettings.value]?.value),
          color: el?.[dataSettings?.color]?.value,
          label: el?.[dataSettings?.label]?.value,
        };
      }),
    },
  };
};

export const pieChartLabelsData = {
  data: [
    [
      { value: "Name" },
      {
        value: "Value",
      },
      { value: "Color" },
      { value: "Label" },
    ],
    [
      { value: "Manufacturing goods" },
      {
        value: "8",
      },
      { value: "#f69446" },
      { value: "8%" },
    ],
    [
      { value: "Chemical and related products" },
      {
        value: "2.4",
      },
      { value: "#f69446" },
      { value: "2.4%" },
    ],
    [
      { value: "Beverages and tabacco" },
      {
        value: "3.9",
      },
      { value: "#fdba11" },
      { value: "3.9%" },
    ],
    [
      { value: "Crude materials, inedible, except fuels" },
      {
        value: "10.7",
      },
      { value: "#fcc942" },
      { value: "10.7%" },
    ],
    [
      { value: "Machinery and transport equipment" },
      {
        value: "31",
      },
      { value: "#e0c647" },
      { value: "31%" },
    ],
    [
      { value: "Different Manufacturing good" },
      {
        value: "24",
      },
      { value: "#ccbf4d" },
      { value: "24%" },
    ],
    [
      { value: "Food an live animal" },
      {
        value: "14.8",
      },
      { value: "#a5b452" },
      { value: "14.8%" },
    ],
    [
      { value: "Minerals fuels, lubricants and related materials" },
      {
        value: "1",
      },
      { value: "#f68d70" },
      { value: "1%" },
    ],
    [
      { value: "Animal and vegetables oils, fats and waves" },
      {
        value: "5.1",
      },
      { value: "#f5834e" },
      { value: "5.1%" },
    ],
  ],
  dataSettingsConfig: [
    {
      name: "name",
      type: "select",
    },
    {
      name: "value",
      type: "select",
    },
    {
      name: "color",
      type: "select",
    },
    {
      name: "label",
      type: "select",
    },
  ],
  customizeConfig: [
    {
      name: "title",
      type: "input",
    },
    {
      name: "titleFontSize",
      type: "number",
      min: 0,
      max: 3,
    },
    {
      name: "titleFontColor",
      type: "color",
    },
    {
      name: "height",
      type: "number",
      min: 100,
      max: 1000,
    },
  ],
  dataSettings: {
    name: 0,
    value: 1,
    color: 2,
    label: 3,
  },
  customizeSettings: {
    title: "Exports to EU countries, 2020",
    titleFontSize: "1",
    titleFontColor: "#0c5393",
    height: 300,
  },
};
