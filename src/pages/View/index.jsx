import React, { useEffect, lazy, Suspense, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItemBySlug, getItemBySlugExample } from "../../store/item";
import { onCheckIsInternalRoute } from "../../constants/routes";
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
  ADM_PAN_BLACK_CONST,
  TREE_V2,
  TABLE_WITH_BAR,
  PYRAMID_3D,
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
  ADMIN_BUTTONS,
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
  DECISION_TREE,
  RADIAL_TREE,
  SWITZERLAND_MAP,
  LONDON_MAP,
  MOLDOVA_MAP,
  LONDON_MAP_STATS,
  WALES_MAP_STATS,
  UK_MAP_STATS,
  UAE_MAP,
  GLOBAL_GEOMAP,
  GLOBAL_GEOMAP_STATS,
  VERTICAL_BAR_FOR_MAP,
  UAE_GEO_MAP_STATS,
  ASIA_MAP,
  WALES_MAP,
  USA_GEOMAP,
  GULF_REGION_MAP,
  GERMANY_MAP,
  CHISINAU_MAP,
  EUROPE_MAP,
  UK_MAP_NEW,
  TIME_LINE,
  SCOTLAND_MAP,
  MANCHESTER_MAP,
  SCOTLAND_MAP_STATS,
  SERPENTINE_PATH,
  MANCHESTER_MAP_STATS,
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
  DEALS_STRUCTURE,
  ARROW_PROGRESS_CHART,
  UNIVERSAL_BAR,
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
  DASHBOARD_CONSTRUCTOR_NO_CODE,
  NO_CODE_MAPS,
  TIME_MACHINE,
  MIND_NO_CODE_3D,
  CHINA_MAP,
  ISRAEL_MAP_STATS,
  FLOW_CHART_V2,
  NETWORK_DIAGRAM,
  GLOBAL_GEOMAP_STATS_V4,
  PAGE_BUILDER,
} from "../../constants/diagram";
import Loader from "../../components/Loader";
import { getIs3DGraph } from "../../components/Graph3DDesigner/utils";
import PolarChartDesigner from "../../components/PolarChart/PolarChartDesigner";
import PyramidDesignerV2 from "../../components/PyramidDesignerV2";
import RectangleMindmapDesigner from "../../components/RectangleMindmap/RectangleMindmap";
import RadarChartBlurred from "../../components/RadarChartBlurred/RadarChartBlurred";
import MindMapDesigner from "../../components/MindMapDesigner";
import CustomTable from "../../components/CustomTable/CustomTable";

// memory expensive
const Graph3DDesigner = lazy(() =>
  import("../../components/Graph3DDesigner/Graph3DDesigner")
);
const ListCustom = lazy(() => import("../../components/ListCustom/ListCustom"));
const RadarChartDesigner = lazy(() =>
  import("../../components/RadarChartDesigner")
);
const RadarGradientChartDesigner = lazy(() =>
  import("../../components/RadarGradientChartDesigner")
);

const NoCodeMaps = lazy(() => import("../../components/NoCodeMaps"));

const DashboardConstructorNoCode = lazy(() =>
  import("../../components/DashboardConstructorNoCode")
);

const StackedBarChartDesigner = lazy(() =>
  import("../../components/StackedBarChartDesigner")
);
const InteractivePanel = lazy(() =>
  import("../../components/InteractivePanel")
);
const TreeDesignerV2 = lazy(() => import("../../components/TreeDesignerV2"));
const TableWithBar = lazy(() => import("../../components/TableWithBar"));
const PyramidDesignerV3D = lazy(() =>
  import("../../components/Pyramid3DV1Designer")
);
const TurkeyMap = lazy(() => import("../../components/TurkeyMap"));
const TorontoMap = lazy(() => import("../../components/TorontoMap"));
const ListWithBar = lazy(() =>
  import("../../components/ListWithBar/ListWithBar")
);
const FrameConstructor = lazy(() =>
  import("../../components/FrameConstructor")
);
const MarqueeList = lazy(() =>
  import("../../components/MarqueeList/MarqueeList")
);
const VerticalBarDiff = lazy(() =>
  import("../../components/VerticalBarDiff/VerticalBarDiff")
);
const CompaniesList = lazy(() =>
  import("../../components/CompaniesList/CompaniesList")
);
const CompanyTable = lazy(() =>
  import("../../components/CompanyTable/CompanyTable")
);
const Pentagon3D = lazy(() => import("../../components/Pentagon3DDesigner"));
const TreeNoDateDesigner = lazy(() =>
  import("../../components/TreeNoDateDesigner")
);
const DocumentCreator = lazy(() =>
  import("../../components/DocumentCreator/DocumentCreator")
);
const ComparisonSwotsDesigner = lazy(() =>
  import("../../components/ComparisonSwots/ComparisonSwotsDesigner")
);
const HexagonPage = lazy(() => import("../../components/hexagon"));
const ComparisonBarsDesigner = lazy(() =>
  import("../../components/ComparisonBars/ComparisonBarsDesigner")
);
const LineChartDesigner = lazy(() => import("../../components/lineChart"));
const AdminButtons = lazy(() => import("../../components/AdminButtons"));
const PseudoPyramidDesigner = lazy(() =>
  import("../../components/PseudoPyramidDesigner")
);
const DocumentCreatorV2 = lazy(() =>
  import("../../components/DocumentCreatorV2/DocumentCreatorV2")
);
const DocumentCreatorV3 = lazy(() =>
  import("../../components/DocumentCreatorV3/DocumentCreatorV3")
);
const AdminPanelsConstructorIftame = lazy(() =>
  import("../../components/AdminPanelsConstructor/AdminPanelsConstructor")
);

const PageBuilderIftame = lazy(() =>
  import("../../components/PageBuilder/PageBuilder")
);

const AdminPanelsBlackConstructorIftame = lazy(() =>
  import(
    "../../components/AdminPanelsBlackConstructor/AdminPanelsBlackConstructor"
  )
);
const KeyIndicatorDesigner = lazy(() =>
  import("../../components/KeyIndicatorDesigner")
);
const PromoBannerDesigner = lazy(() =>
  import("../../components/PromoBanner/PromoBannerDesigner")
);
const CompaniesListColors = lazy(() =>
  import("../../components/CompaniesListColors/CompaniesListColors")
);
const GaugeDesigner = lazy(() => import("../../components/Gauge"));

const InteractivePanelColor = lazy(() =>
  import("../../components/InteractivePanelColor")
);
const InteractivePanelLogo = lazy(() =>
  import("../../components/InteractivePanelLogo")
);
const UkMap = lazy(() => import("../../components/UkMap"));
const AsiaMap = lazy(() => import("../../components/AsiaMap"));
const WalesMap = lazy(() => import("../../components/WalesMap"));
const DecisionTreeDesignerWrapper = lazy(() =>
  import("../../components/DecisionTreeDesignerWrapper")
);
const SwitzerlandMap = lazy(() =>
  import("../../components/SwitzerlandMap/SwitzerlandMap")
);
const LondonMap = lazy(() => import("../../components/LondonMap"));
const MoldovaMap = lazy(() => import("../../components/MoldovaMap/MoldovaMap"));
const LondonMapStats = lazy(() =>
  import("../../components/LondonMapStats/LondonMapStats")
);
const UkMapStats = lazy(() => import("../../components/UkMapStats/UkMapStats"));
const GlobalMap = lazy(() => import("../../components/GlobalMap"));
const GlobalMapStats = lazy(() =>
  import("../../components/GlobalMapStats/GlobalMapStats")
);
const UAEMap = lazy(() => import("../../components/UAEMap"));
const VerticalBarForGeoMaps = lazy(() =>
  import("../../components/VerticalBarForGeoMaps")
);
const UniversalBar = lazy(() => import("../../components/UniversalBar"));
const UAEGeoMapStats = lazy(() => import("../../components/UAEGeoMapStats"));
const WalesMapStats = lazy(() => import("../../components/WalesMapStats"));
const UsaMap = lazy(() => import("../../components/USAGeomap"));
const ChisinauMap = lazy(() => import("../../components/ChisinauMap"));
const GermanyMap = lazy(() => import("../../components/GermanyMap"));
const GulfGeoMapWhite = lazy(() => import("../../components/GulfGeoMapWhite"));
const EuropeMap = lazy(() => import("../../components/EuropeMap"));
const UkMapNew = lazy(() => import("../../components/UkMapNew"));
const TimeLine = lazy(() => import("../../components/TimeLine/TimeLine"));
const ScotlandMap = lazy(() => import("../../components/ScotlandMap"));
const ManchesterMap = lazy(() => import("../../components/ManchesterMap"));
const ScotlandMapStats = lazy(() =>
  import("../../components/ScotlandMapStats")
);
const SerpentinePath = lazy(() => import("../../components/SerpentinePath"));
const MoldovaGeoMap = lazy(() => import("../../components/MoldovaMap"));
const ManchesterMapStats = lazy(() =>
  import("../../components/ManchesterMapStats")
);
const NorthIrelandMap = lazy(() => import("../../components/NorthIrelandMap"));
const NorthIrelandMapStats = lazy(() =>
  import("../../components/NorthIrelandMapStats")
);
const TimelineHorizontal = lazy(() =>
  import("../../components/TimelineHorizontal")
);
const FranceMap = lazy(() => import("../../components/FranceMap"));
const LondonMapDark = lazy(() =>
  import("../../components/LondonMapDark/LondonMapDark")
);
const LondonStatsDark = lazy(() =>
  import("../../components/LondonWithStatsDark/LondonStatsDark")
);
const CanadaMap = lazy(() => import("../../components/CanadaMap"));
const UkWithStatsDark = lazy(() =>
  import("../../components/UkMapStatsDark/UkMapStatsDark")
);
const UkMapDark = lazy(() => import("../../components/UkMapDark"));
const GeoDashboard = lazy(() => import("../../components/GeoDashboard"));
const GeoDashboardV2 = lazy(() => import("../../components/GeoDashboardV2"));
const ChinaMapStats = lazy(() =>
  import("../../components/ChinaMapStats/ChinaMapStats")
);
const UkStaticGeomap = lazy(() => import("../../components/UkStaticGeomap"));
const MoldovaMapStats = lazy(() => import("../../components/MoldovaMapStats"));
const IsraelMap = lazy(() => import("../../components/IsraelMap"));
const JapanMap = lazy(() => import("../../components/JapanMap"));
const CircularInfographUK = lazy(() =>
  import("../../components/CircularInfographUK")
);
const TimeSeries = lazy(() => import("../../components/TimeSeries"));
const TreeMap = lazy(() => import("../../components/TreeMap"));
const LeaderBoard = lazy(() => import("../../components/LeaderBoard"));
const TubeMap = lazy(() => import("../../components/TubeMap"));
const RadialTree = lazy(() => import("../../components/RadialTree"));
const ForceDirectedTree = lazy(() =>
  import("../../components/ForceDirectedTree")
);
const HeatMap = lazy(() => import("../../components/HeatMap"));
const HeatMapGrid = lazy(() => import("../../components/HeatMapGrid"));
const PortraitImage = lazy(() => import("../../components/PortraitImage"));
const UKMapTopoLegend = lazy(() => import("../../components/UKMapTopoLegend"));
const DoughnutChart = lazy(() => import("../../components/DoughnutChart"));
const DealsStructure = lazy(() => import("../../components/DealsStructure"));
const ArrowProgressChart = lazy(() =>
  import("../../components/ArrowProgressChart")
);

const OntarioMap = lazy(() => import("../../components/OntarioMap"));
const BubbleChart = lazy(() => import("../../components/BubbleChart"));
const MenaMap = lazy(() => import("../../components/MenaMap"));
const MiamiMapStats = lazy(() => import("../../components/MiamiMapStats"));
const FloridaMapStats = lazy(() => import("../../components/FloridaMapStats"));
const HallOfFameDataWrapper = lazy(() =>
  import("../../components/HallOfFameDataWrapper")
);
const SwitzerlandMapStats = lazy(() =>
  import("../../components/SwitzerlandMapStats")
);
const MiamiGeomap = lazy(() => import("../../components/MiamiGeomap"));
const DynamicLineChart = lazy(() =>
  import("../../components/DynamicLineChart")
);
const GlobalMapStatsV3 = lazy(() =>
  import("../../components/GlobalMapStatsV3/GlobalMapStats")
);

const TreeDesignerWrapper = lazy(() =>
  import("../../components/TreeDesignerWrapper")
);

const HarleyStreetMapbox = lazy(() =>
  import("../../components/HarleyStreetMapbox")
);

const FlowChart = lazy(() => import("../../components/FlowChart"));

const BuildingsMap3D = lazy(() => import("../../components/BuildingsMap3D"));

const HarleyStreetMap3D = lazy(() => import("../../components/HarleyStreet3D"));

const MapboxGeodashboardv1 = lazy(() =>
  import("../../components/MapboxGeodashboardv1")
);

const HexagonPageV2 = lazy(() => import("../../components/HexagonV2"));
const ToolsColectionWrapper = lazy(() =>
  import("../../components/ToolsColectionWrapper")
);
const UkMapConstructor = lazy(() =>
  import("../../components/UkMapChart/UkMapConstructor")
);

const SouthKoreaMap = lazy(() => import("../../components/SouthKoreaMap"));

const ChinaMap = lazy(() => import("../../components/ChinaMap"));

const IsraelMapStats = lazy(() => import("../../components/IsraelMapStats"));

const CircularMindmap3DNoCode = lazy(() =>
  import("../../components/CircularMindmap3DNoCode")
);

const TimeMachine = lazy(() => import("../../components/TimeMachine"));

const FlowChartV2 = lazy(() => import("../../components/FlowChartV2"));

const NetworkDiagram = lazy(() => import("../../components/NetworkDiagram"));

const GlobalMapStatsV4 = lazy(() =>
  import("../../components/GlobalMapStatsV4/GlobalMapStats")
);

import GlobalMapStatsV2 from "../../components/GlobalMapStatsV2/GlobalMapStats";
import MultiRadarChart from "../../components/MultiRadarChart";
import HallOfFameDataWrapperV2 from "../../components/HallOfFameDataWrapperV2";
import { getUserInfo } from "../../store/user";
import { LOGIN_URL } from "../../libs/auth";
import API from "../../API";
import ProductPagePassword from "./ProductPagePassword";
import RestrictedAccess from "./RestrictedAccess";

function ViewPage({ isPaginationMode = false, pageData, pageStatus }) {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { search } = useLocation();
  const urlParam = new URLSearchParams(useLocation().search); // coming from the parent url iframing this panel
  const parentOrigin = urlParam.get("parentUrl");
  const item = useSelector((state) => state.item);
  const [params, setParams] = useState(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [ password, setPassword ] = useState('');
  const [ hasError, setHasError ] = useState(false);
  const [ user, setUser ] = useState({});
  const verifyDiagramPassword = async () => {
    if (!password) {
      return;
    }
    if (!slug) {
      return;
    }
    try{
        const response = await API.verifyDiagramPasskey({passkey:password}, slug);
        if(response.status === 200){
            dispatch(getItemBySlug(slug));
            setShowPasswordModal(false);
            setHasError(false);
        }
    }catch(error){
      setHasError(true);
    }
  };

  useEffect(() => {
    if (item?.password_required) {
      setShowPasswordModal(true);
    }else{
      setShowPasswordModal(false);
    }
  }, [item]);


  const fetchUserInfo = async () => {
    try {
      const response = await dispatch(getUserInfo());
      if (response?.error) {
        window.location.href = LOGIN_URL;
        return
      }
      if (response?.payload) {
        if (!response?.payload?.email || !response?.payload?.email?.endsWith("@dkv.global")) {
          console.log("invalid user");
          window.location.href = LOGIN_URL;
          return
        }
        setUser(response?.payload)
        return true;
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    if (window !== window.top) { // if this page is iframed
      if (item && item?.is_protected === true) {
        const isDKVUrl = parentOrigin.endsWith("dkv.global");
        if (!isDKVUrl){
          // Get the getUserInfo
          dispatch(getUserInfo()).then((data) => {
            // Extract the username from the payload
            const { username } = data?.payload;
            // If the username is not defined, redirect the user to the login page
            if (!username) {
              const originDomain = "https://tools.dkv.global";
              // Construct the login URL with the current URL as the redirect URL
              const loginUrl = `${originDomain}/login/?next=${encodeURIComponent(
                parentOrigin || window.location.href
              )}`;
              // Send a message to the parent window to redirect
              window.parent.postMessage(
                { type: "redirectToLogin", url: loginUrl },
                parentOrigin
              );
              window.parent.postMessage(
                { type: "pageIsProtected" }, // send a message to the parent window that the page is protected
                parentOrigin
              );
            }
          });
        }
      }
    } else  {
      fetchUserInfo();
    }
  }, [parentOrigin, item]);

  let { data, status } = useSelector((state) => state.item);

  if (isPaginationMode) {
    data = pageData;
    status = pageStatus;
  }

  const s3 = window.location.href.split("?")[1];

  useEffect(() => {
    if (!isPaginationMode) {
      const params = {};

      new URLSearchParams(search).forEach((value, key) => {
        params[key] = value;
      });

      const keys = Object.keys(params);

      if (keys?.length > 0) {
        setParams(params);
      }

      if (slug === "demo_example") {
        dispatch(getItemBySlugExample(s3.split("/")[0]));
        return;
      }

      if (!slug) return;
      dispatch(getItemBySlug(slug));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  if (!slug && !isPaginationMode) return null;

  const isInternalRoute = onCheckIsInternalRoute(data?.type);

  const isPyramid =
    isInternalRoute && PYRAMID === data?.type && status === "succeeded";
  const isTree =
    isInternalRoute && TREE === data?.type && status === "succeeded";
  const isTreeV2 =
    isInternalRoute && TREE_V2 === data?.type && status === "succeeded";

  const isRectangleMindmap =
    isInternalRoute && RECT_MINDMAP === data?.type && status === "succeeded";

  const isMindMap =
    isInternalRoute && MIND_MAP === data?.type && status === "succeeded";

  const isCustomTable =
    isInternalRoute && CUSTOM_TABLE === data?.type && status === "succeeded";
  const isListCustom =
    isInternalRoute && NUM11 === data?.type && status === "succeeded";

  const isDecisionTree =
    isInternalRoute && DECISION_TREE === data?.type && status === "succeeded";

  const isRadialTree =
    isInternalRoute && RADIAL_TREE === data?.type && status === "succeeded";

  const isInteractivePanel =
    isInternalRoute &&
    INTERACTIVE_PANEL === data?.type &&
    status === "succeeded";

  const isFrameConstructor =
    isInternalRoute &&
    FRAME_CONSTRUCTOR === data?.type &&
    status === "succeeded";

  const isInteractivePanelColor =
    isInternalRoute &&
    INTERACTIVE_PANEL_COLOR === data?.type &&
    status === "succeeded";

  const isInteractivePanelLogo =
    isInternalRoute &&
    INTERACTIVE_PANEL_LOGO === data?.type &&
    status === "succeeded";

  const isHallOfFameConstructor =
    isInternalRoute &&
    HALL_OF_FAME_CONSTRUCTOR === data?.type &&
    status === "succeeded";

  const isHallOfFameConstructorV2 =
    isInternalRoute &&
    HALL_OF_FAME_CONSTRUCTOR_V2 === data?.type &&
    status === "succeeded";

  const isToolCollection =
    isInternalRoute &&
    TOOLS_COLLECTION === data?.type &&
    status === "succeeded";

  const is3DGraph =
    isInternalRoute && getIs3DGraph(data?.type) && status === "succeeded";

  const isRadarChart =
    isInternalRoute && RADAR_CHART === data?.type && status === "succeeded";
  const isComparisonSwots =
    isInternalRoute &&
    COMPARISON_SWOTS === data?.type &&
    status === "succeeded";
  const isComparisonBars =
    isInternalRoute && COMPARISON_BARS === data?.type && status === "succeeded";
  const isRadarGradientChart =
    isInternalRoute &&
    RADAR_GRADIENT_CHART === data?.type &&
    status === "succeeded";
  const isStackedBarChart =
    isInternalRoute &&
    STACKED_BAR_CHART === data?.type &&
    status === "succeeded";

  const isTableWithBar =
    isInternalRoute && TABLE_WITH_BAR === data?.type && status === "succeeded";

  const isPyramid3D =
    isInternalRoute && PYRAMID_3D === data?.type && status === "succeeded";

  const isSerpentinePath =
    isInternalRoute && SERPENTINE_PATH === data?.type && status === "succeeded";

  const isTimelineHorizontal =
    isInternalRoute &&
    TIMELINE_HORIZONTAL === data?.type &&
    status === "succeeded";

  const isListWithBar =
    isInternalRoute && LIST_WITH_BAR === data?.type && status === "succeeded";

  const isPentagon3D =
    isInternalRoute && PENTAGON_3D === data?.type && status === "succeeded";

  const isTreeNoDate =
    isInternalRoute && TREE_NO_DATE === data?.type && status === "succeeded";

  const isMarqueeList =
    isInternalRoute &&
    MARQUEE_LIST_BAR === data?.type &&
    status === "succeeded";

  const isVerticallBarDiff =
    isInternalRoute &&
    VERTICAL_BAR_DIFF === data?.type &&
    status === "succeeded";

  const isCompaniesList =
    isInternalRoute && COMPANIES_LIST === data?.type && status === "succeeded";

  const isCompaniesListColor =
    isInternalRoute &&
    COMPANIES_LIST_COLOR === data?.type &&
    status === "succeeded";

  const isCompaniesTable =
    isInternalRoute && COMPANIES_TABLE === data?.type && status === "succeeded";

  const isDocumentCreator =
    isInternalRoute &&
    DOCUMENT_CREATOR === data?.type &&
    status === "succeeded";

  const isTimeLine =
    isInternalRoute && TIME_LINE === data?.type && status === "succeeded";

  const isDocumentCreatorV2 =
    isInternalRoute &&
    DOCUMENT_CREATOR_V2 === data?.type &&
    status === "succeeded";

  const isDocumentCreatorV3 =
    isInternalRoute &&
    DOCUMENT_CREATOR_V3 === data?.type &&
    status === "succeeded";

  const isUkMapChart =
    isInternalRoute && UK_MAPCHART === data?.type && status === "succeeded";

  const isHexagon =
    isInternalRoute && HEXAGON === data?.type && status === "succeeded";

  const isLineChart =
    isInternalRoute && LINE_CHART === data?.type && status === "succeeded";
  const isAdminButtons =
    isInternalRoute && ADMIN_BUTTONS === data?.type && status === "succeeded";
  const isPseudoPyramid =
    isInternalRoute && PSEUDO_PYRAMID === data?.type && status === "succeeded";
  const isKeyIndicator =
    isInternalRoute && KEY_INDICATOR === data?.type && status === "succeeded";
  const isPromoBanner = PROMO_BANNER === data?.type && status === "succeeded";
  const isGauge =
    isInternalRoute && GAUGE_CHART === data?.type && status === "succeeded";

  const isEuropeMap = EUROPE_MAP === data?.type && status === "succeeded";

  const isAsiaMap = ASIA_MAP === data?.type && status === "succeeded";

  const isWalesMap = WALES_MAP === data?.type && status === "succeeded";

  const isUkMap = UK_MAP === data?.type && status === "succeeded";

  const isOAEMap = UAE_MAP === data?.type && status === "succeeded";

  const isSwitzerlandMap =
    SWITZERLAND_MAP === data?.type && status === "succeeded";

  const isVertBarForMap =
    VERTICAL_BAR_FOR_MAP === data?.type && status === "succeeded";

  const isUniversalBar = UNIVERSAL_BAR === data?.type && status === "succeeded";
  const isTimeMachine = TIME_MACHINE === data?.type && status === "succeeded";
  const isCircularMindmap3DNoCode =
    MIND_NO_CODE_3D === data?.type && status === "succeeded";

  const isRadarChartBlurred =
    RADAR_CHART_BLURRED === data?.type && status === "succeeded";

  const isLondonMap = LONDON_MAP === data?.type && status === "succeeded";
  const isMoldovaMap = MOLDOVA_MAP === data?.type && status === "succeeded";
  const isMoldovaMapV2 =
    MOLDOVA_MAP_V2 === data?.type && status === "succeeded";
  const isLondonMapStats =
    LONDON_MAP_STATS === data?.type && status === "succeeded";
  const isUkMapStats = UK_MAP_STATS === data?.type && status === "succeeded";
  const isGlobalGeomap = GLOBAL_GEOMAP === data?.type && status === "succeeded";
  const isGlobalGeomapStats =
    GLOBAL_GEOMAP_STATS === data?.type && status === "succeeded";

  const isUAEGeoMapStats =
    UAE_GEO_MAP_STATS === data?.type && status === "succeeded";

  const isAdmPanConst = ADM_PAN_CONST === data?.type && status === "succeeded";

  const isAdmPanConstBlack =
    ADM_PAN_BLACK_CONST === data?.type && status === "succeeded";

  const isPageBuilder = PAGE_BUILDER === data?.type && status === "succeeded";

  const isWalesMapStats =
    WALES_MAP_STATS === data?.type && status === "succeeded";

  const isUsaMap = USA_GEOMAP === data?.type && status === "succeeded";
  const isGulfMapStats =
    GULF_REGION_MAP === data?.type && status === "succeeded";

  const isGermanyMap = GERMANY_MAP === data?.type && status === "succeeded";

  const isChisinauMap = CHISINAU_MAP === data?.type && status === "succeeded";
  const isUkMapNew = UK_MAP_NEW === data?.type && status === "succeeded";
  const isScotlandMap = SCOTLAND_MAP === data?.type && status === "succeeded";
  const isManchesterMap =
    MANCHESTER_MAP === data?.type && status === "succeeded";

  const isScotlandMapStats =
    SCOTLAND_MAP_STATS === data?.type && status === "succeeded";

  const isManchesterMapStats =
    MANCHESTER_MAP_STATS === data?.type && status === "succeeded";
  const isNorthIrelandMap =
    NORTH_IRELAND_MAP === data?.type && status === "succeeded";
  const isNorthIrelandMapStats =
    NORTH_IRELAND_MAP_STATS === data?.type && status === "succeeded";
  const isFranceMap = FRANCE_MAP === data?.type && status === "succeeded";
  const isLondonMapDark =
    LONDON_MAP_DARK === data?.type && status === "succeeded";
  const isLondonStatsDark =
    LONDON_STATS_DARK === data?.type && status === "succeeded";
  const isCanadaMap = CANADA_MAP === data?.type && status === "succeeded";
  const isUkStatsDark = UK_STATS_DARK === data?.type && status === "succeeded";
  const isUkMapDark = UK_MAP_DARK === data?.type && status === "succeeded";
  const isGeoDashboards =
    GEO_DESHBOARDS === data?.type && status === "succeeded";
  const isGeoDashboardsV2 =
    GEO_DESHBOARDS_V2 === data?.type && status === "succeeded";

  const isChinaMapStats =
    CHINA_MAP_STATS === data?.type && status === "succeeded";
  const isUkMapStatic = UK_MAP_STATIC === data?.type && status === "succeeded";
  const isMoldovaMapStats =
    MOLDOVA_MAP_STATS === data?.type && status === "succeeded";
  const isIsraelMap = ISRAEL_MAP === data?.type && status === "succeeded";
  const isJapanMap = JAPAN_MAP === data?.type && status === "succeeded";
  const isCircularInfographUK =
    CIRCULAR_INFOGRAPH_UK === data?.type && status === "succeeded";
  const isTimeSeriesChart =
    TIME_SERIES_CHART === data?.type && status === "succeeded";
  const isTreeMap =
    isInternalRoute && TREE_MAP === data?.type && status === "succeeded";
  const isLeaderBoard =
    isInternalRoute && LEADER_BOARD === data?.type && status === "succeeded";
  const isTubeMap =
    isInternalRoute && TUBE_MAP === data?.type && status === "succeeded";
  const isForceDirectedTree =
    isInternalRoute &&
    FORCE_DIRECTED_TREE === data?.type &&
    status === "succeeded";
  const isHeatMap =
    isInternalRoute && HEAT_MAP === data?.type && status === "succeeded";
  const isHeatMapGrid =
    isInternalRoute && HEAT_MAP_GRID === data?.type && status === "succeeded";
  const isPortraitImage =
    isInternalRoute && PORTRAIT_IMAGE === data?.type && status === "succeeded";
  const isUkMapTopoLegend =
    isInternalRoute &&
    UK_MAP_TOPO_LEGEND === data?.type &&
    status === "succeeded";
  const isDoughnutChart =
    isInternalRoute && DOUGHNUT_CHART === data?.type && status === "succeeded";
  const isDealsStructure =
    isInternalRoute && DEALS_STRUCTURE === data?.type && status === "succeeded";
  const isArrowProgressChart =
    isInternalRoute &&
    ARROW_PROGRESS_CHART === data?.type &&
    status === "succeeded";
  const isTurkeyMap =
    isInternalRoute && TURKEY_MAP === data?.type && status === "succeeded";
  const isTorontoMap =
    isInternalRoute && TORONTO_MAP === data?.type && status === "succeeded";
  const isOntario =
    isInternalRoute && ONTARIO_MAP === data?.type && status === "succeeded";
  const isBubbleChart =
    isInternalRoute && BUBBLE_CHART === data?.type && status === "succeeded";
  const isPolarChart =
    isInternalRoute &&
    POLAR_CHART.toLowerCase() === data?.type.toLowerCase() &&
    status === "succeeded";
  const isMenaMap =
    isInternalRoute && MENA_MAP === data?.type && status === "succeeded";
  const isMiamiMapStats =
    isInternalRoute && MIAMI_MAP_STATS === data?.type && status === "succeeded";
  const isFloridaMapStats =
    isInternalRoute &&
    FLORIDA_MAP_STATS === data?.type &&
    status === "succeeded";

  const isSwitzerlandMapStats =
    isInternalRoute &&
    SWITZERLAND_MAP_STATS === data?.type &&
    status === "succeeded";

  const isFlowChart =
    isInternalRoute && FLOW_CHART === data?.type && status === "succeeded";

  const isFlowChartV2 =
    isInternalRoute && FLOW_CHART_V2 === data?.type && status === "succeeded";

  const isMiamiGeoMap =
    isInternalRoute && MIAMI_GEOMAP === data?.type && status === "succeeded";

  const isDynamicLineChart =
    isInternalRoute &&
    DYNAMIC_LINE_CHART === data?.type &&
    status === "succeeded";

  const isDashboardConstructorNoCode =
    isInternalRoute &&
    DASHBOARD_CONSTRUCTOR_NO_CODE === data?.type &&
    status === "succeeded";

  const isGlobalMapStatsV2 =
    isInternalRoute &&
    GLOBAL_GEOMAP_STATS_V2 === data?.type &&
    status === "succeeded";

  const isGlobalMapStatsV3 =
    isInternalRoute &&
    GLOBAL_GEOMAP_STATS_V3 === data?.type &&
    status === "succeeded";

  const isMultiRadarChart =
    isInternalRoute &&
    MULTI_RADAR_CHART === data?.type &&
    status === "succeeded";

  const isHarleyStreetMap2d =
    isInternalRoute &&
    HARLEY_STREET_2D === data?.type &&
    status === "succeeded";

  const isHarleyStreetMap3d =
    isInternalRoute &&
    HARLEY_STREET_3D === data?.type &&
    status === "succeeded";

  const isNoCodeMaps =
    isInternalRoute && NO_CODE_MAPS === data?.type && status === "succeeded";

  const isBuildingsMap3D =
    isInternalRoute &&
    BUILDINGS_MAP_3D === data?.type &&
    status === "succeeded";

  const isMapboxGeodashboardv1 =
    isInternalRoute &&
    MAPBOX_GEDASHBOARD_V1 === data?.type &&
    status === "succeeded";

  const isHexagonPageV2 =
    isInternalRoute && HEXAGON_V2 === data?.type && status === "succeeded";

  const isSouthKoreaMap =
    isInternalRoute && SOUTH_KOREA_MAP === data?.type && status === "succeeded";

  const isChinaMap =
    isInternalRoute && CHINA_MAP === data?.type && status === "succeeded";

  const isIsraelMapStats =
    isInternalRoute &&
    ISRAEL_MAP_STATS === data?.type &&
    status === "succeeded";

  const isNetworkDiagram =
    isInternalRoute && NETWORK_DIAGRAM === data?.type && status === "succeeded";

  const isGlobalMapStatsV4 =
    isInternalRoute &&
    GLOBAL_GEOMAP_STATS_V4 === data?.type &&
    status === "succeeded";

  
  if (!!item?.restricted_access) return <RestrictedAccess />;

  if (showPasswordModal) return (<ProductPagePassword
    setPassword={setPassword}
    password={password}
    hasError={hasError}
    handleSubmit={verifyDiagramPassword} />);
  return (
    <Suspense fallback={<Loader />}>
      {status === "loading" && <Loader />}
      {/* disable text selection in iframe */}
      <div style={{userSelect: window !== window.top && "none" }}> 

      {isPyramid && <PyramidDesignerV2 data={data} params={params} />}

      {isTree && <TreeDesignerWrapper data={data} params={params} />}

      {isTreeV2 && <TreeDesignerV2 data={data} params={params} />}

      {isRectangleMindmap && (
        <RectangleMindmapDesigner data={data} params={params} />
      )}

      {isDashboardConstructorNoCode && (
        <DashboardConstructorNoCode data={data} />
      )}

      {isMindMap && <MindMapDesigner data={data} params={params} />}

      {isCustomTable && <CustomTable data={data} params={params} />}

      {isInteractivePanel && <InteractivePanel data={data} params={params} />}

      {isFrameConstructor && <FrameConstructor data={data} params={params} />}

      {isVertBarForMap && <VerticalBarForGeoMaps data={data} params={params} />}

      {isUniversalBar && <UniversalBar data={data} />}

      {isTimeMachine && <TimeMachine data={data} />}

      {isCircularMindmap3DNoCode && <CircularMindmap3DNoCode data={data} />}

      {isInteractivePanelColor && (
        <InteractivePanelColor data={data} params={params} />
      )}

      {isInteractivePanelLogo && (
        <InteractivePanelLogo data={data} params={params} />
      )}

      {isListCustom && <ListCustom data={data} />}

      {is3DGraph && (
        <Graph3DDesigner data={data} diagramType={data?.type} params={params} />
      )}

      {isRadarChart && <RadarChartDesigner data={data} params={params} />}
      {isRadarChartBlurred && (
        <RadarChartBlurred isEditMode={false} data={data} />
      )}

      {isAdmPanConst && (
        <AdminPanelsConstructorIftame data={data} isEditMode={false} />
      )}

      {isPageBuilder && <PageBuilderIftame data={data} isEditMode={false} />}

      {isAdmPanConstBlack && (
        <AdminPanelsBlackConstructorIftame data={data} isEditMode={false} />
      )}

      {isRadarGradientChart && (
        <RadarGradientChartDesigner data={data} params={params} />
      )}

      {isStackedBarChart && (
        <StackedBarChartDesigner data={data} params={params} />
      )}

      {isPyramid3D && <PyramidDesignerV3D data={data} params={params} />}

      {isTableWithBar && <TableWithBar data={data} params={params} />}

      {isListWithBar && <ListWithBar data={data} params={params} />}

      {isMarqueeList && <MarqueeList data={data} params={params} />}

      {isSerpentinePath && <SerpentinePath data={data} params={params} />}

      {isTimelineHorizontal && (
        <TimelineHorizontal data={data} params={params} />
      )}

      {isVerticallBarDiff && <VerticalBarDiff data={data} params={params} />}

      {isCompaniesList && <CompaniesList data={data} params={params} />}

      {isCompaniesListColor && (
        <CompaniesListColors data={data} params={params} />
      )}

      {isCompaniesTable && <CompanyTable data={data} params={params} />}

      {isPentagon3D && <Pentagon3D data={data} params={params} />}

      {isTreeNoDate && <TreeNoDateDesigner data={data} params={params} />}

      {isDocumentCreator && (
        <DocumentCreator isEditMode={false} data={data} params={params} />
      )}

      {isDocumentCreatorV2 && (
        <DocumentCreatorV2 isEditMode={false} data={data} params={params} />
      )}

      {isDocumentCreatorV3 && (
        <DocumentCreatorV3 isEditMode={false} data={data} params={params} />
      )}

      {isComparisonSwots && (
        <ComparisonSwotsDesigner data={data} params={params} />
      )}

      {isHexagon && <HexagonPage data={data} params={params} />}

      {isTimeLine && <TimeLine data={data} params={params} />}

      {isComparisonBars && (
        <ComparisonBarsDesigner data={data} params={params} />
      )}

      {isFlowChart && <FlowChart data={data} isEditMode={false} />}

      {isFlowChartV2 && <FlowChartV2 data={data} isEditMode={false} />}

      {isLineChart && <LineChartDesigner data={data} params={params} />}

      {isAdminButtons && <AdminButtons data={data} params={params} />}

      {isPseudoPyramid && <PseudoPyramidDesigner data={data} params={params} />}

      {isGauge && (
        <GaugeDesigner data={data} isEditMode={false} params={params} />
      )}

      {isNoCodeMaps && <NoCodeMaps data={data} isEditMode={false} />}

      {isDecisionTree && (
        <DecisionTreeDesignerWrapper
          data={data}
          params={params}
          isEditMode={false}
        />
      )}

      {isKeyIndicator && (
        <KeyIndicatorDesigner data={data} isEditMode={false} params={params} />
      )}

      {isPromoBanner && (
        <PromoBannerDesigner data={data} isEditMode={false} params={params} />
      )}

      {isAsiaMap && <AsiaMap data={data} params={params} />}

      {isWalesMap && <WalesMap data={data} params={params} />}

      {isUkMap && <UkMap data={data} params={params} />}

      {isEuropeMap && <EuropeMap data={data} params={params} />}

      {isOAEMap && <UAEMap data={data} params={params} />}
      {isHallOfFameConstructor && (
        <HallOfFameDataWrapper data={data} params={params} isEditMode={false} />
      )}
      {isHallOfFameConstructorV2 && (
        <HallOfFameDataWrapperV2
          data={data}
          params={params}
          isEditMode={false}
        />
      )}

      {isToolCollection && (
        <ToolsColectionWrapper data={data} params={params} isEditMode={false} />
      )}

      {isSwitzerlandMap && <SwitzerlandMap data={data} params={params} />}
      {isLondonMap && <LondonMap data={data} params={params} />}
      {isMoldovaMap && <MoldovaMap data={data} params={params} />}
      {isLondonMapStats && <LondonMapStats data={data} params={params} />}
      {isUkMapStats && <UkMapStats data={data} params={params} />}
      {isGlobalGeomap && <GlobalMap data={data} params={params} />}
      {isGlobalGeomapStats && <GlobalMapStats data={data} params={params} />}

      {isGeoDashboards && <GeoDashboard data={data} params={params} />}
      {isGeoDashboardsV2 && <GeoDashboardV2 data={data} params={params} />}

      {isUAEGeoMapStats && <UAEGeoMapStats data={data} params={params} />}
      {isWalesMapStats && <WalesMapStats data={data} params={params} />}
      {isUsaMap && <UsaMap data={data} />}
      {isGulfMapStats && <GulfGeoMapWhite data={data} params={params} />}

      {isGermanyMap && <GermanyMap data={data} params={params} />}
      {isChisinauMap && <ChisinauMap data={data} />}
      {isUkMapNew && <UkMapNew data={data} params={params} />}
      {isScotlandMap && <ScotlandMap data={data} params={params} />}
      {isManchesterMap && <ManchesterMap data={data} params={params} />}
      {isScotlandMapStats && <ScotlandMapStats data={data} params={params} />}
      {isManchesterMapStats && (
        <ManchesterMapStats data={data} params={params} />
      )}
      {isMoldovaMapV2 && <MoldovaGeoMap data={data} params={params} />}
      {isNorthIrelandMap && <NorthIrelandMap data={data} params={params} />}
      {isNorthIrelandMapStats && (
        <NorthIrelandMapStats data={data} params={params} />
      )}
      {isFranceMap && <FranceMap data={data} params={params} />}
      {isLondonMapDark && <LondonMapDark data={data} params={params} />}
      {isLondonStatsDark && <LondonStatsDark data={data} params={params} />}
      {isCanadaMap && <CanadaMap data={data} params={params} />}
      {isUkStatsDark && <UkWithStatsDark data={data} params={params} />}
      {isUkMapDark && <UkMapDark data={data} params={params} />}
      {isChinaMapStats && <ChinaMapStats data={data} params={params} />}
      {isUkMapStatic && <UkStaticGeomap data={data} params={params} />}
      {isMoldovaMapStats && <MoldovaMapStats data={data} params={params} />}
      {isIsraelMap && <IsraelMap data={data} params={params} />}
      {isJapanMap && <JapanMap data={data} params={params} />}
      {isCircularInfographUK && (
        <CircularInfographUK data={data} params={params} />
      )}
      {isTimeSeriesChart && <TimeSeries data={data} params={params} />}
      {isTreeMap && <TreeMap data={data} params={params} />}
      {isLeaderBoard && <LeaderBoard data={data} params={params} />}
      {isTubeMap && <TubeMap data={data} params={params} />}
      {isRadialTree && <RadialTree data={data} params={params} />}
      {isForceDirectedTree && <ForceDirectedTree data={data} params={params} />}
      {isHeatMap && <HeatMap data={data} params={params} />}
      {isHeatMapGrid && <HeatMapGrid data={data} params={params} />}
      {isPortraitImage && <PortraitImage data={data} params={params} />}
      {isUkMapTopoLegend && <UKMapTopoLegend data={data} params={params} />}
      {isDoughnutChart && <DoughnutChart data={data} params={params} />}
      {isDealsStructure && <DealsStructure data={data} params={params} />}
      {isArrowProgressChart && (
        <ArrowProgressChart data={data} params={params} />
      )}
      {isTurkeyMap && <TurkeyMap data={data} params={params} />}
      {isTorontoMap && <TorontoMap data={data} params={params} />}
      {isOntario && <OntarioMap data={data} params={params} />}
      {isBubbleChart && <BubbleChart data={data} params={params} />}
      {isPolarChart && <PolarChartDesigner data={data} params={params} />}
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
      {isMapboxGeodashboardv1 && <MapboxGeodashboardv1 data={data} />}
      {isHexagonPageV2 && <HexagonPageV2 data={data} />}
      {isUkMapChart && (
        <UkMapConstructor isEditMode={false} data={data} params={params} />
      )}
      {isSouthKoreaMap && <SouthKoreaMap data={data} />}
      {isChinaMap && <ChinaMap data={data} />}
      {isIsraelMapStats && <IsraelMapStats data={data} />}
      {isNetworkDiagram && <NetworkDiagram data={data} isEditMode={false} />}
      {isGlobalMapStatsV4 && <GlobalMapStatsV4 data={data} isEditMode={true} />}
      </div>
    </Suspense>
  );
}

export default ViewPage;
