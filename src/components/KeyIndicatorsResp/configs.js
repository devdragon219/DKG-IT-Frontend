function removeEmptyItemsAndSubArrays(arr) {
  return arr
    .map((subArray) => subArray.filter((item) => item.value !== ""))
    .filter((subArray) => subArray.length > 0);
}

function getNonRepeatingValues(data, index) {
  const countMap = new Map();

  data.forEach((item) => {
    const value = item[index].value;
    countMap.set(value, (countMap.get(value) || 0) + 1);
  });
  console.log(countMap, 1111);

  let nonRepeatingValues = [];
  countMap.forEach((count, value) => {
    nonRepeatingValues.push(value);
  });

  return nonRepeatingValues;
}

function filterByFifthElement(data, targetValue, index) {
  return data.filter((item) => item[4].value === targetValue);
}

export const keyIndicatorsRespCallback = (
  data,
  dataSettings,
  customizeSettings
) => {
  const tempData = removeEmptyItemsAndSubArrays(data);
  const header = tempData.shift();

  const rowsNumb = getNonRepeatingValues(tempData, dataSettings.rowIndex);
  const filteredData = rowsNumb.map((num) => {
    return filterByFifthElement(tempData, num, dataSettings.rowIndex);
  });

  return {
    originalData: {
      ...customizeSettings,
      rows: filteredData.map((el) => {
        return el.map((item) => {
          return {
            header: item[dataSettings.header].value,
            value: item[dataSettings.value].value,
            borderColor: item[dataSettings.borderColor].value,
            textColor: item[dataSettings.textColor].value,
          };
        });
      }),
    },
  };
};

export const keyIndicatorsRespData = {
  data: [
    [
      { value: "Header" },
      {
        value: "Value",
      },
      { value: "Border Color" },
      { value: "Text Color" },
      { value: "Row Index" },
    ],
    [
      { value: "ECOLOGY" },
      {
        value: "19th place",
      },
      { value: "#3f40b9" },
      { value: "#6c53cb" },
      { value: "1" },
    ],
    [
      { value: "ECOLOGY" },
      {
        value: "19th place",
      },
      { value: "#3f40b9" },
      { value: "#6c53cb" },
      { value: "1" },
    ],
    [
      { value: "ECONOMY" },
      {
        value: "19th place",
      },
      { value: "#3f40b9" },
      { value: "#6c53cb" },
      { value: "1" },
    ],
    [
      { value: "GOVCARE" },
      {
        value: "13th place",
      },
      { value: "#f1c395" },
      { value: "#e86177" },
      { value: "2" },
    ],
    [
      { value: "HEALTH" },
      {
        value: "68th place",
      },
      { value: "#f1c395" },
      { value: "#e86177" },
      { value: "2" },
    ],
    [
      { value: "HEALTH" },
      {
        value: "13th place",
      },
      { value: "#f1c395" },
      { value: "#e86177" },
      { value: "2" },
    ],
  ],
  dataSettingsConfig: [
    {
      name: "header",
      type: "select",
    },
    {
      name: "value",
      type: "select",
    },
    {
      name: "borderColor",
      type: "select",
    },
    {
      name: "textColor",
      type: "select",
    },
    {
      name: "rowIndex",
      type: "select",
    },
  ],
  customizeConfig: [
    {
      name: "title",
      type: "input",
    },
    {
      name: "titleColor",
      type: "color",
    },
    {
      name: "backgroundColor",
      type: "color",
    },
    {
      name: "titleFontSize",
      type: "number",
      min: 0,
      max: 3,
    },
  ],
  dataSettings: {
    header: 0,
    value: 1,
    borderColor: 2,
    textColor: 3,
    rowIndex: 4,
  },
  customizeSettings: {
    title: "Longevity Governance Index",
    backgroundColor: "white",
    titleColor: "#0c5392",
    titleFontSize: "0.04",
  },
};
