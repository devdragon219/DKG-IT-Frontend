import { MenuItem } from "@mui/material";
import React from "react";
import {
  ARROW_PROGRESS_CHART,
  COMPARISON_BARS,
  NUM13,
  PYRAMID,
  RADAR_CHART_BLURRED,
} from "../../../../constants/diagram";
import { COMPONENTS, NAMES } from "../../../../constants/names";

export const pathToJSON = {
  PortraitImage: "portraitImage",
  MoldovaMapLegend: "moldovaMapLegend",
  PieChartLabels: "pieChartLabels",
  RadarChartDesigner: "radarChart",
  VerticalBarForGeoMaps: "verticalBarForGeoMaps",
  KeyParameters: "macroPanel",
  TimelineHorizontal: "timelineHorizontal",
  LineChartSimple: "lineChartSimple",
  HorizontalBar: "horizontalBar",
  AsiaMap: "asiaMap",
  SwitzerlandMapTopo: "switzerlandmapTopo",
  PolarChart: "polarChart",
  KeyIndicatorsResp: "keyIndicatorsResp",
  UKMapTopo: "ukMapTopo",
  UKMapTopoLegend: "ukMapTopoLegend",
  LondonMap: "londonMap",
  UsaMap: "usaMap",
  HeatMapGrid: "heatMapGrid",
  ChisinauMapLegend: "chisinauMapLegend",
  GlobalMap: "globalGeomapTopo",
  MiamiMap: "miamiMap",
  IframeGeoDash: "iframeGeoDash",
  FloridaMap: "floridaMap",
  DoughnutChart: "doughnutChart",
  TurkeyMap: "turkeyMap",
  JapanMap: "japanMap",
  UAEMap: "UAEmap",
  VerticalBarChartApi: "VerticalBarChartApi",
  TableApi: "TableApi",
  SwitzerlandMapLegend: "switzerlandMapLegend",
  JapanMapLegend: "japanMapLegend",
  TurkeyMapLegend: "turkeyMapLegend",
  CanadaMap: "canadaMap",
  IsraelMap: "israelMap",
  SouthKoreaMap: "southKoreaMap",
  [COMPONENTS[RADAR_CHART_BLURRED]]: "radarChartBlurred",
  [COMPONENTS[NUM13]]: "number13",
  [COMPONENTS[COMPARISON_BARS]]: "comparisonBars",
  [COMPONENTS[ARROW_PROGRESS_CHART]]: "arrowProgressChart",
  [COMPONENTS[PYRAMID]]: "pyramid",
  //BubbleChart: "bubbleChart"

  // LONGEVITY CLUB DASHBOARD
  // User
  UsersApiUserTypes: "UsersApiUserTypes",
  UsersGenderDistributionAPI: "UsersGenderDistributionAPI",
  UsersIndexStats: "UsersIndexStats",
  UsersAgeDistrubition: "UsersAgeDistrubition",
  UsersRolesAPI: "UsersRolesAPI",
  UsersGeoMapAPI: "UsersGeoMapAPI",
  UsersEngagementsAPI: "UsersEngagementsAPI",
  UsersGeneralStats: "UsersGeneralStats",
  // Rewards
  RewardsAgeRange: "RewardsAgeRange",
  RewardsByGender: "RewardsByGender",
  RewardsTopUsers: "RewardsTopUsers",
  RewardsEarnedUserType: "RewardsEarnedUserType",
  RewardsIndexPoints: "RewardsIndexPoints",
  RewardsEventType: "RewardsEventType",
  RewardsGeoMap: "RewardsGeoMap",
  RewardsEarningSpent: "RewardsEarningSpent",
  RewardsGeneralStats: "RewardsGeneralStats",
  // Ambssadors
  AmbassadorsGenders: "AmbassadorsGenders",
  AmbassadorsAgeDist: "AmbassadorsAgeDist",
  AmbassadorsUserTypes: "AmbassadorsUserTypes",
  AmbassadorsTopCountries: "AmbassadorsTopCountries",
  AmbassadorsTopReferrers: "AmbassadorsTopReferrers",
  AmbassadorsRadarReferrs: "AmbassadorsRadarReferrs",
  AmbassadorsGeoLocation: "AmbassadorsGeoLocation",
  AmbassadorsHorizontalBarReferral: "AmbassadorsHorizontalBarReferral",
  AmbassadorsGeneralStats: "AmbassadorsGeneralStats",
  // MarketPlace
  MarketPlaceTopCat: "MarketPlaceTopCat", //Categories
  MarketPlaceVisitorsByGender: "MarketPlaceVisitorsByGender",
  MarketPlaceVisitorsAgeRange: "MarketPlaceVisitorsAgeRange",
  MarketPlaceIndexData: "MarketPlaceIndexData",
  MarketPlaceVisitorsGeoLocation: "MarketPlaceVisitorsGeoLocation",
  MarketPlaceTopCategoriesGenders: "MarketPlaceTopCategoriesGenders",
  MarketPlaceTopEarningCategories: "MarketPlaceTopEarningCategories",
  MarketPlaceViewedPurchasedTop: "MarketPlaceViewedPurchasedTop",
};

export function extractTextValues(jsonData) {
  const textValues = [];
  jsonData.data.originalData.macroBlocks.forEach((block) => {
    textValues.push(block.text);
  });
  return textValues;
}

export function getKeys(data) {
  if (typeof data === "object" && data !== null) {
    return Object.keys(data);
  }
  return [];
}
