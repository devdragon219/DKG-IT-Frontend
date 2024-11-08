export const mindMapLiveDataCallback = (values, liveData, setLiveData) => {
  const { title, x, y } = values;

  setLiveData((prev) => {
    return {
      ...prev,
      [title]: {
        x,
        y,
      },
    };
  });
};

export const mindMapDesignerCallback = (
  data,
  dataSettings,
  customizeSettings,
  liveData
) => {
  const keys = Object.keys(data);

  return {
    originalData: {
      ...customizeSettings.main,
      numberOfColumns: customizeSettings.numberOfColumns,
      data: keys.map((key) => {
        const tempData = [...data[key]];
        const selectedDataSettings = dataSettings[key];
        const header = tempData.shift();
        return {
          ...customizeSettings[key],
          data: tempData.map((el) => {
            const data = {
              value: el[selectedDataSettings.value].value,
              link: el[selectedDataSettings.link].value,
              title: el[selectedDataSettings.title].value,
              color: el[selectedDataSettings.color].value,
              width: el[selectedDataSettings.width].value,
              height: el[selectedDataSettings.height].value,
            };
            const title = el[selectedDataSettings.title].value;
            if (liveData?.[title]) {
              data.correctionX = liveData?.[title]?.x;
              data.correctionY = liveData?.[title]?.y;
            }
            return data;
          }),
        };
      }),
    },
  };
};

export const mindMapDesignerData = {
  isMultiple: true,
  data: {
    key1: [
      [
        { value: "value" },
        { value: "link" },
        { value: "title" },
        { value: "color" },
        { value: "width" },
        { value: "height" },
      ],
      [
        { value: "77" },
        { value: "https://www.google.com/search?q=Companies" },
        { value: "End-to-end Drug Development" },
        { value: "#3979d9" },
        { value: "" },
        { value: "" },
      ],
      [
        { value: "30" },
        { value: "https://www.google.com/search?q=Companies" },
        { value: "Preclinical Development" },
        { value: "#3979d9" },
        { value: "" },
        { value: "" },
      ],
    ],
    key2: [
      [
        { value: "value" },
        { value: "link" },
        { value: "title" },
        { value: "color" },
        { value: "width" },
        { value: "height" },
      ],
      [
        { value: "77" },
        { value: "https://www.google.com/search?q=Companies" },
        { value: "Investors" },
        { value: "#0098a9" },
        { value: "" },
        { value: "" },
      ],
    ],
    key3: [
      [
        { value: "value" },
        { value: "link" },
        { value: "title" },
        { value: "color" },
        { value: "width" },
        { value: "height" },
      ],
      [
        { value: "33" },
        { value: "https://www.google.com/search?q=Companies" },
        { value: "Tech" },
        { value: "#ffac3e" },
        { value: "" },
        { value: "" },
      ],
      [
        { value: "33" },
        { value: "https://www.google.com/search?q=Companies" },
        { value: "CRO" },
        { value: "#ffac3e" },
        { value: "" },
        { value: "" },
      ],
      [
        { value: "33" },
        { value: "https://www.google.com/search?q=Companies" },
        { value: "Pharma" },
        { value: "#ffac3e" },
        { value: "" },
        { value: "" },
      ],
    ],
  },
  dataSettingsConfig: [
    {
      name: "value",
      type: "select",
    },
    {
      name: "link",
      type: "select",
    },
    {
      name: "title",
      type: "select",
    },
    {
      name: "color",
      type: "select",
    },
  ],
  customizeConfig: [
    {
      name: "innerRadius",
      type: "number",
      min: 0,
      max: 500,
    },
    {
      name: "outerRadius",
      type: "number",
      min: 0,
      max: 500,
    },
    {
      name: "name",
      type: "input",
    },
    {
      name: "link",
      type: "input",
    },
    {
      name: "color",
      type: "color",
    },
    {
      name: "shiftArc",
      type: "number",
      min: 1,
      max: 20,
    },
    {
      name: "strokeWidth",
      type: "number",
      min: 1,
      max: 10,
    },
    {
      name: "numberOfSectors",
      type: "number",
      min: 100,
      max: 1000,
    },
  ],
  customizeConfigMain: [
    {
      name: "title",
      type: "input",
    },
    {
      name: "viewMoreLink",
      type: "input",
    },
    {
      name: "displayTable",
      type: "boolean",
    },
    {
      name: "needBorder",
      type: "boolean",
    },
    {
      name: "strokeWidthLine",
      type: "number",
      min: 1,
      max: 10,
    },
    {
      name: "startAngle",
      type: "number",
      min: 0,
      max: 30,
    },
    {
      name: "paddingLeft",
      type: "number",
      min: 0,
      max: 200,
    },
    {
      name: "paddingBottom",
      type: "number",
      min: 0,
      max: 200,
    },
    {
      name: "paddingRight",
      type: "number",
      min: 0,
      max: 200,
    },
    {
      name: "paddingTop",
      type: "number",
      min: 0,
      max: 200,
    },
    {
      name: "height",
      type: "number",
      min: 300,
      max: 1000,
    },
    {
      name: "width",
      type: "number",
      min: 300,
      max: 1000,
    },
  ],
  dataSettings: {
    key1: {
      value: 0,
      link: 1,
      title: 2,
      color: 3,
      width: 4,
      height: 5,
    },
    key2: {
      value: 0,
      link: 1,
      title: 2,
      color: 3,
      width: 4,
      height: 5,
    },
    key3: {
      value: 0,
      link: 1,
      title: 2,
      color: 3,
      width: 4,
      height: 5,
    },
  },
  customizeSettings: {
    main: {
      width: 600,
      height: 600,
      paddingTop: 50,
      paddingRight: 100,
      paddingBottom: 50,
      paddingLeft: 200,
      startAngle: 0,
      strokeWidthLine: 5,
      needBorder: true,
      displayTable: true,
      viewMoreLink: "www.google.com",
      title: "Global Longevity Ecosystem 2022",
    },
    key1: {
      innerRadius: 188,
      outerRadius: 300,
      name: "Companies",
      link: "https://www.google.com/search?q=Companies",
      color: "#3979d9",
      shiftArc: 8,
      strokeWidth: 2,
      numberOfSectors: 555,
    },
    key2: {
      innerRadius: 100,
      outerRadius: 180,
      name: "Investors",
      link: "https://www.google.com/search?q=Investors",
      color: "#0098a9",
      shiftArc: 8,
      strokeWidth: 2,
      numberOfSectors: 333,
    },
    key3: {
      innerRadius: 8,
      outerRadius: 92,
      name: "Corporations",
      link: "https://www.google.com/search?q=Corporations",
      color: "#ffac3e",
      shiftArc: 8,
      strokeWidth: 2,
      numberOfSectors: 222,
    },
  },
};
