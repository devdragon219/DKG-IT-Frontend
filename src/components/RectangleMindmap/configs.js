function removeEmptyItemsAndSubArrays(arr) {
  return arr
    .map((subArray) => subArray.filter((item) => item.value !== ""))
    .filter((subArray) => subArray.length > 0);
}

function getNonRepeatingValues(data, index) {
  const countMap = new Map();

  data?.forEach((item) => {
    const value = item?.[index]?.value;
    countMap.set(value, (countMap.get(value) || 0) + 1);
  });

  let nonRepeatingValues = [];
  countMap.forEach((count, value) => {
    nonRepeatingValues.push(value);
  });

  return nonRepeatingValues;
}

function filterByFifthElement(data, targetValue, index) {
  return data?.filter((item) => {
    return item?.[index]?.value === targetValue;
  });
}

export const rectangleMindmapCallback = (
  data,
  dataSettings,
  customizeSettings
) => {
  const tempData = removeEmptyItemsAndSubArrays(data);
  const header = tempData.shift();

  const rowsNumb = getNonRepeatingValues(tempData, dataSettings.colIndex);
  const filteredData = rowsNumb.map((num) => {
    return filterByFifthElement(tempData, num, dataSettings.colIndex);
  });

  return {
    originalData: {
      ...customizeSettings,
      isNewMode: true,
      data: filteredData.map((el) => {
        return el.map((item) => {
          return {
            name: item?.[dataSettings?.name]?.value,
            link: item?.[dataSettings?.link]?.value,
            percentage: item?.[dataSettings?.percentage]?.value,
          };
        });
      }),
    },
  };
};

export const rectangleMindmapData = {
  data: [
    [
      { value: "Name" },
      {
        value: "Link",
      },
      { value: "Percentage" },
      { value: "Col Index" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 20 },
      { value: "1" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 50 },
      { value: "1" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 30 },
      { value: "1" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 50 },
      { value: "2" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 25 },
      { value: "2" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 25 },
      { value: "2" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 40 },
      { value: "3" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 30 },
      { value: "3" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 30 },
      { value: "3" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 20 },
      { value: "4" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 40 },
      { value: "4" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 40 },
      { value: "4" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 50 },
      { value: "5" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 25 },
      { value: "5" },
    ],
    [
      { value: "Longevity Ecosystem" },
      {
        value: "https://www.w3schools.com/",
      },
      { value: 25 },
      { value: "5" },
    ],
  ],
  dataSettingsConfig: [
    {
      name: "name",
      type: "select",
    },
    {
      name: "link",
      type: "select",
    },
    {
      name: "percentage",
      type: "select",
    },
    {
      name: "colIndex",
      type: "select",
    },
  ],
  customizeConfig: [
    {
      name: "borderColor",
      type: "color",
    },
    {
      name: "textColor",
      type: "color",
    },
  ],
  dataSettings: {
    name: 0,
    link: 1,
    percentage: 2,
    colIndex: 3,
  },
  customizeSettings: {
    borderColor: "#3069a0",
    textColor: "#3069a0",
  },
};
