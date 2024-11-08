import {
  mindMapDesignerCallback,
  mindMapDesignerData,
  mindMapLiveDataCallback,
} from "../../components/MindMapDesigner/configs";
import {
  radarChartBlurredCallback,
  radarChartBlurredData,
} from "../../components/RadarChartBlurred/configs";
import {
  universalBarCallback,
  universalBarData,
} from "../../components/UniversalBar/configs";
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
};
