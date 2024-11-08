import React, { useCallback, useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import GeoDashboardV2 from "../../components/GeoDashboardV2";
import { JSON_DATA } from "./data";
import {pathAPIurl} from "../../constants/routes";

Chart.register(...registerables);

let diagramsSrc = [];
let monthList = [];
let chartObject;

const diagramTypeMap = {
  companiesListColor: "Companies List Color",
  documentCreatorV2: "Document Creator V2",
  pseudoPyramid: "Ecosystem Benchmark Pyramid Mindmap",
  USAGeomap: "USA GeoDashboard 1.0",
  europeMap: "Europe GeoMap",
  globalGeomap: "Global GeoDashboard 1.0",
  geomapsSection: "GeoDashboards",
  technoPolicyGeoDashboard: "Techno Policy Geo Dashboard",
  mapsSection: "GeoMaps",
  newGenerationToolsSection: "No-code Dashboard Tools",
  frameworkConstructor: "Framework Constructor",
  digitalUK: "Digital UK",
  ukmap: "UK GeoMap",
  UAEmap: "UAE GeoMap",
  switzerlandmap: "Switzerland GeoMap",
  moldovaMap: "Moldova GeoMap",
  verticalBarForGeoMaps: "Vertical Bar For GeoMaps",
  itPlatformsRegistry: "IT Platforms registry",
  completedFrontendRegistery: "completed Frontend Registry",
  dashboardsRegistry: "Dashboards registry",
  pyramid: "Interactive 2D Benchmark",
  pyramid3D: "Interactive 3D Benchmark",
  companiesList: "Companies list",
  moldovaMapV2: "Moldova with Pictograms",
  companiesTable: "Companies table",
  marqueeBar: "Marquee bar",
  tableWithBar: "Table with Bars",
  listWithBar: "List with bar",
  cube3d: "Cube 3D",
  tree3D: "Complex Evolution Tree",
  tubeTree3D: "Tube Evolution Tree 3D",
  longevityGPT: "Longevity GPT",
  pieChart3D: "Pie chart 3D",
  nodeChart3D: "Radial Timeline 3D",
  globe3D: "Globe Chart 3D",
  stackedBarChart: "Stacked Bar Chart",
  verticalBarDiff: "Vertical Bars Diff",
  barChart3D: "Bar Chart 3D",
  custom_table: "Custom Table",
  interactivePanel: "Navigation Panel",
  interactivePanelColor: "Navigation Panel Color",
  tree: "Navigation Interactive Network",
  mind_map: "Circular Big Ecosystem Mindmap",
  netTree: "Interactive Network Trees",
  treeV2: "Interactive Evolution Tree",
  treeNoDate: "Tree Without Date",
  decisionTree: "Decision Tree",
  radialTree: "Radial Tree",
  revolutionCube3D: "Revolution 3D Cube",
  documentCreator: "Document Creator",
  number2: "Horizontal Bar Chart",
  number3: "Ranking with images",
  number4: "Vertical Bar Chart",
  rectangleMindmap: "Rectangle Big Ecosystem Mindmap",
  number4_5: "Round balloons",
  number5: "Vertical bar chart 3D",
  number9: "Ball Snake",
  businessIntelligenceDepartment: "Business Intelligence Department",
  number11: "Ranking Table",
  number14: "Interactive Macroparameters Panel Lists",
  number15: "Interactive Macroparameters Panel Numbers",
  number18_1: "Round Cumulative Benchmark",
  uk_tube: "3D Multidimensional Space Tube",
  valinor: "Valinor",
  number13: "Horizontal Bars Stacked",
  p3d: "Pie 3D",
  circleInteractive: "Circle Interactive",
  rectangularInteractive: "Rectangular Interactive",
  adminbuttons: "Navigation Spreadsheet Style",
  mindMapsMenu: "MindMaps",
  graphsMenu: "Graphs",
  toolsMenu: "Tools",
  frontendtoolslibraryMenu: "frontend tools library",
  interactiveMindmapsMenu: "Interactive Mindmaps",
  interactiveMindmapsSection: "Interactive Mindmaps",
  AIAgentsSection: "AI Agents",
  barChartsSection: "Charts",
  listsSection: "Lists",
  comparisonSwots: "Comparison SWOTs",
  otherSection: "Others",
  mindmapSection: "Mind Maps",
  mindmap3DSection: "3D Mind Maps",
  interactive3DSection: "Multidimensional 3D Interactive System",
  SWOTAnalysisInstruments: "SWOT Analysis Instruments",
  timelines: "Time Lines",
  frontendtoolslibrarysection: "frontend tools library",
  infographicsSection: "Macroparameters",
  navigationSection: "Navigation Menu Panels",
  Tools: "Tools",
  adminButtonsSection: "Navigation Spreadsheet Style",
  hexagon: "Advanced Frameworks",
  barChatsMenu: "Charts",
  ListMenu: "Lists",
  infographicsMenu: "Macroparameters",
  navigationMenu: "Navigation Panels",
  othersMenu: "Others",
  "3dMenu": "3D Graphs",
  serpentinePath: "Serpentine Path",
  timelineHorizontal: "Timeline Horizontal",
  DatabaseManagementSystem: "Database Management System",
  Dashboards: "Dashboards",
  databoxDashboardsMenu: "Databox Dashboards",
  databoxDashboardsSection: "Databox Dashboards",
  aiUKDatabase: "AI in UK DataBase Status",
  aiEcosystemDatabase: "AI Ecosystem DataBase Status",
  philantrhropyInternational: "Philantrhropy International",
  timeLine: "Timeline",
  hubspotMetrics: "Hubspot Metrics",
  googleAnalytics: "Google Analytics",
  femtechAnalyticsLinkedin: "Femtech Analytics Linkedin",
  aiiaSocialMediaAnalytics: "AiiA Social Media Analytics",
  aiia: "AiiA",
  comparativeAnalysisLinkedin: "Comparative Analysis Linkedin",
  investInUkraineTech: "Invest In Ukraine Tech",
  globalAiEcosystem: "Global Ai Ecosystem",
  dataAnalyticsPlatform: "Data Analytics Platform",
  inDevelopment: "In Development",
  adminButtonsMenu: "Navigation Spreadsheet Style",
  registriesMenu: "Registries",
  forRevision: "For Revision",
  forRevisionMenu: "For Revision",
  forRevisionSection: "For Revision",
  pentagon3d: "Pentagon 3D",
  number18: "Horizontal Animated Bars",
  inDevelopmentSection: "In Development",
  currentStateFeedback: "Current State Feedback",
  suggestFeature: "Suggest Feature",
  plannedFrontendTools: "Planned Frontend Tools",
  comparisonBars: "Comparison Bars",
  radarChartBlurred: "SWOT Analysis",
  swot3d: "SWOT 3D",
  lineChart: "Line Chart",
  gaugeChart: "Gauge Chart",
  keyIndicator: "Key Indicators",
  documentCreatorSection: "Document Creator",
  organizations: "Organization",
  Personalities: "Personalities",
  customEntities: "Custom Entities",
  genericIFrames: "Generic iFrames",
  mindmaps: "Mindmaps",
  dashboardTools: "Dashboard Tools",
  treesAndPathways: "Trees and Pathways",
  treesAndPathwaysMenu: "Trees and Pathways",
  mindmapsRegistry: "Mindmaps Registry",
  genericPasswords: "Generic Passwords",
  domainsRegistry: "Domains Registry",
  benchmarkToolsMenu: "Benchmark Interactive Tools",
  benchmarkToolsSection: "Benchmark Tools",
  circularMindmap3D: "Interactive 3D Ecosystem Map",
  multiCube3D: "Multi Cube 3D",
  radarChartMenu: "Radar Chart",
  radarChartSection: "Radar Chart",
  radarChart: "Radar Chart",
  londonMap: "London GeoMap",
  londonMapStats: "London GeoDashboard 1.0",
  UAEGeoMapStats: "UAE GeoDashboard 1.0",
  walesMapStats: "Wales GeoDashboard 1.0",
  ChisinauMap: "Chisinau GeoMap",
  asiaMap: "Asia GeoMap",
  walesMap: "Wales GeoMap",
  gulfRegionMap: "Gulf GeoDashboard 1.0",
  ukMapStats: "UK GeoDashboard 1.0",
  ukmapnew: "UK Light GeoDashboard 1.0",
  GermanyMap: "Germany GeoMap",
  ScotlandMap: "Scotland GeoMap",
  ManchesterMap: "Manchester GeoMap",
  ScotlandMapStats: "Scotland GeoDashboard 1.0",
  ManchesterMapStats: "Manchester GeoDashboard 1.0",
  northIrelandMap: "North Ireland GeoMap",
  northIrelandMapStats: "North Ireland GeoDashboard 1.0",
  franceMap: "France GeoMap",
  londonMapDark: "LondonMapDark",
  londonStatsDark: "London Dark GeoDashboard 1.0",
  canadaMap: "Canada GeoMap",
  ukMapStatsDark: "UK Dark GeoDashboard 1.0",
  ukMapDark: "UK Map Dark",
  chinaMapStats: "China GeoDashboard 1.0",
  ukMapStatic: "UK Static GeoDashboard 1.0",
  moldovaMapStats: "Moldova GeoDashboard 1.0",
  israelMap: "Israel Geomap",
  japanMap: "Japan Geomap",
  circularInfographUK: "Circular Infograph UK",
  timeSeriesChart: "Time Series Chart",
  promoBanner: "Promo Banner",
  asiaMapStatsDark: "Asia Dark GeoDashboard 1.0",
  usaMapStatsNew: "USA GeoDashboard 1.0",
  organisationalStructure: "Organisational Structure",
  dkgInternalSection: "DKG Departments",
  geoDashboard: "GeoDashboard Constructor 2.0",
  dynamicLineChart: "Dynamic Line Chart",
  leaderBoard: "Leader Board",
  heatMap: "Heat Map",
  heatMapGrid: "Heat Map Grid",
  treeMap: "Framework",
  forceDirectedTree: "Force Directed Tree",
  dataScienceDepartment: "Data Science Department",
  ITDepartment: "IT Department",
  saasProjects: "SaaS Projects",
  legalTechDepartment: "LegalTech Department",
  revenueGenerationProgress: "Revenue Generation Progress",
  dashboardConstructor: "Dashboard Constructor 3.0",
  dashboardConstructorSaas: "Dashboard Constructor",
  complexFrameworkSaas: "Complex Framework",
  investTechPlatform: "InvestTech Platform",
  evolutionTreeSaas: "Complex Evolution Trees",
  multidimentionalSpace3d: "3D Multidimensional Space",
  interactiveMindmapSaas: "Interactive Mindmaps",
  itDepartmentGPT: "IT Department GPT",
  legalEagleGpt: "Legal Eagle GPT",
  miamaiMap: "Miami GeoMap",
  miamiMap: "Miami GeoMap",
  revolutionCube: "Complex 3D Framework for Advance Tech Industries",
  hallOfFame: "Hall of Fame",
  hallOfFameSection: "Hall of Fame",
  adminTechDepartment: "AdminTech Department",
  dataManagementGPT: "Data Management GPT",
  navigationDiagram: "Navigation Diagram",
  bizDevTech_Division: "BizDevTech Department",
  aiInBiomedLeadersUK: "AI in Biomed Leaders UK",
  aiLeaders: "AI Leaders",
  PrivacyLawGPT: "Privacy Law Navigator AI",
  uaeLeadersMindmap: "UAE Leaders MindMap",
  aiBiotechLeaders: "AI in BioTech Leaders ",
  aiHealthtechLeaders: "AI in HealthTech Leaders",
  aiNeurotechLeaders: "AI in NeuroTech Leaders",
  interactiveMindmap: "Interactive Mindmap",
  rectangleMindmaps: "Rectangle Mindmaps",
  "3DSection": "3D Visualisations",
  accountingDepartment: "Accounting Department",
  lifeSciencesDepartment: "Life Sciences Department",
  govTechGPT: "GovTech GPT",
  philanthropyGPT: "Philanthropy GPT",
  govTechDepartment: "GovTech Department",
  philanthropyDepartment: "Philanthropy Department",
  longevityBooks: "Longevity Books",
  WEFNavigationPanel: "WEF-like Navigation Panel",
  geoMoldGeneral: "Geo Dashboard 2.0 Moldova",
  geoMoldEL: "Geo Dashboard 2.0 Moldova",
  geoMoldENergy: "Geo Dashboard 2.0 Moldova",
  geoV2USA: "Geo Dashboard 2.0 USA",
  geoNorbertCzimadia: "Norbert Czimadia",
  aiUkGPT: "AI in UK GPT",
  aiFinanceGPT: "AI in Finance Hub and Accelerator GPT",
  businessIntelligenceGPT: "Business Intelligence GPT",
  legalLensGPT: "Legal Lens GPT",
  adminAssistantGPT: "Admin Assistant GPT",
  platformSolutionsGPT: "Platform Solutions GPT",
  insightWriterGPT: "Insight Writer GPT",
  pRSmmTransformerGPT: "PR to SMM Transformer GPT",
  hallOfFameBanner: "Hall of Fame Banner",
  ontarioMap: "Ontario GeoMap",
  torontoMap: "Toronto GeoMap",
  bizdevtechGPT: "BizDevTech GPT",
  launchPlan: "Launch Plan",
  dkgProductsITPlatform: "DKG Products for IT-platform",
  leadsAnalysis: "BizDev Prospect Analysis",
  BizDevTechPlatformsAndTools: "Business Development and Sales",
  BizDevTechLaunchPlan: "Strategic Engagement Plan",
  MarTechBizDevTechReport: "BizDev Performance Report",
  SaleableSaaSProjects: "Saleable SaaS Projects",
  SaleableDashboardProjects: "Saleable Dashboard Projects",
  SaleableServiceProjects: "Saleable Service Projects",
  SMMPostGenerator: "SMM Post Generator",
  EmailContentGenerator: "Email Content Generator",
  PromotionActionPlanGenerator: "Promotion Action Plan Generator",
  BizDevTechSaleableProjects: "BizDevTech Saleable Projects",
  BusinessDevelopmentSalesTools: "Business Development Sales and Tools",
  GeoDashboardConstructorPlatform: "Geo Dashboard Constructor Platform",
  InteractiveMindMapConstructor: "Interactive MindMap Constructor",
  BenchmarkInteractiveAnalysisndVisualizationTool:
    "Benchmark Interactive Analysis and Visualization Tool",
  InvestTechPlatformfoPrivateEquity: "InvestTech Platform for Private Equity",
  "3DInteractiveIndustryUniverseConstructor":
    "3D Interactive Industry Universe Constructor",
  ComplexFrameworksConstructorSaaS: "Complex Frameworks Constructor SaaS",
  ComplexEvolutionTreesVisualizationTool:
    "Complex Evolution Trees Visualization Tool",
  DashboardConstructorVersion: "Dashboard Constructor Version 3.0",
  EndtoEndProfessionalPlatformystem: "End-to-End Professional Platform System",
  OperationalEnvironmentSmartMatchingSystem:
    "Operational Environment Smart-Matching System",
  SWOTasaService: "SWOT-as-a-Service",
  SWOTAnalysis3D: "SWOT Analysis 3D",
  Interactive3DBenchmark: "Interactive 3D Benchmark",
  TechEconomySetofFrontEndVisualisationools:
    "Tech Economy Set of Front-End Visualisation Tools",
  NavigationPanelsSaaS: "Navigation Panels SaaS",
  CircularBiEcosystemMindmap: "Circular Big Ecosystem Mindmap",
  RectangleBigEcosystemMindmap: "Rectangle Big Ecosystem Mindmap",
  NavigationInteractiveNetwork: "Navigation Interactive Network",
  Complex3DFrameworkorAdvanceTechIndustries:
    "Complex 3D Framework for Advance Tech Industries",
  EcosystemBenchmarkyramidMindmap: "Ecosystem Benchmark Pyramid Mindmap",
  HallofFam: "Hall of Fame",
  Interactive2DBenchmark: "Interactive 2D Benchmark",
  Interactive3DEcosystemMap: "Interactive 3D Ecosystem Map",
  InteractiveMacroparametersanelumbers:
    "Interactive Macroparameters Panel Numbers",
  GeoDashboardVersio: "GeoDashboard Version 1",
  InteractiveMacroparametersPanelLists:
    "Interactive Macroparameters Panel Lists",
  InteractiveNetworkTrees: "Interactive Network Trees",
  BusinessDevelopmentSales: "Business Development and Sales",
  Tier1Platform: "Tier 1 Platform",
  Tier2Platform: "Tier 2 Platform",
  EcosystemMapPlatform: "Ecosystem Map Platform",
  SMMPostandEmailContentConstructor: "Email Constructor",
  SMMforBizDevTech: "SMM for BizDevTech",
  ComparativeAnalysisConstructor: "SWOT Analysis Constructor",
  ComparativeAnalysisConstructor2: "Comparative Analysis Constructor",
  GeoDashboardTier1: "Geo Dashboard, Tier 1",
  GeoDashboardTier2: "Geo Dashboard, Tier 2 ",
  GeoDashboardPromotionDocuments: "Geo Dashboard, Promotion Documents",
  DashboardConstructorTier1: "Dashboard Constructor Tier 1",
};

function renderMonths() {
  let filterCont = "";
  for (let month of monthList) {
    filterCont += `\n<option value="${month}">in ${month}</option>`;
  }
  filterCont += '\n<option value="">for all time</option>';

  const statsFilter = document.getElementById("stats-filter");
  if (statsFilter) {
    statsFilter.innerHTML = filterCont;
  }

}

function extractMonths() {
  for (let diag of diagramsSrc) {
    let month = diag.updated_time.substr(0, 7);
    if (!monthList.includes(month)) monthList.push(month);
  }
  monthList.sort();
  monthList.reverse();
  renderMonths();
}

function renderTable(statsArray) {
  let tableCont = "";
  for (let stat of statsArray) {
    tableCont += `<tr><td>${stat.type_title}</td><td>${stat.count}</td></tr>`;
  }

  const el = document.getElementById("stats-table-body");
  if (el) {
    el.innerText = tableCont;
  }
}

function renderChart(statsArray) {
  const ctx = document.getElementById("stats-chart-canvas");
  if (!ctx) {
    return null;
  }
  let data = {
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [
          "hsl(0, 100%, 40%)",
          "hsl(100, 100%, 30%)",
          "hsl(50, 100%, 30%)",
          "hsl(320, 50%, 60%)",
          "hsl(250, 100%, 30%)",
          "hsl(150, 100%, 30%)",
          "hsl(200, 100%, 30%)",
          "hsl(300, 100%, 30%)",
          "hsl(350, 50%, 20%)",
          "hsl(180, 50%, 60%)",
          "hsl(221, 0%, 70%)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  let datasetSrc = [];
  if (statsArray.length > 10) {
    let otherCount = 0;
    for (let i = 0; i < statsArray.length; i++) {
      if (i < 10) {
        datasetSrc.push(statsArray[i]);
      } else {
        otherCount = otherCount + statsArray[i].count;
      }
    }
    datasetSrc.push({ type_title: "Other", count: otherCount });
  }

  for (let datapoint of datasetSrc) {
    data.labels.push(datapoint.type_title);
    data.datasets[0].data.push(datapoint.count);
  }

  if (!chartObject) {
    chartObject = new Chart(ctx, {
      type: "pie",
      data: data,
    });
  } else {
    chartObject.data = data;
    chartObject.update();
  }
}

function rebuildCharts(timePeriod) {
  let statsSrc = {};
  for (let diag of diagramsSrc) {
    if (timePeriod > "" && !diag.updated_time.includes(timePeriod)) continue;

    if (!statsSrc.hasOwnProperty(diag.diagram_type))
      statsSrc[diag.diagram_type] = 0;

    statsSrc[diag.diagram_type]++;
  }
  let statsArray = [];
  for (let statKey in statsSrc) {
    statsArray.push({
      type_title: diagramTypeMap.hasOwnProperty(statKey)
        ? diagramTypeMap[statKey]
        : statKey,
      type_code: statKey,
      count: statsSrc[statKey],
    });
  }
  statsArray.sort((a, b) => {
    return b.count - a.count;
  });
  renderTable(statsArray);
  renderChart(statsArray);
}

function applyFilter(event) {
  event.preventDefault();
  rebuildCharts(event.target.value);
}

// List of URLs to fetch JSON data from
const urls = [
  `${pathAPIurl()}api/diagrams-all`,
  "https://platform.dkv.global/dashboards/api/diagrams",
];

// Function to handle merging of data
function mergeData(data) {
  // Filter out null values (failed requests)
  const validData = data.filter((item) => item !== null);
  diagramsSrc = [].concat(...validData);
}

let promises = urls.map((url) => {
  return new Promise((resolve) => {
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error fetching data from ${url}. Skipping this URL.`
          );
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error(error.message);
        resolve(null);
      });
  });
});

Promise.all(promises)
  .then((results) => {
    mergeData(results.filter((data) => data !== null)); // Merge the results, excluding nulls
    extractMonths();
    rebuildCharts(monthList[0]);
  })
  .catch((error) => {
    console.error("Error during promise execution:", error);
  });

export const MacroparametersPage = () => {
  return (
    <>
      <GeoDashboardV2 data={JSON_DATA} isEditMode={false}></GeoDashboardV2>
      {/* <header>
        <h1>Registry of Latest IT Vizualization</h1>
        <select id="stats-filter" onChange={applyFilter}></select>
      </header>

      <div className="row">
        <div id="stats-chart" className="col">
          <canvas
            id="stats-chart-canvas"
            width="600"
            height="600"
            role="img"
          ></canvas>
        </div>
        <div id="stats-table" className="col">
          <table>
            <thead>
              <tr>
                <th>Visualization type</th>
                <th>Number of created</th>
              </tr>
            </thead>
            <tbody id="stats-table-body"></tbody>
          </table>
        </div>
      </div> */}
    </>
  );
};