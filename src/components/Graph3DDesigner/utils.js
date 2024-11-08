import {
  BAR_CHART_3D,
  CIRCULAR_MINDMAP_3D,
  CUBE_3D,
  TREE_3D,
  GLOBE_CHART_3D,
  MULTI_CUBE_3D,
  NODE_CHART_3D,
  PIE_CHART_3D,
  REVOLUTION_CUBE_3D,
  SWOT_3D,
  TUBE_TREE_3D,
} from "../../constants/diagram";
import {
  BarChart3D,
  Cube3D,
  PieChart3D,
  NodeChart3D,
  Globe3D,
  IndustrialCube3D,
  Swot3D,
  CircularMindmap3D,
  MultiCube3D,
  TechTree3D,
  TubeTree3D,
} from "../../vis3d.min";

const get3DGraphByDiagramType = (
  canvas,
  data,
  diagramType,
  backgroundColor,
  labelColor,
  configs
) => {
  if (REVOLUTION_CUBE_3D === diagramType) {
    const config = {
      buttonLabelColor: "#FFFFFF",
      buttonBackgroundColor: "#333A3F",
      buttonShadowColor: "rgba(15, 62, 69, 1.0)",
      buttonFontSize: 16,
      buttonFont: "Sans-Serif",
      toolpTipfontWeight: "bold",
      toolTipfont: "Sans-Serif",
      toolTipFontSize: 14,
      toolTipTextColor: "#ffffff",
      toolTipBackground: "#000000",
    };

    return new IndustrialCube3D(canvas, data, config);
  }

  if (CUBE_3D === diagramType) {
    const config = {
      colors: [
        "#073763",
        "#0b5394",
        "#3d85c6",
        "#4A43B2",
        "#9fc5e8",
        "#C1A6C2",
      ],
      fontSizeCube: 1,
      fontSizeDetailsLabel: 1,
      fontSizeDetailsDesc: 1,
      fontCube: "Arial",
      fontDetails: "Arial",
      backgroundColor: "#ffffff",
    };

    return new Cube3D(canvas, data, config);
  }

  if (TREE_3D === diagramType) {
    const d = JSON.stringify(data);
    const a = JSON.parse(d);

    return new TechTree3D(canvas, a, { ...configs });
  }

  if (TUBE_TREE_3D === diagramType) {
    const d = JSON.stringify(data);
    const a = JSON.parse(d);

    return new TubeTree3D(canvas, a, {});
  }

  if (PIE_CHART_3D === diagramType) {
    const config = {
      bgColor: "#ffffff",
      fontColor: "#211d20",
      fontSizeLabel: 1,
      fontSizeLegend: 1,
      toolTipFontSize: 20,
    };

    return new PieChart3D(canvas, data, config);
  }

  if (BAR_CHART_3D === diagramType) {
    const config = {
      vertical: true,
      bgColor: "#ffffff",
      fontColor: "#211d20",
      fontSizeLabel: 1,
      fontSizeLegend: 1,
      toolTipFontSize: 20,
      ...configs,
    };

    return new BarChart3D(canvas, data, config);
  }

  if (NODE_CHART_3D === diagramType) {
    const config = {};

    const d = JSON.stringify(data);
    const a = JSON.parse(d);

    return new NodeChart3D(canvas, a, config);
  }

  if (GLOBE_CHART_3D === diagramType) {
    const config = {
      activeColors: ["#cfe2f3", "#6fa8dc", "#073763"],
      nonActiveColor: "#727272",
      isPointMode: false,
      flagLocation: "/flags",
    };

    return new Globe3D(canvas, data, config);
  }

  if (CIRCULAR_MINDMAP_3D === diagramType) {
    const config = {
      ...configs,
      imageLinkCallback: (entity) =>
        "https://platform.dkv.global/files/" + entity.image,
    };

    return new CircularMindmap3D(canvas, data, config);
  }

  if (SWOT_3D === diagramType) {
    const config = {
      // labelColor: "#0B5394",
      labelSize: 1,
      swatLowValueColor: "#EAF3FA",
      swatHighValueColor: "#073763",
      swatLineColor: "#EAF3FA",
      buttonLabelColor: "#EAF3FA",
      buttonBackgroundColor: "#1D1D1D",
      buttonFont: "Sans-Serif",
      buttonFontSize: 15,
      toolpTipfontWeight: "bold",
      toolTipfont: "Sans-Serif",
      toolTipFontSize: 14,
      toolTipTextColor: "#EAF3FA",
      toolTipBackground: "#000000",
      // backgroundColor: "#ffffff",
      arrowHeadColor: "#86c2d7",
      arrowBodyColor: "#42ADD2",
      renderDottedArrow: true,
      backgroundColor,
      labelColor,
    };

    return new Swot3D(canvas, data, config);
  }

  if (MULTI_CUBE_3D === diagramType) {
    const d = JSON.stringify(data);
    const a = JSON.parse(d);

    const s = JSON.stringify(data);
    const f = JSON.parse(s);

    const config = {
      backgroundColor: "#ffffff",
      miniCubeSidesColor: "#E5E7E9",
      miniCubeinsideColor: "#D3D6D5",
      miniCubeNotSidesColor: "#9A9CA0",
      cubeHighlightColor: "#42ADD4",
      cubeSideHighlightColor: "#2B6D88",
      cubeNotSideHighlightColor: "#427A8D",
      cubeLabelColor: "#3d85c6",
      fontWeight: "bold",
      font: "Sans-Serif",
      fontSize: 20,
      imageLinkCallback: (entity) => {
        const icon = f?.entities?.find(
          (el) => entity?.label === el?.label
        )?.icon;
        return icon;
      },
    };

    return new MultiCube3D(canvas, a, config);
  }
};

const getIs3DGraph = (diagramType) => {
  if (BAR_CHART_3D === diagramType) {
    return true;
  }

  if (PIE_CHART_3D === diagramType) {
    return true;
  }

  if (CUBE_3D === diagramType) {
    return true;
  }

  if (NODE_CHART_3D === diagramType) {
    return true;
  }

  if (GLOBE_CHART_3D === diagramType) {
    return true;
  }

  if (REVOLUTION_CUBE_3D === diagramType) {
    return true;
  }

  if (SWOT_3D === diagramType) {
    return true;
  }

  if (TREE_3D === diagramType) {
    return true;
  }

  if (TUBE_TREE_3D === diagramType) {
    return true;
  }

  if (CIRCULAR_MINDMAP_3D === diagramType) {
    return true;
  }

  if (MULTI_CUBE_3D === diagramType) {
    return true;
  }

  return false;
};


export { get3DGraphByDiagramType, getIs3DGraph };
