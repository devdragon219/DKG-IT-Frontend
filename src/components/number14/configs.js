function removeEmptyItemsAndSubArrays(arr) {
  return arr
    .map((subArray) => subArray.filter((item) => item.value !== ""))
    .filter((subArray) => subArray.length > 0);
}

export const number14Callback = (data, dataSettings, customizeSettings) => {
  const tempData = removeEmptyItemsAndSubArrays(data);
  const header = tempData.shift();

  return {
    originalData: {
      name: customizeSettings?.title,
      doNotSort: customizeSettings?.doNotSort,
      itemsInColumn: customizeSettings?.itemsInColumn,
      numberOfColumns: customizeSettings?.numberOfColumns,
      data: tempData.map((el) => {
        return {
          weight: el[dataSettings?.weight]?.value,
          weight_text: el[dataSettings?.weight_text]?.value,
          title: el[dataSettings?.title]?.value,
          items: el[dataSettings?.items]?.value.split(";"),
          factors: el[dataSettings?.factors]?.value.split(";"),
        };
      }),
    },
  };
};

export const number14Data = {
  data: [
    [
      {
        value: "Weight",
      },
      {
        value: "Weight Text",
      },
      {
        value: "Title",
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
        value: "2.2",
      },
      {
        value: "Text",
      },
      {
        value: "COVID-19 Quarantine Efficiency",
      },
      {
        value:
          "Scale of Quarantine;Quarantine Timeline;Criminal Penalties for Violating Quarantine;Economic Support for quarantined Citizens;Economic and Supply Chain Freezing;Travel Restrictions",
      },
      {
        value: "0.18;0.17;0.15;0.18;0.155;0.175",
      },
    ],
    [
      {
        value: "2.2",
      },
      {
        value: "Text",
      },
      {
        value: "COVID-19 Government Efficiency of Risk Management",
      },
      {
        value:
          "Level of Security and Defense Advancement;Rapid Emergency Mobilization;Efficiency of Government Structure;Economic Sustainability;Legislative Efficiency;Political Stability",
      },
      {
        value: "0.17;0.16;0.18;0.17;0.16;0.16",
      },
    ],
    [
      {
        value: "1.5",
      },
      {
        value: "Text",
      },
      {
        value: "COVID-19 Monitoring and Detection",
      },
      {
        value:
          "Monitoring Systems and Disaster Management;Scope of Diagnosic Methods;Testing Efficiency;AI for Diagnostics and Prognostics;Government Surveillance Technology for Monitoring;Reliability and Transparency of Data",
      },
      {
        value: "0.18;0.15;0.18;0.15;0.17;0.17",
      },
    ],
    [
      {
        value: "1.5",
      },
      {
        value: "Text",
      },
      {
        value: "COVID-19 Emergency Preparedness",
      },
      {
        value:
          "Social Emergency Resilience;Emergency Military Mobilization Experience;Surveillance Capabilities (Scale Scope and Technological Sophistication);Previous National Emergency Experience",
      },
      {
        value: "0.27;0.23;0.27;0.23",
      },
    ],
    [
      {
        value: "1.3",
      },
      {
        value: "Text",
      },
      {
        value: "COVID-19 Healthcare Readiness",
      },
      {
        value:
          "COVID-19 Equipment Availability;Mobilization of New Healthcare Resources;Quantity and Quality of Medical Staff;Level of Healthcare Progressiveness;Level of Technological Advancement;Epidemiology System Level of Development",
      },
      {
        value: "0.18;0.175;0.16;0.15;0.17;0.165",
      },
    ],
    [
      {
        value: "1.3",
      },
      {
        value: "Text",
      },
      {
        value: "COVID-19 Regional Resiliency",
      },
      {
        value:
          "Infection Spread Risk;Culture Specifics and Societal Discipline;Level of Modern Sanitization Methods;Demography;Chronic Diseases;Societal Risks",
      },
      {
        value: "0.065;0.18;0.15;0.155;0.18;0.17",
      },
    ],
    [
      {
        value: "",
      },
    ],
  ],
  dataSettingsConfig: [
    {
      name: "title",
      type: "select",
    },
    {
      name: "weight",
      type: "select",
    },
    {
      name: "weight_text",
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
      name: "doNotSort",
      type: "boolean",
    },
  ],
  dataSettings: {
    title: 2,
    weight: 0,
    weight_text: 1,
    items: 3,
    factors: 4,
  },
  customizeSettings: {
    title: "Index Category Weight",
    itemsInColumn: 3,
    numberOfColumns: 2,
    doNotSort: false,
  },
};
