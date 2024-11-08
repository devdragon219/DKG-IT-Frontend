function removeEmptyItemsAndSubArrays(arr) {
  return arr
    .map((subArray) => subArray.filter((item) => item.value !== ""))
    .filter((subArray) => subArray.length > 0);
}

function transformData(rawData, dataSettings) {
  // Skip the first row as it contains headers
  const entries = rawData.slice(1);

  // This will hold our final structured data
  const structuredData = [];

  // Helper to find or create a sector
  function findOrCreateSector(sectorLabel) {
    let sector = structuredData.find((s) => s.sectorLabel === sectorLabel);
    if (!sector) {
      sector = { sectorLabel, groups: [] };
      structuredData.push(sector);
    }
    return sector;
  }

  // Helper to find or create a group within a sector
  function findOrCreateGroup(sector, groupLabel) {
    let group = sector.groups.find((g) => g.groupLabel === groupLabel);
    if (!group) {
      group = { groupLabel, companies: [] };
      sector.groups.push(group);
    }
    return group;
  }

  // Process each entry
  entries.forEach((entry) => {
    const company = {
      name: entry[dataSettings.name].value,
      image: entry[dataSettings.image].value,
      description: entry[dataSettings.description].value,
      website: entry[dataSettings.website].value,
      year: Number(entry[dataSettings.year].value),
    };
    const groupLabel = entry[dataSettings.groupLabel].value;
    const sectorLabel = entry[dataSettings.sectorLabel].value;

    // Find or create sector and group, then add the company
    const sector = findOrCreateSector(sectorLabel);
    const group = findOrCreateGroup(sector, groupLabel);
    group.companies.push(company);
  });

  return structuredData;
}

export const circularMindmap3DNoCodeCallback = (data, dataSettings, customizeSettings) => {
  // const tempData = removeEmptyItemsAndSubArrays(data);
  // const header = tempData.shift();
  const newData = transformData(data, dataSettings);

  const {
    withTimeLine,
    withLegend,
    density,
    bgColor,
    largeCenterSphere,
    fontColor,
    ...config
  } = customizeSettings;
  return {
    originalData: {
      withTimeLine,
      withLegend,
      maindMapConfig: { density, bgColor, largeCenterSphere, fontColor },
      config: { ...config },
      fullscreen: true,
      data: newData,
    },
  };
};

export const circularMindmap3DNoCodeData = {
  data: [
    [
      { value: "name" },
      { value: "image" },
      { value: "description" },
      { value: "website" },
      { value: "year" },
      { value: "Group Label" },
      { value: "Sector Label" },
    ],
    [
      { value: "ByteDance" },
      { value: "companies/Byte Dance.jpeg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2005" },
      { value: "Hub" },
      { value: "Hubs" },
    ],
    [
      { value: "Namei" },
      { value: "companies/Namei.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2003" },
      { value: "Others" },
      { value: "Companies" },
    ],
    [
      { value: "Vscene" },
      { value: "companies/Vscene.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2004" },
      { value: "Others" },
      { value: "Companies" },
    ],
    [
      { value: "Nutstore" },
      { value: "companies/Nutstore.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2006" },
      { value: "Others" },
      { value: "Companies" },
    ],
    [
      { value: "Ocean Engine" },
      { value: "companies/Ocean Engine.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2012" },
      { value: "Others" },
      { value: "Companies" },
    ],
    [
      { value: "Geogif" },
      { value: "companies/Geogif.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2023" },
      { value: "Others" },
      { value: "Companies" },
    ],
    [
      { value: "LevelupAI" },
      { value: "companies/LevelupAI.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2023" },
      { value: "Others" },
      { value: "Companies" },
    ],
    [
      { value: "Mokun Technology" },
      { value: "companies/Mokun Technology.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2003" },
      { value: "Others" },
      { value: "Companies" },
    ],
    [
      { value: "Terark" },
      { value: "companies/Terark.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2009" },
      { value: "Others" },
      { value: "Companies" },
    ],
    [
      { value: "Smartisan" },
      { value: "companies/Smartisan.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2016" },
      { value: "Others" },
      { value: "Companies" },
    ],
    [
      { value: "Tuchong" },
      { value: "companies/Tuchong.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2007" },
      { value: "Others" },
      { value: "Companies" },
    ],
    [
      { value: "HaoHao XueXi" },
      { value: "companies/HaoHao XueXi.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2019" },
      { value: "Education" },
      { value: "Companies" },
    ],
    [
      { value: "Minerva project" },
      { value: "companies/Minerva project.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2018" },
      { value: "Education" },
      { value: "Companies" },
    ],
    [
      { value: "Xiaoyang" },
      { value: "companies/Xiaoyang.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2002" },
      { value: "Education" },
      { value: "Companies" },
    ],
    [
      { value: "aiKID" },
      { value: "companies/aiKID.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2013" },
      { value: "Education" },
      { value: "Companies" },
    ],
    [
      { value: "GoGoKid" },
      { value: "companies/GoGoKid.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2007" },
      { value: "Education" },
      { value: "Companies" },
    ],
    [
      { value: "Live.me" },
      { value: "companies/Live.me.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2022" },
      { value: "Social media" },
      { value: "Companies" },
    ],
    [
      { value: "Helo" },
      { value: "companies/Helo.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2015" },
      { value: "Social media" },
      { value: "Companies" },
    ],
    [
      { value: "Ulikecam" },
      { value: "companies/Ulikecam.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2009" },
      { value: "Social media" },
      { value: "Companies" },
    ],
    [
      { value: "FaceU" },
      { value: "companies/FaceU.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2017" },
      { value: "Social media" },
      { value: "Companies" },
    ],
    [
      { value: "Feishu/Lark" },
      { value: "companies/Feishu  Lark.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2003" },
      { value: "Social media" },
      { value: "Companies" },
    ],
    [
      { value: "Doushan" },
      { value: "companies/Doushan.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2023" },
      { value: "Social media" },
      { value: "Companies" },
    ],
    [
      { value: "Douyin/ TikTok" },
      { value: "companies/Douyin  TikTok.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2007" },
      { value: "Social media (short video)" },
      { value: "Companies" },
    ],
    [
      { value: "Xigua" },
      { value: "companies/Xigua.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2005" },
      { value: "Social media (short video)" },
      { value: "Companies" },
    ],
    [
      { value: "Flipagram" },
      { value: "companies/Flipagram.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2014" },
      { value: "Social media (short video)" },
      { value: "Companies" },
    ],
    [
      { value: "Huoshan" },
      { value: "companies/Huoshan.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2023" },
      { value: "Social media (short video)" },
      { value: "Companies" },
    ],
    [
      { value: "Vigo" },
      { value: "companies/Vigo.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2014" },
      { value: "Social media (short video)" },
      { value: "Companies" },
    ],
    [
      { value: "Toutiao" },
      { value: "companies/Toutiao.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2003" },
      { value: "Content sharing" },
      { value: "Companies" },
    ],
    [
      { value: "Topbuzz" },
      { value: "companies/Topbuzz.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2015" },
      { value: "Content sharing" },
      { value: "Companies" },
    ],
    [
      { value: "BABE" },
      { value: "companies/BABE.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2019" },
      { value: "Content sharing" },
      { value: "Companies" },
    ],
    [
      { value: "Dailyhunt" },
      { value: "companies/Dailyhunt.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2002" },
      { value: "Content sharing" },
      { value: "Companies" },
    ],
    [
      { value: "News Republic" },
      { value: "companies/News Republic.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2006" },
      { value: "Content sharing" },
      { value: "Companies" },
    ],
    [
      { value: "Dongchedi" },
      { value: "companies/Dongchedi.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2011" },
      { value: "Content sharing" },
      { value: "Companies" },
    ],
    [
      { value: "Hupu" },
      { value: "companies/Hupu.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2010" },
      { value: "Content sharing" },
      { value: "Companies" },
    ],
    [
      { value: "Baike" },
      { value: "companies/Baike.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2019" },
      { value: "Content sharing" },
      { value: "Companies" },
    ],
    [
      { value: "Bidewu" },
      { value: "companies/111.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2008" },
      { value: "Content sharing" },
      { value: "Companies" },
    ],
    [
      { value: "Pipix" },
      { value: "companies/Pipix.jpg" },
      { value: "ByteDance is a global incubator" },
      { value: "https://www.bytedance.com/en/" },
      { value: "2021" },
      { value: "Content sharing" },
      { value: "Companies" },
    ],
  ],
  dataSettingsConfig: [
    {
      name: "name",
      type: "select",
    },
    {
      name: "image",
      type: "select",
    },
    {
      name: "description",
      type: "select",
    },
    {
      name: "website",
      type: "select",
    },
    {
      name: "year",
      type: "select",
    },
    {
      name: "groupLabel",
      type: "select",
    },
    {
      name: "sectorLabel",
      type: "select",
    },
  ],
  customizeConfig: [
    {
      name: "withTimeLine",
      type: "boolean",
    },
    {
      name: "withLegend",
      type: "boolean",
    },
    {
      name: "mainColor",
      type: "color",
    },
    {
      name: "thumbRadius",
      type: "number",
      min: 10,
      max: 30,
    },
    {
      name: "markColor",
      type: "color",
    },
    {
      name: "markActiveColor",
      type: "color",
    },
    {
      name: "markRadius",
      type: "number",
      min: 5,
      max: 20,
    },
    {
      name: "labelFontSize",
      type: "number",
      min: 10,
      max: 30,
    },
    {
      name: "position",
      type: "select",
      data: ["bottom", "top"],
    },
    {
      name: "density",
      type: "number",
      min: 1,
      max: 10,
    },
    {
      name: "largeCenterSphere",
      type: "boolean",
    },
    {
      name: "bgColor",
      type: "color",
    },
    {
      name: "fontColor",
      type: "color",
    },
  ],
  dataSettings: {
    name: 0,
    image: 1,
    description: 2,
    website: 3,
    year: 4,
    groupLabel: 5,
    sectorLabel: 6,
  },
  customizeSettings: {
    withLegend: true,
    withTimeLine: true,
    mainColor: "#1976d2",
    thumbRadius: 15,
    markColor: "red",
    markActiveColor: "#1976d2",
    markRadius: 5,
    labelFontSize: 12,
    position: "bottom",
    density: 1,
    largeCenterSphere: false,
    bgColor: "#000000",
    fontColor: "#ffffff",
  },
};
