import {
  adminButtonsCallback,
  adminButtonsData,
} from "../../components/AdminButtons/configs";
import {
  circularMindmap3DNoCodeCallback,
  circularMindmap3DNoCodeData,
} from "../../components/CircularMindmap3DNoCode/configs";
import {
  dynamicLineChartCallback,
  dynamicLineChartData,
} from "../../components/DynamicLineChart/configs";
import {
  flowChartCallback,
  flowChartData,
  flowChartLiveDataCallback,
} from "../../components/FlowChartV2/configs";
import {
  keyIndicatorsRespCallback,
  keyIndicatorsRespData,
} from "../../components/KeyIndicatorsResp/configs";
import {
  mindMapDesignerCallback,
  mindMapDesignerData,
  mindMapLiveDataCallback,
} from "../../components/MindMapDesigner/configs";
import {
  noCodeMapsCallback,
  noCodeMapsData,
} from "../../components/NoCodeMaps/configs";
import {
  pieChartLabelsCallback,
  pieChartLabelsData,
} from "../../components/PieChartLabels/configs";
import {
  radarChartBlurredCallback,
  radarChartBlurredData,
} from "../../components/RadarChartBlurred/configs";
import {
  rectangleMindmapCallback,
  rectangleMindmapData,
} from "../../components/RectangleMindmap/configs";
import {
  serpentinePathCallback,
  serpentinePathData,
} from "../../components/SerpentinePath/configs";
import {
  timeMachineCallback,
  timeMachineData,
} from "../../components/TimeMachine/configs";
import {
  universalBarCallback,
  universalBarData,
} from "../../components/UniversalBar/configs";
import {
  lineChartCallback,
  lineChartData,
} from "../../components/lineChart/configs";
import {
  doughnutChartCallback,
  doughnutChartData,
} from "../../components/DoughnutChart/configs";
import {
  number14Callback,
  number14Data,
} from "../../components/number14/configs";
import {
  number15Callback,
  number15Data,
} from "../../components/number15/configs";
import {
  number18_1Callback,
  number18_1Data,
} from "../../components/number18_1/configs";

export default {
  universalBar: {
    callback: universalBarCallback,
    data: universalBarData,
  },
  doughnutChart: {
    callback: doughnutChartCallback,
    data: doughnutChartData,
  },
  number15: {
    callback: number15Callback,
    data: number15Data,
  },
  number14: {
    callback: number14Callback,
    data: number14Data,
  },
  number18_1: {
    callback: number18_1Callback,
    data: number18_1Data,
  },
  mind_map: {
    callback: mindMapDesignerCallback,
    data: mindMapDesignerData,
    liveDataCallback: mindMapLiveDataCallback,
  },
  radarChartBlurred: {
    callback: radarChartBlurredCallback,
    data: radarChartBlurredData,
  },
  serpentinePath: {
    callback: serpentinePathCallback,
    data: serpentinePathData,
  },
  rectangleMindmap: {
    callback: rectangleMindmapCallback,
    data: rectangleMindmapData,
  },
  lineChart: {
    callback: lineChartCallback,
    data: lineChartData,
  },
  dynamicLineChart: {
    callback: dynamicLineChartCallback,
    data: dynamicLineChartData,
  },
  KeyIndicatorsResp: {
    callback: keyIndicatorsRespCallback,
    data: keyIndicatorsRespData,
  },
  PieChartLabels: {
    callback: pieChartLabelsCallback,
    data: pieChartLabelsData,
  },
  adminbuttons: {
    callback: adminButtonsCallback,
    data: adminButtonsData,
  },
  NoCodeMaps: {
    callback: noCodeMapsCallback,
    data: noCodeMapsData,
  },
  timeMachine: {
    callback: timeMachineCallback,
    data: timeMachineData,
  },
  CircularMindmap3DNoCode: {
    callback: circularMindmap3DNoCodeCallback,
    data: circularMindmap3DNoCodeData,
  },
  flowChartV2: {
    callback: flowChartCallback,
    data: flowChartData,
    liveDataCallback: flowChartLiveDataCallback,
  },
};
