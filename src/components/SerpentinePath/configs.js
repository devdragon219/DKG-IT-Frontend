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

export const serpentinePathCallback = (
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
      customizeSettings,
      data: filteredData.map((el) => {
        return el.map((item) => {
          return {
            title: item[dataSettings.title].value,
            text: item[dataSettings.text].value,
            width: item[dataSettings.width].value,
            height: item[dataSettings.height].value,
          };
        });
      }),
    },
  };
};

export const serpentinePathData = {
  data: [
    [
      { value: "Title" },
      {
        value: "Text",
      },
      { value: "Width" },
      { value: "Height" },
      { value: "Row Index" },
    ],
    [
      { value: "1 title" },
      {
        value:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      { value: "200" },
      { value: "200" },
      { value: "1" },
    ],
    [
      { value: "2 title" },
      { value: "It is a long established fact that" },
      { value: "200" },
      { value: "100" },
      { value: "1" },
    ],
    [
      { value: "3 title" },
      { value: "It is a long established fact that" },
      { value: "200" },
      { value: "100" },
      { value: "2" },
    ],
    [
      { value: "4 title" },
      { value: "It is a long established fact that" },
      { value: "200" },
      { value: "100" },
      { value: "2" },
    ],
    [
      { value: "5 title" },
      { value: "It is a long established fact that" },
      { value: "200" },
      { value: "100" },
      { value: "2" },
    ],
    [
      { value: "6 title" },
      { value: "It is a long established fact that" },
      { value: "200" },
      { value: "100" },
      { value: "3" },
    ],
    [
      { value: "7 title" },
      { value: "It is a long established fact that" },
      { value: "200" },
      { value: "100" },
      { value: "3" },
    ],
  ],
  dataSettingsConfig: [
    {
      name: "title",
      type: "select",
    },
    {
      name: "text",
      type: "select",
    },
    {
      name: "width",
      type: "select",
    },
    {
      name: "height",
      type: "select",
    },
    {
      name: "rowIndex",
      type: "select",
    },
  ],
  customizeConfig: [
    {
      name: "titleColor",
      type: "color",
    },
    {
      name: "titleSize",
      type: "number",
      min: 6,
      max: 30,
    },
    {
      name: "textColor",
      type: "color",
    },
    {
      name: "textSize",
      type: "number",
      min: 6,
      max: 30,
    },
    {
      name: "arrowColor",
      type: "color",
    },
    {
      name: "rectColor",
      type: "color",
    },
  ],
  dataSettings: {
    title: 0,
    text: 1,
    width: 2,
    height: 3,
    rowIndex: 4,
  },
  customizeSettings: {
    titleColor: "#165894",
    textColor: "#165894",
    arrowColor: "#165894",
    rectColor: "#165894",
    titleSize: 20,
    textSize: 18,
  },
};
