function findUniqueValuesByColumn(data, columnIndex) {
  const uniqueValues = new Set();

  // Skip the header row and iterate over the rest
  for (let i = 1; i < data.length; i++) {
    const value = data[i][columnIndex].value;
    if (value) {
      uniqueValues.add(value);
    }
  }

  return Array.from(uniqueValues);
}

function filterByFifthElement(data, targetValue, index) {
  return data?.filter((item) => {
    return item?.[index]?.value === targetValue;
  });
}

export const adminButtonsCallback = (data, dataSettings, customizeSettings) => {
  const tempData = [...data];
  const header = tempData.shift();

  const rowsNumb = findUniqueValuesByColumn(tempData, dataSettings.Header);
  const filteredData = rowsNumb.map((num) => {
    return filterByFifthElement(tempData, num, dataSettings.Header);
  });

  return {
    originalData: {
      ...customizeSettings,
      isNewMode: true,
      data: filteredData.map((el) => {
        return {
          header: el[0]?.[dataSettings?.Header]?.value,
          color: el[0]?.[dataSettings?.Color]?.value,
          buttons: el?.map((item) => {
            return {
              number: item?.[dataSettings?.number]?.value,
              hideModalText: item?.[dataSettings?.HideModalText]?.value,
              textMessage: item?.[dataSettings?.TextMessage]?.value,
              detailedtext: item?.[dataSettings?.DetailedText]?.value,
              diagramLink: item?.[dataSettings?.DiagramLink]?.value,
              color: item?.[dataSettings?.Color]?.value,
            };
          }),
        };
      }),
    },
  };
};

export const adminButtonsData = {
  data: [
    [
      {
        value: "number",
      },
      {
        value: "hideModalText",
      },
      {
        value: "textMessage",
      },
      {
        value: "detailedtext",
      },
      {
        value: "diagramLink",
      },
      {
        value: "header",
      },
      {
        value: "color",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Books",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Scientific & IT Resources",
      },
      {
        value: "#004DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Books",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Scientific & IT Resources",
      },
      {
        value: "#004DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Books",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Scientific & IT Resources",
      },
      {
        value: "#004DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Books",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Scientific & IT Resources",
      },
      {
        value: "#004DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Books",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Scientific & IT Resources",
      },
      {
        value: "#004DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Books",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Scientific & IT Resources",
      },
      {
        value: "#004DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Books",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Scientific & IT Resources",
      },
      {
        value: "#004DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Books",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Scientific & IT Resources",
      },
      {
        value: "#004DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Conferences in Switzerland",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Education & Collaboration",
      },
      {
        value: "#05A591",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Conferences in Switzerland",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Education & Collaboration",
      },
      {
        value: "#05A592",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Conferences in Switzerland",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Education & Collaboration",
      },
      {
        value: "#05A593",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Conferences in Switzerland",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Education & Collaboration",
      },
      {
        value: "#05A594",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Conferences in Switzerland",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Education & Collaboration",
      },
      {
        value: "#05A595",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Conferences in Switzerland",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Education & Collaboration",
      },
      {
        value: "#05A596",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Conferences in Switzerland",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Education & Collaboration",
      },
      {
        value: "#05A597",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Conferences in Switzerland",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Education & Collaboration",
      },
      {
        value: "#05A598",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Switzerland Leaders Interviews",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Media & Trends",
      },
      {
        value: "#FF4C33",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Switzerland Leaders Interviews",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Media & Trends",
      },
      {
        value: "#FF4C34",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Switzerland Leaders Interviews",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Media & Trends",
      },
      {
        value: "#FF4C35",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Switzerland Leaders Interviews",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Media & Trends",
      },
      {
        value: "#FF4C36",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Switzerland Leaders Interviews",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Media & Trends",
      },
      {
        value: "#FF4C37",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Switzerland Leaders Interviews",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Media & Trends",
      },
      {
        value: "#FF4C38",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Switzerland Leaders Interviews",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Media & Trends",
      },
      {
        value: "#FF4C39",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Switzerland Leaders Interviews",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Media & Trends",
      },
      {
        value: "#FF4C40",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Companies",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Rankings & Top Leads",
      },
      {
        value: "#A30DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Companies",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Rankings & Top Leads",
      },
      {
        value: "#A30DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Companies",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Rankings & Top Leads",
      },
      {
        value: "#A30DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Companies",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Rankings & Top Leads",
      },
      {
        value: "#A30DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Companies",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Rankings & Top Leads",
      },
      {
        value: "#A30DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Companies",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Rankings & Top Leads",
      },
      {
        value: "#A30DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Companies",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Rankings & Top Leads",
      },
      {
        value: "#A30DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Longevity Companies",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Rankings & Top Leads",
      },
      {
        value: "#A30DFF",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Other Forums",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Online Communities",
      },
      {
        value: "#FB830E",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Other Forums",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Online Communities",
      },
      {
        value: "#FB830E",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Other Forums",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Online Communities",
      },
      {
        value: "#FB830E",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Other Forums",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Online Communities",
      },
      {
        value: "#FB830E",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Other Forums",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Online Communities",
      },
      {
        value: "#FB830E",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Other Forums",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Online Communities",
      },
      {
        value: "#FB830E",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Other Forums",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Online Communities",
      },
      {
        value: "#FB830E",
      },
    ],
    [
      {
        value: "20",
      },
      {
        value: "TRUE",
      },
      {
        value: "Other Forums",
      },
      {
        value: "text",
      },
      {
        value: "https://i.ibb.co.com/hYrZfm2/Join-Waitlist-Longevity-Swiss.png",
      },
      {
        value: "Online Communities",
      },
      {
        value: "#FB830E",
      },
    ],
  ],
  dataSettingsConfig: [
    {
      name: "number",
      type: "select",
    },
    {
      name: "HideModalText",
      type: "select",
    },
    {
      name: "TextMessage",
      type: "select",
    },
    {
      name: "DetailedText",
      type: "select",
    },
    {
      name: "DiagramLink",
      type: "select",
    },
    {
      name: "Header",
      type: "select",
    },
    {
      name: "Color",
      type: "select",
    },
  ],
  customizeConfig: [],
  dataSettings: {
    number: 0,
    HideModalText: 1,
    TextMessage: 2,
    DetailedText: 3,
    DiagramLink: 4,
    Header: 5,
    Color: 6,
  },
  customizeSettings: {},
};
