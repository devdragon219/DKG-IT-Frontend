export const mockDataVertBarGeoMap = {
  originalData: {
    height: "700px",
    labels: {
      value1: "Public",
      value2: "Private",
    },
    colors: {
      value1: "#66b1c9",
      value2: "#548cd8",
    },
    data: [
      {
        name: "Page A",
        value1: 4000,
        value2: 2400,
      },
      {
        name: "Page B",
        value1: 3000,
        value2: 1398,
      },
      {
        name: "Page C",
        value1: 2000,
        value2: 9800,
      },
      {
        name: "Page D",
        value1: 2780,
        value2: 3908,
      },
      {
        name: "Page E",
        value1: 1890,
        value2: 4800,
      },
      {
        name: "Page F",
        value1: 2390,
        value2: 3800,
      },
      {
        name: "Page G",
        value1: 3490,
        value2: 4300,
      },
    ],
  },
};

export const STATS_LOGO = {
  bag: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7367f0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  ),
  fourSquares: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7367f0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="feather feather-grid avatar-icon"
    >
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  ),
  flower: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#25b867"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="feather feather-command avatar-icon"
    >
      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
    </svg>
  ),
  person: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0bbbd1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="feather feather-user avatar-icon"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  cube: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e25152"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="feather feather-box avatar-icon"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  ),
  arrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7367f0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="feather feather-trending-up avatar-icon"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  ),
};

export const mockDataS = {
  originalData: {
    stats: [
      {
        label: "Companies",
        value: "8900",
        iconBackground: "rgba(115, 103, 240, 0.12)",
        icon: "bag",
      },
      {
        label: "Total Investors",
        value: "4100",
        iconBackground: "rgba(115, 103, 240, 0.12)",
        icon: "fourSquares",
      },
      {
        label: "Investors based in UK",
        value: "600",
        iconBackground: "rgba(40, 199, 111, 0.12)",
        icon: "flower",
      },
      {
        label: "Leaders",
        value: "1600",
        iconBackground: "rgba(0, 207, 232, 0.12)",
        icon: "person",
      },
      {
        label: "Hubs",
        value: "300",
        iconBackground: "rgba(234, 84, 85, 0.12)",
        icon: "cube",
      },
      {
        label: "Public Companies",
        value: "70",
        iconBackground: "rgba(115, 103, 240, 0.12)",
        icon: "arrow",
      },
    ],
    dataForBArChart: {
      Fujayrah: {
        height: "700px",
        labels: {
          value1: "Public 1",
          value2: "Private 1",
        },
        colors: {
          value1: "#66b1c9",
          value2: "#548cd8",
        },
        data: [
          {
            name: "Page A",
            value1: 4000,
            value2: 2400,
          },
          {
            name: "Page B",
            value1: 3000,
            value2: 1398,
          },
          {
            name: "Page C",
            value1: 2000,
            value2: 9800,
          },
          {
            name: "Page D",
            value1: 2780,
            value2: 3908,
          },
          {
            name: "Page E",
            value1: 1890,
            value2: 4800,
          },
          {
            name: "Page F",
            value1: 2390,
            value2: 3800,
          },
          {
            name: "Page G",
            value1: 3490,
            value2: 4300,
          },
        ],
      },
      Sharjah: {
        height: "700px",
        labels: {
          value1: "Public 2",
          value2: "Private 2",
        },
        colors: {
          value1: "#66b1c9",
          value2: "#548cd8",
        },
        data: [
          {
            name: "Page A",
            value1: 2000,
            value2: 2400,
          },
          {
            name: "Page B",
            value1: 3000,
            value2: 2398,
          },
          {
            name: "Page C",
            value1: 3000,
            value2: 9800,
          },
          {
            name: "Page D",
            value1: 2780,
            value2: 4908,
          },
          {
            name: "Page E",
            value1: 7890,
            value2: 4800,
          },
          {
            name: "Page F",
            value1: 2390,
            value2: 1800,
          },
          {
            name: "Page G",
            value1: 3490,
            value2: 9300,
          },
        ],
      },
      "Ras Al Khaymah": {
        height: "700px",
        labels: {
          value1: "Public 3",
          value2: "Private 3",
        },
        colors: {
          value1: "#66b1c9",
          value2: "#548cd8",
        },
        data: [
          {
            name: "Page A",
            value1: 2000,
            value2: 2400,
          },
          {
            name: "Page B",
            value1: 3000,
            value2: 2398,
          },
          {
            name: "Page C",
            value1: 3000,
            value2: 9800,
          },
          {
            name: "Page D",
            value1: 2780,
            value2: 4908,
          },
          {
            name: "Page E",
            value1: 7890,
            value2: 4800,
          },
          {
            name: "Page F",
            value1: 2390,
            value2: 1800,
          },
          {
            name: "Page G",
            value1: 3490,
            value2: 9300,
          },
        ],
      },
      Dubay: {
        height: "700px",
        labels: {
          value1: "Public 4",
          value2: "Private 4",
        },
        colors: {
          value1: "#66b1c9",
          value2: "#548cd8",
        },
        data: [
          {
            name: "Page A",
            value1: 2000,
            value2: 2400,
          },
          {
            name: "Page B",
            value1: 3000,
            value2: 2398,
          },
          {
            name: "Page C",
            value1: 3000,
            value2: 9800,
          },
          {
            name: "Page D",
            value1: 2780,
            value2: 4908,
          },
          {
            name: "Page E",
            value1: 7890,
            value2: 4800,
          },
          {
            name: "Page F",
            value1: 2390,
            value2: 1800,
          },
          {
            name: "Page G",
            value1: 3490,
            value2: 9300,
          },
        ],
      },
      "Abu Dhabi": {
        height: "700px",
        labels: {
          value1: "Public 5",
          value2: "Private 5",
        },
        colors: {
          value1: "#66b1c9",
          value2: "#548cd8",
        },
        data: [
          {
            name: "Page A",
            value1: 2000,
            value2: 2400,
          },
          {
            name: "Page B",
            value1: 3000,
            value2: 2398,
          },
          {
            name: "Page C",
            value1: 3000,
            value2: 9800,
          },
          {
            name: "Page D",
            value1: 2780,
            value2: 4908,
          },
          {
            name: "Page E",
            value1: 7890,
            value2: 4800,
          },
          {
            name: "Page F",
            value1: 2390,
            value2: 1800,
          },
          {
            name: "Page G",
            value1: 3490,
            value2: 9300,
          },
        ],
      },
      "Umm Al Qaywayn": {
        height: "700px",
        labels: {
          value1: "Public 6",
          value2: "Private 6",
        },
        colors: {
          value1: "#66b1c9",
          value2: "#548cd8",
        },
        data: [
          {
            name: "Page A",
            value1: 2000,
            value2: 2400,
          },
          {
            name: "Page B",
            value1: 3000,
            value2: 2398,
          },
          {
            name: "Page C",
            value1: 3000,
            value2: 9800,
          },
          {
            name: "Page D",
            value1: 2780,
            value2: 4908,
          },
          {
            name: "Page E",
            value1: 7890,
            value2: 4800,
          },
          {
            name: "Page F",
            value1: 2390,
            value2: 1800,
          },
          {
            name: "Page G",
            value1: 3490,
            value2: 9300,
          },
        ],
      },
      Ajman: {
        height: "700px",
        labels: {
          value1: "Public 7",
          value2: "Private 7",
        },
        colors: {
          value1: "#66b1c9",
          value2: "#548cd8",
        },
        data: [
          {
            name: "Page A",
            value1: 2000,
            value2: 2400,
          },
          {
            name: "Page B",
            value1: 3000,
            value2: 2398,
          },
          {
            name: "Page C",
            value1: 3000,
            value2: 9800,
          },
          {
            name: "Page D",
            value1: 2780,
            value2: 4908,
          },
          {
            name: "Page E",
            value1: 7890,
            value2: 4800,
          },
          {
            name: "Page F",
            value1: 2390,
            value2: 1800,
          },
          {
            name: "Page G",
            value1: 3490,
            value2: 9300,
          },
        ],
      },
      "Neutral Zone": {
        height: "700px",
        labels: {
          value1: "Public 8",
          value2: "Private 8",
        },
        colors: {
          value1: "#66b1c9",
          value2: "#548cd8",
        },
        data: [
          {
            name: "Page A",
            value1: 2000,
            value2: 2400,
          },
          {
            name: "Page B",
            value1: 3000,
            value2: 2398,
          },
          {
            name: "Page C",
            value1: 3000,
            value2: 9800,
          },
          {
            name: "Page D",
            value1: 2780,
            value2: 4908,
          },
          {
            name: "Page E",
            value1: 7890,
            value2: 4800,
          },
          {
            name: "Page F",
            value1: 2390,
            value2: 1800,
          },
          {
            name: "Page G",
            value1: 3490,
            value2: 9300,
          },
        ],
      },
    },
  },
};
