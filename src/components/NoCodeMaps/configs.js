export const noCodeMapsCallback = (data, dataSettings, customizeSettings) => {
  const tempData = [...data];
  const header = tempData.shift();

  return {
    originalData: {
      ...customizeSettings,
      markers: tempData.map((el) => {
        return {
          markerOffset: el[dataSettings.markerOffset].value,
          markerOffsetX: el[dataSettings.markerOffsetX].value,
          name: el[dataSettings.name].value,
          coordinates: [
            el[dataSettings.longitude].value,
            el[dataSettings.latitude].value,
          ],
          radius: el[dataSettings.radius].value,
          fontColor: el[dataSettings.fontColor].value,
          fontSize: el[dataSettings.fontSize].value,
          markerColor: el[dataSettings.markerColor].value,
        };
      }),
    },
  };
};

export const noCodeMapsData = {
  data: [
    [
      { value: "Name" },
      { value: "Latitude" },
      { value: "Longitude" },
      { value: "Marker Y" },
      { value: "Marker X" },
      { value: "Radius" },
      { value: "Font Color" },
      { value: "Font Size" },
      { value: "Marker Color" },
    ],
    [
      { value: "Pekin" },
      { value: "40.5675" },
      { value: "89.6407" },
      { value: "-15" },
      { value: "-10" },
      { value: "10" },
      { value: "black" },
      { value: "10" },
      { value: "#F00" },
    ],
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
      name: "type",
      type: "select",
      data: [
        "GlobalMap",
        "Asia",
        "CanadaMap",
        "ChinaMap",
        "EuropeMap",
        "Moldova",
        "JapanMap",
        "TurkeyMap",
        "UkMap",
        "GermanyMap",
        "ManchesterMap",
        "FranceMap",
        "ChisinauMap",
        "MenaMap",
        "NorthIrelandMap",
        "ScotlandMap",
        "WalesMap",
        "LondonMap",
        "SouthKorea",
        "TorontoMap",
        "OntarioMap",
        "SwitzerlandMap",
        "UAEMap",
        "IsraelMap",
        "MiamiMap",
        "FloridaMap",
      ],
    },
    {
      name: "title",
      type: "input",
    },
    {
      name: "titleColor",
      type: "color",
    },
    {
      name: "titleSize",
      type: "number",
      min: 0,
      max: 20,
    },

    {
      name: "mainColor",
      type: "color",
    },
    {
      name: "mainColor2",
      type: "color",
    },
    {
      name: "hover",
      type: "color",
    },
    {
      name: "lineColor",
      type: "color",
    },
    {
      name: "lineWidth",
      type: "number",
      min: 0,
      max: 2,
    },
  ],
  dataSettings: {
    markerOffset: 3,
    markerOffsetX: 4,
    name: 0,
    latitude: 1,
    longitude: 2,
    radius: 5,
    fontColor: 6,
    fontSize: 7,
    markerColor: 8,
  },
  customizeSettings: {
    type: "GlobalMap",
    mainColor: "#0c5393",
    mainColor2: "white",
    hover: "#3b729f",
    lineColor: "black",
    lineWidth: 0.2,
    title: "Map",
    titleSize: 2,
    titleColor: "#0c5393",
  },
};
