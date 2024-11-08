import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import LayoutActions from "./LayoutActions";
import Iframe from "./Iframe";
import Loader from "../../components/Loader";
import "./style.css"

import {
  PYRAMID,
  RECT_MINDMAP,
  TREE,
  MIND_MAP,
  CUSTOM_TABLE,
  NUM11,
  RADAR_CHART,
  RADAR_GRADIENT_CHART,
  STACKED_BAR_CHART,
  INTERACTIVE_PANEL,
  TREE_V2,
  ADM_PAN_BLACK_CONST,
  PYRAMID_3D,
  TABLE_WITH_BAR,
  LIST_WITH_BAR,
  MARQUEE_LIST_BAR,
  VERTICAL_BAR_DIFF,
  COMPANIES_LIST,
  COMPANIES_TABLE,
  PENTAGON_3D,
  TREE_NO_DATE,
  DOCUMENT_CREATOR,
  COMPARISON_SWOTS,
  HEXAGON,
  COMPARISON_BARS,
  LINE_CHART,
  PSEUDO_PYRAMID,
  DOCUMENT_CREATOR_V2,
  DOCUMENT_CREATOR_V3,
  KEY_INDICATOR,
  PROMO_BANNER,
  COMPANIES_LIST_COLOR,
  GAUGE_CHART,
  INTERACTIVE_PANEL_COLOR,
  INTERACTIVE_PANEL_LOGO,
  UK_MAP,
  EUROPE_MAP,
  DECISION_TREE,
  RADIAL_TREE,
  SWITZERLAND_MAP,
  LONDON_MAP,
  MOLDOVA_MAP,
  LONDON_MAP_STATS,
  UK_MAP_STATS,
  UAE_MAP,
  GLOBAL_GEOMAP,
  VERTICAL_BAR_FOR_MAP,
  UNIVERSAL_BAR,
  UAE_GEO_MAP_STATS,
  WALES_MAP_STATS,
  ASIA_MAP,
  WALES_MAP,
  USA_GEOMAP,
  GULF_REGION_MAP,
  GERMANY_MAP,
  CHISINAU_MAP,
  UK_MAP_NEW,
  TIME_LINE,
  SCOTLAND_MAP,
  MANCHESTER_MAP,
  MANCHESTER_MAP_STATS,
  SCOTLAND_MAP_STATS,
  SERPENTINE_PATH,
  MOLDOVA_MAP_V2,
  NORTH_IRELAND_MAP,
  NORTH_IRELAND_MAP_STATS,
  TIMELINE_HORIZONTAL,
  FRANCE_MAP,
  LONDON_MAP_DARK,
  LONDON_STATS_DARK,
  CANADA_MAP,
  UK_STATS_DARK,
  UK_MAP_DARK,
  GEO_DESHBOARDS,
  GEO_DESHBOARDS_V2,
  CHINA_MAP_STATS,
  UK_MAP_STATIC,
  MOLDOVA_MAP_STATS,
  ISRAEL_MAP,
  JAPAN_MAP,
  CIRCULAR_INFOGRAPH_UK,
  TIME_SERIES_CHART,
  TREE_MAP,
  LEADER_BOARD,
  TUBE_MAP,
  FORCE_DIRECTED_TREE,
  HEAT_MAP,
  HEAT_MAP_GRID,
  PORTRAIT_IMAGE,
  FRAME_CONSTRUCTOR,
  UK_MAP_TOPO_LEGEND,
  DOUGHNUT_CHART,
  GLOBAL_GEOMAP_STATS,
  DEALS_STRUCTURE,
  ARROW_PROGRESS_CHART,
  TURKEY_MAP,
  TORONTO_MAP,
  ONTARIO_MAP,
  BUBBLE_CHART,
  POLAR_CHART,
  MENA_MAP,
  MIAMI_MAP_STATS,
  FLORIDA_MAP_STATS,
  HALL_OF_FAME_CONSTRUCTOR,
  SWITZERLAND_MAP_STATS,
  ADM_PAN_CONST,
  MIAMI_GEOMAP,
  DYNAMIC_LINE_CHART,
  GLOBAL_GEOMAP_STATS_V2,
  RADAR_CHART_BLURRED,
  GLOBAL_GEOMAP_STATS_V3,
  MULTI_RADAR_CHART,
  HALL_OF_FAME_CONSTRUCTOR_V2,
  HARLEY_STREET_2D,
  HARLEY_STREET_3D,
  BUILDINGS_MAP_3D,
  FLOW_CHART,
  MAPBOX_GEDASHBOARD_V1,
  HEXAGON_V2,
  TOOLS_COLLECTION,
  UK_MAPCHART,
  SOUTH_KOREA_MAP,
  CHINA_MAP,
  ISRAEL_MAP_STATS,
  NETWORK_DIAGRAM,
  GLOBAL_GEOMAP_STATS_V4,
  PAGE_BUILDER,
} from "../../constants/diagram";
import { getName } from "../../constants/names";
import {
  onCheckIsDataNeeded,
  onCheckIsExternalRoute,
  onCheckIsInternalRoute,
  ROOT,
} from "../../constants/routes";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import TreeDesigner from "../../components/TreeDesigner";
import UserName from "../../components/layout/UserName";
import PyramidDesignerV2 from "../../components/PyramidDesignerV2";
import MindMapDesigner from "../../components/MindMapDesigner";
import RectangleMindmapDesigner from "../../components/RectangleMindmap/RectangleMindmap";
import Graph3DDesigner from "../../components/Graph3DDesigner/Graph3DDesigner";
import { getIs3DGraph } from "../../components/Graph3DDesigner/utils";
import CustomTable from "../../components/CustomTable/CustomTable";
import ListCustom from "../../components/ListCustom/ListCustom";
import RadarChartDesigner from "../../components/RadarChartDesigner";
import RadarGradientChartDesigner from "../../components/RadarGradientChartDesigner";
import StackedBarChartDesigner from "../../components/StackedBarChartDesigner";
import InteractivePanel from "../../components/InteractivePanel";
import TreeDesignerV2 from "../../components/TreeDesignerV2";
import PyramidDesignerV3D from "../../components/Pyramid3DV1Designer";
import TableWithBar from "../../components/TableWithBar";
import ListWithBar from "../../components/ListWithBar/ListWithBar";
import MarqueeList from "../../components/MarqueeList/MarqueeList";
import VerticalBarDiff from "../../components/VerticalBarDiff/VerticalBarDiff";
import CompaniesList from "../../components/CompaniesList/CompaniesList";
import AdminPanelsBlackConstructorIftame from "../../components/AdminPanelsBlackConstructor";
import { getItemBySlug, setDataFromJsonFile } from "../../store/item";
import CompanyTable from "../../components/CompanyTable/CompanyTable";
import Pentagon3D from "../../components/Pentagon3DDesigner";
import TreeNoDateDesigner from "../../components/TreeNoDateDesigner";
import DocumentCreatorIftame from "../../components/DocumentCreator";
import ComparisonSwotsDesigner from "../../components/ComparisonSwots/ComparisonSwotsDesigner";
import HexagonePage from "../../components/hexagon";
import ComparisonBarsDesigner from "../../components/ComparisonBars";
import LineChartDesigner from "../../components/lineChart";
import PseudoPyramidDesigner from "../../components/PseudoPyramidDesigner";
import DocumentCreatorIftameV2 from "../../components/DocumentCreatorV2";
import DocumentCreatorIftameV3 from "../../components/DocumentCreatorV3";
import KeyIndicatorDesigner from "../../components/KeyIndicatorDesigner";
import PromoBannerDesigner from "../../components/PromoBanner/PromoBannerDesigner";
import CompaniesListColors from "../../components/CompaniesListColors/CompaniesListColors";
import GaugeDesigner from "../../components/Gauge";
import InteractivePanelColor from "../../components/InteractivePanelColor";
import InteractivePanelLogo from "../../components/InteractivePanelLogo";
import UkMap from "../../components/UkMap";
import AdminPanelsConstructorIftame from "../../components/AdminPanelsConstructor";
import PageBuilderIftame from "../../components/PageBuilder";
import EuropeMap from "../../components/EuropeMap";
import DecisionTreeDesigner from "../../components/DecisionTreeDesigner";
import SwitzerlandMap from "../../components/SwitzerlandMap/SwitzerlandMap";
import LondonMap from "../../components/LondonMap";
import MoldovaMap from "../../components/MoldovaMap/MoldovaMap";
import LondonMapStats from "../../components/LondonMapStats/LondonMapStats";
import UkMapStats from "../../components/UkMapStats/UkMapStats";
import AsiaMap from "../../components/AsiaMap";
import WalesMap from "../../components/WalesMap";
import GlobalMap from "../../components/GlobalMap";
import GlobalMapStats from "../../components/GlobalMapStats/GlobalMapStats";
import UAEMap from "../../components/UAEMap";
import VerticalBarForGeoMaps from "../../components/VerticalBarForGeoMaps";
import UAEGeoMapStats from "../../components/UAEGeoMapStats";
import WalesMapStats from "../../components/WalesMapStats";
import UsaMap from "../../components/USAGeomap";
import GermanyMap from "../../components/GermanyMap";
import GulfGeoMapWhite from "../../components/GulfGeoMapWhite";
import ChisinauMap from "../../components/ChisinauMap";
import UkMapNew from "../../components/UkMapNew";
import TimeLine from "../../components/TimeLine/TimeLine";
import ScotlandMap from "../../components/ScotlandMap";
import ManchesterMap from "../../components/ManchesterMap";
import ManchesterMapStats from "../../components/ManchesterMapStats";
import ScotlandMapStats from "../../components/ScotlandMapStats";
import SerpentinePath from "../../components/SerpentinePath";
import FrameConstructor from "../../components/FrameConstructor";
import MoldovaGeoMap from "../../components/MoldovaMap";
import NorthIrelandMap from "../../components/NorthIrelandMap";
import NorthIrelandMapStats from "../../components/NorthIrelandMapStats";
import TimelineHorizontal from "../../components/TimelineHorizontal";
import FranceMap from "../../components/FranceMap";
import LondonMapDark from "../../components/LondonMapDark/LondonMapDark";
import LondonStatsDark from "../../components/LondonWithStatsDark/LondonStatsDark";
import CanadaMap from "../../components/CanadaMap";
import UkWithStatsDark from "../../components/UkMapStatsDark/UkMapStatsDark";
import GeoDashboard from "../../components/GeoDashboard";
import GeoDashboardV2 from "../../components/GeoDashboardV2";

import { listItemDemo } from "../../components/Dropdown/constants";
import { geoDashboardThemeData } from "../../components/GeoDashboard/geoDashboardTheme";
import ChinaMapStats from "../../components/ChinaMapStats/ChinaMapStats";
import UkStaticGeomap from "../../components/UkStaticGeomap";
import MoldovaMapStats from "../../components/MoldovaMapStats";
import IsraelMap from "../../components/IsraelMap";
import JapanMap from "../../components/JapanMap";
import CircularInfographUK from "../../components/CircularInfographUK";
import TimeSeries from "../../components/TimeSeries";
import TreeMap from "../../components/TreeMap";
import LeaderBoard from "../../components/LeaderBoard";
import TubeMap from "../../components/TubeMap";
import ForceDirectedTree from "../../components/ForceDirectedTree";
import HeatMap from "../../components/HeatMap";
import HeatMapGrid from "../../components/HeatMapGrid";
import PortraitImage from "../../components/PortraitImage";
import LogoutButton from "../../components/layout/LogoutButton";
import UKMapTopoLegend from "../../components/UKMapTopoLegend";
import DoughnutChart from "../../components/DoughnutChart";
import DealsStructure from "../../components/DealsStructure";
import ArrowProgressChart from "../../components/ArrowProgressChart";
import { LoginButton } from "../../components/layout/LoginButton";
import UniversalBar from "../../components/UniversalBar";
import TurkeyMap from "../../components/TurkeyMap";
import ReactJson from "react-json-view";
import TorontoMap from "../../components/TorontoMap";
import OntarioMap from "../../components/OntarioMap";
import BubbleChart from "../../components/BubbleChart";
import PolarChartDesigner from "../../components/PolarChart/PolarChartDesigner";
import MenaMap from "../../components/MenaMap";
import MiamiMapStats from "../../components/MiamiMapStats";
import FloridaMapStats from "../../components/FloridaMapStats";
import HallOfFameDataWrapper from "../../components/HallOfFameDataWrapper";
import SwitzerlandMapStats from "../../components/SwitzerlandMapStats";
import MiamiGeomap from "../../components/MiamiGeomap";
import DynamicLineChart from "../../components/DynamicLineChart";
import GlobalMapStatsV2 from "../../components/GlobalMapStatsV2/GlobalMapStats";
import RadarChartBlurred from "../../components/RadarChartBlurred/RadarChartBlurred";
import GlobalMapStatsV3 from "../../components/GlobalMapStatsV3/GlobalMapStats";
import MultiRadarChart from "../../components/MultiRadarChart";
import HallOfFameDataWrapperV2 from "../../components/HallOfFameDataWrapperV2";
import TreeDesignerWrapper from "../../components/TreeDesignerWrapper";
import DecisionTreeDesignerWrapper from "../../components/DecisionTreeDesignerWrapper";
import HarleyStreetMapbox from "../../components/HarleyStreetMapbox";
import HarleyStreetMap3D from "../../components/HarleyStreet3D";
import BuildingsMap3D from "../../components/BuildingsMap3D";
import FlowChart from "../../components/FlowChart";
import MapboxGeodashboardv1 from "../../components/MapboxGeodashboardv1";
import HexagonPageV2 from "../../components/HexagonV2";
import ToolsColectionWrapper from "../../components/ToolsColectionWrapper";
import UkMapChart from "../../components/UkMapChart";
import SouthKoreaMap from "../../components/SouthKoreaMap";
import RadialTree from "../../components/RadialTree";
import ChinaMap from "../../components/ChinaMap";
import IsraelMapStats from "../../components/IsraelMapStats";
import NetworkDiagram from "../../components/NetworkDiagram";
import GlobalMapStatsV4 from "../../components/GlobalMapStatsV4/GlobalMapStats";

const useStyles = makeStyles(() => ({
  page: {
    background: "#fff",
  },
  wrapper: {
    width: "calc(100% - 20px)",
    minHeight: "500px",
    margin: "auto",
    display: "flex",
    position: "relative",
    boxShadow: "0 0 1px #efefef",
    background: "#fff",
  },
}));

function EditPage() {
  const dispatch = useDispatch();

  const { diagramType, slug } = useParams();
  const classes = useStyles();
  const { data } = useSelector((state) => state.item);
  const navigate = useNavigate();

  const { isLoadingData, isLoadedData } = useSelector((state) => state.item);
  const { profile } = useSelector((state) => state.user);
  const isDataNeeded = !onCheckIsDataNeeded(diagramType);
  const isExternalRoute = onCheckIsExternalRoute(diagramType);
  const isInternalRoute = onCheckIsInternalRoute(diagramType);
  const [ itemLogs, setItemLogs ] = useState([]);

  const isPyramid = PYRAMID === diagramType;
  const isTree = TREE === diagramType;
  const isRectangleMindmap = RECT_MINDMAP === diagramType;
  const isTreeV2 = TREE_V2 === diagramType;
  const isMindMap = MIND_MAP === diagramType;
  const isCustomTable = CUSTOM_TABLE === diagramType;
  const isListCustom = NUM11 === diagramType;
  const isRadarChart = RADAR_CHART === diagramType;
  const isComparisonSwots = COMPARISON_SWOTS === diagramType;
  const isRadarGradientChart = RADAR_GRADIENT_CHART === diagramType;
  const isStackedBarChart = STACKED_BAR_CHART === diagramType;
  const isInteractivePanel = INTERACTIVE_PANEL === diagramType;
  const isInteractivePanelColor = INTERACTIVE_PANEL_COLOR === diagramType;
  const isInteractivePanelLogo = INTERACTIVE_PANEL_LOGO === diagramType;
  const isPyramid3D = PYRAMID_3D === diagramType;
  const isTableWithBar = TABLE_WITH_BAR === diagramType;
  const isListWithBar = LIST_WITH_BAR === diagramType;
  const isMarqueeList = MARQUEE_LIST_BAR === diagramType;
  const isVerticallBarDiff = VERTICAL_BAR_DIFF === diagramType;
  const isCompaniesList = COMPANIES_LIST === diagramType;
  const isTimeLine = TIME_LINE === diagramType;
  const isCompaniesTable = COMPANIES_TABLE === diagramType;
  const isPentagon3D = PENTAGON_3D === diagramType;
  const isTreeNoDate = TREE_NO_DATE === diagramType;
  const isDocumentCreator = DOCUMENT_CREATOR === diagramType;
  const isDocumentCreatorV2 = DOCUMENT_CREATOR_V2 === diagramType;
  const isDocumentCreatorV3 = DOCUMENT_CREATOR_V3 === diagramType;
  const isHexagonal = HEXAGON === diagramType;
  const isComparisonBars = COMPARISON_BARS === diagramType;
  const isLineChart = LINE_CHART === diagramType;
  const isPseudoPyramid = PSEUDO_PYRAMID === diagramType;
  const isKeyIndicator = KEY_INDICATOR === diagramType;
  const isPromoBanner = PROMO_BANNER === diagramType;
  const isCompaniesListColor = COMPANIES_LIST_COLOR === diagramType;
  const isGauge = GAUGE_CHART === diagramType;
  const isVertBarForMap = VERTICAL_BAR_FOR_MAP === diagramType;
  const isUniversalBar = UNIVERSAL_BAR === diagramType;
  const isRadarChartBlurred = RADAR_CHART_BLURRED === diagramType;
  const isUkMap = UK_MAP === diagramType;
  const isEuropeMap = EUROPE_MAP === diagramType;
  const isAdmPanConstBlack = ADM_PAN_BLACK_CONST === diagramType;
  const isSerpentinePath = SERPENTINE_PATH === diagramType;
  const isTimelineHorizontal = TIMELINE_HORIZONTAL === diagramType;
  const isAsiaMap = ASIA_MAP === diagramType;
  const isWalesMap = WALES_MAP === diagramType;
  const isOAEMap = UAE_MAP === diagramType;
  const isSwitzerlandMap = SWITZERLAND_MAP === diagramType;
  const isLondonMap = LONDON_MAP === diagramType;
  const isMoldovaMap = MOLDOVA_MAP === diagramType;
  const isMoldovaMapV2 = MOLDOVA_MAP_V2 === diagramType;
  const isLondonMapStats = LONDON_MAP_STATS === diagramType;
  const isUkMapStats = UK_MAP_STATS === diagramType;
  const isGlobalGeomap = GLOBAL_GEOMAP === diagramType;
  const isGlobalGeomapStats = GLOBAL_GEOMAP_STATS === diagramType;
  const isUAEGeoMapStats = UAE_GEO_MAP_STATS === diagramType;
  const isWalesMapStats = WALES_MAP_STATS === diagramType;
  const isUSAGeoMap = USA_GEOMAP === diagramType;
  const isGulfMapStats = GULF_REGION_MAP === diagramType;
  const isGermanyMap = GERMANY_MAP === diagramType;
  const isDecisionTree = DECISION_TREE === diagramType;
  const isRadialTree = RADIAL_TREE === diagramType;
  const isChisinauMap = CHISINAU_MAP === diagramType;
  const isUkNewMap = UK_MAP_NEW === diagramType;
  const isScotlandMap = SCOTLAND_MAP === diagramType;
  const isManchesterMap = MANCHESTER_MAP === diagramType;
  const isManchesterMapStats = MANCHESTER_MAP_STATS === diagramType;
  const isScotlandMapStats = SCOTLAND_MAP_STATS === diagramType;
  const isNorthIrelandMap = NORTH_IRELAND_MAP === diagramType;
  const isNorthIrelandMapStats = NORTH_IRELAND_MAP_STATS === diagramType;
  const isFranceMap = FRANCE_MAP === diagramType;
  const isLondonMapDark = LONDON_MAP_DARK === diagramType;
  const isLondonStatsDark = LONDON_STATS_DARK === diagramType;
  const isCanadaMap = CANADA_MAP === diagramType;
  const isUkStatsDark = UK_STATS_DARK === diagramType;
  const IsUkMapDark = UK_MAP_DARK === diagramType;
  const isGeoDashboards = GEO_DESHBOARDS === diagramType;
  const isGeoDashboardsV2 = GEO_DESHBOARDS_V2 === diagramType;
  const isChinaMapStats = CHINA_MAP_STATS === diagramType;
  const isUkMapStatic = UK_MAP_STATIC === diagramType;
  const isFlowChart = FLOW_CHART === diagramType;
  const isMoldovaMapStats = MOLDOVA_MAP_STATS === diagramType;
  const isIsraelMap = ISRAEL_MAP === diagramType;
  const isJapanMap = JAPAN_MAP === diagramType;
  const isCircularInfographUK = CIRCULAR_INFOGRAPH_UK === diagramType;
  const isTimeSeriesChart = TIME_SERIES_CHART === diagramType;
  const isFrameConstructor = FRAME_CONSTRUCTOR === diagramType;
  const isTreeMap = TREE_MAP === diagramType;
  const isLeaderBoard = LEADER_BOARD === diagramType;
  const isTubeMap = TUBE_MAP === diagramType;
  const isForceDirectedTree = FORCE_DIRECTED_TREE === diagramType;
  const isHeatMap = HEAT_MAP === diagramType;
  const isHeatMapGrid = HEAT_MAP_GRID === diagramType;
  const isPortraitImage = PORTRAIT_IMAGE === diagramType;
  const isHallOfFameConstructor = HALL_OF_FAME_CONSTRUCTOR === diagramType;
  const isHallOfFameConstructorV2 = HALL_OF_FAME_CONSTRUCTOR_V2 === diagramType;
  const isUkMapTopoLegend = UK_MAP_TOPO_LEGEND === diagramType;
  const isDoughnutChart = DOUGHNUT_CHART === diagramType;
  const isAdmPanConst = ADM_PAN_CONST === diagramType;
  const isPageBuilder = PAGE_BUILDER === diagramType;
  const isDealsStructure = DEALS_STRUCTURE === diagramType;
  const isArrowProgressChart = ARROW_PROGRESS_CHART === diagramType;
  const isTurkeyMap = TURKEY_MAP === diagramType;
  const isTorontoMap = TORONTO_MAP === diagramType;
  const isOntarioMap = ONTARIO_MAP === diagramType;
  const isBubbleChart = BUBBLE_CHART === diagramType;
  const isToolCollection = TOOLS_COLLECTION === diagramType;
  const isPolarChart = POLAR_CHART === diagramType;
  const isMenaMap = MENA_MAP === diagramType;
  const isMiamiMapStats = MIAMI_MAP_STATS === diagramType;
  const isFloridaMapStats = FLORIDA_MAP_STATS === diagramType;
  const isSwitzerlandMapStats = SWITZERLAND_MAP_STATS === diagramType;
  const isMiamiGeoMap = MIAMI_GEOMAP === diagramType;
  const isDynamicLineChart = DYNAMIC_LINE_CHART === diagramType;
  const isGlobalMapStatsV2 = GLOBAL_GEOMAP_STATS_V2 === diagramType;
  const isGlobalMapStatsV3 = GLOBAL_GEOMAP_STATS_V3 === diagramType;
  const isMultiRadarChart = MULTI_RADAR_CHART === diagramType;
  const isHarleyStreetMap2d = HARLEY_STREET_2D === diagramType;
  const isHarleyStreetMap3d = HARLEY_STREET_3D === diagramType;
  const isBuildingsMap3D = BUILDINGS_MAP_3D === diagramType;
  const isMapboxGeodashboardv1 = MAPBOX_GEDASHBOARD_V1 === diagramType;
  const isHexagonPageV2 = HEXAGON_V2 === diagramType;
  const isUkMapChart = UK_MAPCHART === diagramType;
  const isSouthKoreaMap = SOUTH_KOREA_MAP === diagramType;
  const isChinaMap = CHINA_MAP === diagramType;
  const isIsraelMapStats = ISRAEL_MAP_STATS === diagramType;
  const isNetworkDiagram = NETWORK_DIAGRAM === diagramType;
  const isGlobalMapStatsV4 = GLOBAL_GEOMAP_STATS_V4 === diagramType;

  useEffect(() => {
    if (!slug) return;
    dispatch(getItemBySlug(slug)).then((res) => {
      if (res) {
        const { logs } = res.payload;
        setItemLogs(logs);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const exportData = async (jsonData) => {
    try {
      const response = await fetch(jsonData);
      const data = await response.json();
      const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(data)
      )}`;
      const link = document.createElement("a");
      link.href = jsonString;
      link.download = "data.json";

      link.click();
    } catch (error) {
      console.error("Error fetching json data: ", error);
    }
  };

  useEffect(() => {
    if (onCheckIsDataNeeded(diagramType)) {
      let exampleData = {
        originalData: {},
      };
      // if (COMPANIES_LIST === diagramType) {
      //   exampleData = mockData;
      // }

      // if (COMPANIES_LIST_COLOR === diagramType) {
      //   exampleData = companiesListColorsMock;
      // }

      // dispatch(setMockData(JSON.stringify(exampleData)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diagramType]);

  const updateData = ({ updated_src }) => {
    if (!updated_src?.originalData) {
      return false;
    }

    dispatch(
      setDataFromJsonFile(
        JSON.stringify({ originalData: updated_src?.originalData })
      )
    );
    return true;
  };

  return (
    <div className={classes.page}>
      <AppBar position="fixed" style={{ height: "50px" }}>
        <Toolbar
          style={{
            textAlign: "center",
            minHeight: "50px",
          }}
        >
          <Link to={ROOT} style={{ background: "#fff", padding: "2px 8px" }}>
            <img
              src={"/assets/Logo.webp"}
              alt="Logo"
              height={46}
              style={{ display: "block" }}
            />
          </Link>
          <Typography
            variant="h6"
            component="h6"
            style={{
              padding: "0 16px",
            }}
          >
            {getName(diagramType)} style infographic creation page.
          </Typography>
          <div
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              marginLeft: "auto",
              textAlign: "right",
            }}
          >
            <UserName />
            <LoginButton />
            <LogoutButton />
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ paddingTop: "60px" }}>
        <>
          {isGeoDashboards ? (
            <LayoutActions
              type={diagramType}
              listItem={geoDashboardThemeData}
            />
          ) : (
            <LayoutActions type={diagramType} listItem={listItemDemo} />
          )}
        </>
        <div className={`${classes.wrapper} diagram-view-container`}>
          {isLoadedData && (
            <>
              {isInternalRoute && (
                <>
                  {isPyramid && (
                    <PyramidDesignerV2 editMode={true} data={data} />
                  )}
                  {isTree && (
                    <TreeDesignerWrapper data={data} isEditMode={true} />
                  )}
                  {isTreeV2 && <TreeDesignerV2 data={data} />}
                  {isTreeNoDate && <TreeNoDateDesigner data={data} />}
                  {isMindMap && (
                    <MindMapDesigner isEditMode={true} data={data} />
                  )}
                  {isDecisionTree && (
                    <DecisionTreeDesignerWrapper
                      data={data}
                      isEditMode={true}
                    />
                  )}
                  {isRectangleMindmap && (
                    <RectangleMindmapDesigner data={data} />
                  )}
                  {isAdmPanConst && (
                    <AdminPanelsConstructorIftame
                      data={data}
                      isEditMode={true}
                      editDocMode={true}
                    />
                  )}
                  {isPageBuilder && (
                    <PageBuilderIftame
                      data={data}
                      isEditMode={true}
                      editDocMode={true}
                    />
                  )}
                  {isCustomTable && <CustomTable data={data} />}
                  {isTableWithBar && <TableWithBar data={data} />}
                  {isListCustom && <ListCustom data={data} />}
                  {isRadarChart && <RadarChartDesigner data={data} />}
                  {isComparisonSwots && <ComparisonSwotsDesigner data={data} />}
                  {isVertBarForMap && <VerticalBarForGeoMaps data={data} />}
                  {isUniversalBar && <UniversalBar data={data} />}
                  {isRadarChartBlurred && <RadarChartBlurred data={data} />}
                  {isRadarGradientChart && (
                    <RadarGradientChartDesigner data={data} />
                  )}
                  {isSerpentinePath && <SerpentinePath data={data} />}
                  {isTimelineHorizontal && <TimelineHorizontal data={data} />}
                  {isStackedBarChart && <StackedBarChartDesigner data={data} />}
                  {isInteractivePanel && <InteractivePanel data={data} />}
                  {isInteractivePanelColor && (
                    <InteractivePanelColor data={data} />
                  )}
                  {isInteractivePanelLogo && (
                    <InteractivePanelLogo data={data} />
                  )}
                  {isPyramid3D && <PyramidDesignerV3D data={data} />}
                  {isPentagon3D && <Pentagon3D data={data} />}
                  {isListWithBar && <ListWithBar data={data} />}
                  {isMarqueeList && <MarqueeList data={data} />}
                  {isVerticallBarDiff && <VerticalBarDiff data={data} />}
                  {isCompaniesTable && <CompanyTable data={data} />}
                  {isHexagonal && <HexagonePage data={data} />}
                  {isComparisonBars && <ComparisonBarsDesigner data={data} />}
                  {isLineChart && <LineChartDesigner data={data} />}
                  {isCompaniesList && (
                    <CompaniesList data={data} isEditMode={true} />
                  )}
                  {isCompaniesListColor && (
                    <CompaniesListColors data={data} isEditMode={true} />
                  )}
                  {isDocumentCreator && (
                    <DocumentCreatorIftame data={data} editDocMode={true} />
                  )}
                  {isToolCollection && (
                    <ToolsColectionWrapper data={data} isEditMode={true} />
                  )}
                  {isDocumentCreatorV2 && (
                    <DocumentCreatorIftameV2 data={data} editDocMode={true} />
                  )}
                  {isDocumentCreatorV3 && (
                    <DocumentCreatorIftameV3 data={data} />
                  )}
                  {isPseudoPyramid && <PseudoPyramidDesigner data={data} />}
                  {getIs3DGraph(diagramType) && (
                    <Graph3DDesigner data={data} diagramType={diagramType} />
                  )}
                  {isTimeLine && <TimeLine data={data} />}
                  {isKeyIndicator && (
                    <KeyIndicatorDesigner data={data} isEditMode={true} />
                  )}
                  {isPromoBanner && (
                    <PromoBannerDesigner data={data} isEditMode={true} />
                  )}
                  {isUkMap && <UkMap data={data} />}
                  {isEuropeMap && <EuropeMap data={data} />}
                  {isAsiaMap && <AsiaMap data={data} />}
                  {isWalesMap && <WalesMap data={data} />}
                  {isOAEMap && <UAEMap data={data} />}
                  {isSwitzerlandMap && <SwitzerlandMap data={data} />}
                  {isLondonMap && <LondonMap data={data} />}
                  {isMoldovaMap && <MoldovaMap data={data} />}
                  {isMoldovaMapV2 && <MoldovaGeoMap data={data} />}
                  {isUkMapStats && <UkMapStats data={data} />}
                  {isLondonMapStats && <LondonMapStats data={data} />}
                  {isGlobalGeomap && <GlobalMap data={data} />}
                  {isGlobalGeomapStats && <GlobalMapStats data={data} />}
                  {isUAEGeoMapStats && <UAEGeoMapStats data={data} />}
                  {isWalesMapStats && <WalesMapStats data={data} />}
                  {isUSAGeoMap && <UsaMap data={data} />}
                  {isGulfMapStats && <GulfGeoMapWhite data={data} />}
                  {isHallOfFameConstructor && (
                    <HallOfFameDataWrapper data={data} isEditMode={true} />
                  )}
                  {isHallOfFameConstructorV2 && (
                    <HallOfFameDataWrapperV2 data={data} isEditMode={true} />
                  )}
                  {isFlowChart && <FlowChart data={data} isEditMode={true} />}
                  {isAdmPanConstBlack && (
                    <AdminPanelsBlackConstructorIftame
                      data={data}
                      isEditMode={true}
                      editDocMode={true}
                    />
                  )}
                  {isGermanyMap && <GermanyMap data={data} />}
                  {isChisinauMap && <ChisinauMap data={data} />}
                  {isUkNewMap && <UkMapNew data={data} />}
                  {isScotlandMap && <ScotlandMap data={data} />}
                  {isManchesterMap && <ManchesterMap data={data} />}
                  {isManchesterMapStats && <ManchesterMapStats data={data} />}
                  {isScotlandMapStats && <ScotlandMapStats data={data} />}
                  {isNorthIrelandMap && <NorthIrelandMap data={data} />}
                  {isNorthIrelandMapStats && (
                    <NorthIrelandMapStats data={data} />
                  )}
                  {isFranceMap && <FranceMap data={data} />}
                  {isLondonMapDark && <LondonMapDark data={data} />}
                  {isLondonStatsDark && <LondonStatsDark data={data} />}
                  {isCanadaMap && <CanadaMap data={data} />}
                  {isUkStatsDark && <UkWithStatsDark data={data} />}
                  {isGeoDashboards && (
                    <GeoDashboard data={data} isEditMode={true} />
                  )}
                  {isFrameConstructor && (
                    <FrameConstructor data={data} isEditMode={true} />
                  )}
                  {isGeoDashboardsV2 && (
                    <GeoDashboardV2 data={data} isEditMode={true} />
                  )}
                  {isChinaMapStats && <ChinaMapStats data={data} />}
                  {isUkMapStatic && <UkStaticGeomap data={data} />}
                  {isMoldovaMapStats && <MoldovaMapStats data={data} />}
                  {isIsraelMap && <IsraelMap data={data} />}
                  {isJapanMap && <JapanMap data={data} />}
                  {isCircularInfographUK && <CircularInfographUK data={data} />}
                  {isTimeSeriesChart && <TimeSeries data={data} />}
                  {isTreeMap && <TreeMap data={data} />}
                  {isLeaderBoard && <LeaderBoard data={data} />}
                  {isTubeMap && <TubeMap data={data} />}
                  {isRadialTree && <RadialTree data={data} />}
                  {isForceDirectedTree && <ForceDirectedTree data={data} />}
                  {isHeatMap && <HeatMap data={data} />}
                  {isHeatMapGrid && <HeatMapGrid data={data} />}
                  {isPortraitImage && <PortraitImage data={data} />}
                  {isUkMapTopoLegend && <UKMapTopoLegend data={data} />}
                  {isDoughnutChart && <DoughnutChart data={data} />}
                  {isDealsStructure && <DealsStructure data={data} />}
                  {isArrowProgressChart && <ArrowProgressChart data={data} />}
                  {isTurkeyMap && <TurkeyMap data={data} />}
                  {isTorontoMap && <TorontoMap data={data} />}
                  {isOntarioMap && <OntarioMap data={data} />}
                  {isBubbleChart && <BubbleChart data={data} />}
                  {isPolarChart && <PolarChartDesigner data={data} />}
                  {isMenaMap && <MenaMap data={data} />}
                  {isMiamiMapStats && <MiamiMapStats data={data} />}
                  {isFloridaMapStats && <FloridaMapStats data={data} />}
                  {isSwitzerlandMapStats && <SwitzerlandMapStats data={data} />}
                  {isMiamiGeoMap && <MiamiGeomap data={data} />}
                  {isDynamicLineChart && <DynamicLineChart data={data} />}
                  {isGlobalMapStatsV2 && <GlobalMapStatsV2 data={data} />}
                  {isGlobalMapStatsV3 && <GlobalMapStatsV3 data={data} />}
                  {isMultiRadarChart && <MultiRadarChart data={data} />}
                  {isHarleyStreetMap2d && <HarleyStreetMapbox data={data} />}
                  {isHarleyStreetMap3d && <HarleyStreetMap3D data={data} />}
                  {isBuildingsMap3D && <BuildingsMap3D data={data} />}
                  {isMapboxGeodashboardv1 && (
                    <MapboxGeodashboardv1 data={data} />
                  )}
                  {isHexagonPageV2 && <HexagonPageV2 data={data} />}
                  {isUkMapChart && (
                    <UkMapChart data={data} editDocMode={true} />
                  )}
                  {isSouthKoreaMap && <SouthKoreaMap data={data} />}
                  {isChinaMap && <ChinaMap data={data} />}
                  {isIsraelMapStats && <IsraelMapStats data={data} />}
                  {isNetworkDiagram && (
                    <NetworkDiagram data={data} isEditMode={true} />
                  )}
                  {isGlobalMapStatsV4 && (
                    <GlobalMapStatsV4 data={data} isEditMode={true} />
                  )}
                </>
              )}

              {isExternalRoute && <Iframe data={data} type={diagramType} />}
            </>
          )}
          {isInternalRoute && (
            <>{isGauge && <GaugeDesigner data={data} isEditMode={true} />}</>
          )}
          {isLoadingData && <Loader />}
          {isLoadedData && isDataNeeded && (
            <ReactJson
              src={data}
              onDelete={updateData}
              onAdd={updateData}
              onEdit={updateData}
            />
          )}
          {
            itemLogs?.length > 0 && (
              <div className="logs-container">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxHeight: '800px', overflow: 'scroll' }} >
                  {
                    itemLogs?.map((log) => (
                      <li key={log?.id} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', padding: '5px 10px', justifyContent: 'space-between', borderBottom: '1px solid #ccc' }}>
                        <span>{log?.dt_created}</span>
                        <span>{log?.user}</span>
                        <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => exportData(`${window.location.origin}/files/${log?.path}`)}>Download</span>
                        {
                          Object.keys(log?.changes)?.length > 0 && (
                            <span style={{ display: "block", width: "100%", textAlign: "center" }}>
                              <strong>{log?.user}</strong> has updated the following items:
                              <br />
                              {
                                Object.keys(log?.changes)?.map((key) => (
                                  <span key={key} >
                                    {key}, {" "}
                                  </span>
                                ))
                              }
                            </span>

                          )
                        }
                      </li>

                    ))
                  }
                </ul>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default EditPage;
