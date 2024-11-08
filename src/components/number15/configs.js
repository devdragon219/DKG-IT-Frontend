export const number15Callback = (data, dataSettings, customizeSettings) => {
  const tempData = [...data];
  const header = tempData.shift();

  return {
    originalData: {
      name: customizeSettings.title,
      title_1: customizeSettings.title,
      itemsInColumn: customizeSettings.itemsInColumn,
      isItemsInColumnTwo: customizeSettings.isItemsInColumnTwo,
      numberOfColumns: customizeSettings.numberOfColumns,
      data: tempData.map((el) => {
        return {
          name: el?.[dataSettings?.name]?.value,
          value: el?.[dataSettings?.values]?.value,
        };
      }),
    },
  };
};

export const number15Data = {
  data: [
    [{ value: "Name" }, { value: "Value" }],
    [{ value: "AI Leaders" }, { value: "7500" }],
    [{ value: "AI Books" }, { value: "200" }],
    [{ value: "AI Communities" }, { value: "250" }],
    [{ value: "Open Source Collection" }, { value: "8500" }],
    [{ value: "Benchmarks" }, { value: "550" }],
    [{ value: "Mindmaps" }, { value: "150" }],
    [{ value: "AI Tools" }, { value: "7200" }],
    [{ value: "API Platforms" }, { value: "150" }],
    [{ value: "AI Financials" }, { value: "120" }],
  ],
  dataSettingsConfig: [
    {
      name: "name",
      type: "select",
    },
    {
      name: "values",
      type: "select",
    },
  ],
  customizeConfig: [
    {
      name: "title",
      type: "input",
    },
    {
      name: "itemsInColumn",
      type: "number",
      min: 2,
      max: 3,
    },
    {
      name: "numberOfColumns",
      type: "number",
      min: 2,
      max: 3,
    },
    {
      name: "isItemsInColumnTwo",
      type: "boolean",
    },
  ],
  dataSettings: {
    name: 0,
    values: 1,
  },
  customizeSettings: {
    title: "Title",
    itemsInColumn: 3,
    numberOfColumns: 3,
    isItemsInColumnTwo: true,
  },
};
