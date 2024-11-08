function removeEmptyItemsAndSubArrays(arr) {
  return arr
    .map((subArray) => subArray.filter((item) => item.value !== ""))
    .filter((subArray) => subArray.length > 0);
}

export const number18_1Callback = (data, dataSettings, customizeSettings) => {
  const tempData = removeEmptyItemsAndSubArrays(data);
  const header = tempData.shift();

  return {
    originalData: {
      country: customizeSettings.country,
      left_title_1: customizeSettings.left_title_1,
      left_title_2: customizeSettings.left_title_2,
      right_title_1: customizeSettings.right_title_1,
      right_title_2: customizeSettings.right_title_2,
      score: customizeSettings.score,
      score_text: customizeSettings.score_text,
      data: tempData.map((el) => {
        return {
          title: el[dataSettings?.title]?.value,
          points: el[dataSettings?.points]?.value,
          point_text: el[dataSettings?.point_text]?.value,
          items: el[dataSettings?.items]?.value.split(";"),
          factors: el[dataSettings?.factors]?.value.split(";"),
        };
      }),
    },
  };
};

export const number18_1Data = {
  data: [
    [
      {
        value: "Title",
      },
      {
        value: "Points",
      },
      {
        value: "Point Text",
      },
      {
        value: "Items",
      },
      {
        value: "Factors",
      },
    ],
    [
      {
        value: "COVID-19 Regional Resiliency",
      },
      {
        value: "89",
      },
      {
        value: "Points",
      },
      {
        value:
          "Infection Spread Risk;Culture Specifics and Societal Discipline;Level of Modern Sanitization Methods;Demography;Chronic Diseases;Societal Risks",
      },
      {
        value: "0.0909;0.1161;0.15;0.0689;0.0751;0.136",
      },
    ],
    [
      {
        value: "COVID-19 Emergency Preparedness",
      },
      {
        value: "118",
      },
      {
        value: "Points",
      },
      {
        value:
          "Social Emergency Resilience;Emergency Military Mobilization Experience;Surveillance Capabilities (Scale, Scope and Technological Sophistication);Previous National Emergency Experience",
      },
      {
        value: "0.2025;0.1533;0.2025;0.23",
      },
    ],
    [
      {
        value: "COVID-19 Monitoring and Detection",
      },
      {
        value: "116",
      },
      {
        value: "Points",
      },
      {
        value:
          "Monitoring Systems and Disaster Management;Scope of Diagnosic Methods;Testing Efficiency;AI for Diagnostics and Prognostics;Government Surveillance Technology for Monitoring;Reliability and Transparency of Data",
      },
      {
        value: "0.18;0.15;0.092;0.15;0.85;0.1133",
      },
    ],
    [
      {
        value: "COVID-19 Government Efficiency of Risk Management",
      },
      {
        value: "181",
      },
      {
        value: "Points",
      },
      {
        value:
          "Level of Security and Defense Advancement;Rapid Emergency Mobilization;Efficiency of Government Structure;Economic Sustainability;Legislative Efficiency;Political Stability",
      },
      {
        value: "0.17;0.1543;0.145;0.0785;0.12;0.1543",
      },
    ],
    [
      {
        value: "COVID-19 Quarantine Efficiency",
      },
      {
        value: "131",
      },
      {
        value: "Points",
      },
      {
        value:
          "Scale of Quarantine;Quarantine Timeline;Criminal Penalties for Violating Quarantine;Economic Support for quarantined Citizens;Economic and Supply Chain Freezing;Travel Restrictions",
      },
      {
        value: "0.1651;0.0567;0.0759;0.072;0.124;0.1021",
      },
    ],
    [
      {
        value: "COVID-19 Healthcare Readiness",
      },
      {
        value: "81",
      },
      {
        value: "Points",
      },
      {
        value:
          "COVID-19 Equipment Availability;Mobilization of New Healthcare Resources;Quantity and Quality of Medical Staff;Level of Healthcare Progressiveness;Level of Technological Advancement;Epidemiology System Level of Development",
      },
      {
        value: "0.1047;0.1458;0.1341;0.0929;0.0196;0.1246",
      },
    ],
  ],
  dataSettingsConfig: [
    {
      name: "title",
      type: "select",
    },
    {
      name: "points",
      type: "select",
    },
    {
      name: "point_text",
      type: "select",
    },
    {
      name: "items",
      type: "select",
    },
    {
      name: "factors",
      type: "select",
    },
  ],
  customizeConfig: [
    {
      name: "country",
      type: "input",
    },
    {
      name: "left_title_1",
      type: "input",
    },
    {
      name: "left_title_2",
      type: "input",
    },
    {
      name: "right_title_1",
      type: "input",
    },
    {
      name: "right_title_2",
      type: "input",
    },
    {
      name: "score_text",
      type: "input",
    },
    {
      name: "score",
      type: "number",
      min: 1,
      max: 1000000,
    },
  ],
  dataSettings: {
    title: 0,
    points: 1,
    point_text: 2,
    items: 3,
    factors: 4,
  },
  customizeSettings: {
    country: "Australia",
    left_title_1: "Australia: #8 Region",
    left_title_2: "by COVID-19 Safery Ranking",
    right_title_1: "Tier 1 Countries & Regions",
    right_title_2: "June 3, 2020",
    score: 716,
    score_text: "Cumulative score",
  },
};
