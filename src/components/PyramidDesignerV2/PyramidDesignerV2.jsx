import React, { useCallback, useEffect } from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TriangleComponent from "./TriangleComponent";
import { TriangleSVG } from "./TriSvg";

import useResizeObserver from "./useResizeObserver";
import { useDispatch } from "react-redux";
import { addNewDataField } from "../../store/item";

const useStyles = makeStyles(() => ({
  wrapper: {
    position: "relative",
    padding: "30px 100px",
    fontSize: "16px",
    aspectRatio: "2/1.5",
  },
  wrapperTriangle: {
    position: "relative",
    padding: "41px 25px 0px 25px",
    margin: "0 auto",
  },

  wrapperDescription: {
    top: "30px",
    maxWidth: "250px",
    width: "calc(80px + 10%)",
    position: "absolute",
    right: "35%",
    transform: "translateX(200%)",
    height: "100%",
  },

  triangleImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "-30px",
    left: 0,
  },
  switch: {
    position: "absolute",
    right: "0",
  },
}));

const PyramidDesigner = (props) => {
  const { editMode = false, data } = props;
  const gradient = data?.originalData?.gradient;
  const titleColor = data?.originalData?.titleColor;
  const linesColor = data?.originalData?.linesColor;
  const backgroundColor = data?.originalData?.backgroundColor;
  const customWidth = data?.originalData?.customWidth;
  const titleFontSize = data?.originalData?.titleConfig?.fontSize;
  const titlePadding = data?.originalData?.titleConfig?.padding;
  const lablesFontSize = data?.originalData?.labelsConfig?.fontSize;
  const labelsPadding = data?.originalData?.labelsConfig?.padding;

  const classes = useStyles();
  const dispatch = useDispatch();
  const [steps, setSteps] = React.useState([]);
  const [maxWidth, setMaxWidth] = React.useState(customWidth || 800);
  const [labelSettings, setLabelSettings] = React.useState(800);
  const [rowRatio, setRowRatio] = React.useState(data?.originalData?.row_ratio);
  const [nextGeneration, setNextGeneration] = React.useState(
    data?.originalData?.next_generation ? true : false
  );
  const svgRef = React.useRef(null);
  const [lines, setLines] = React.useState([]);
  const [middeleLines, setMiddeleLines] = React.useState([]);
  const [middeleLinesHeights, setMiddeleLinesHeights] = React.useState([]);

  const onResize = useCallback(
    (target) => {
      const computedStyle = getComputedStyle(target);
      const middeleLinesHeightsArr = [];
      const arr = [];
      const currentPaddingTop = parseFloat(computedStyle?.paddingTop);
      const parentHeight = target?.offsetParent?.clientHeight;
      const currentOfsetTop = target?.offsetTop;

      if (parentHeight) {
        steps.forEach((item, index) => {
          const line = {};
          const itemOffsetTop =
            index === steps.length - 1
              ? target?.children?.[item]?.offsetTop +
                target?.children?.[item]?.offsetHeight
              : target?.children?.[item + 1]?.offsetTop;

          const height = target?.children?.[item + 1]
            ? target?.children?.[item + 1]?.offsetTop
            : target?.children?.[item]?.offsetTop +
              target?.children?.[item]?.offsetHeight;

          if (index === 0) {
            line.height = height / 2 - 11;
          } else {
            const prevHeight = target?.children?.[steps[index - 1] + 1]
              ? target?.children?.[steps[index - 1] + 1]?.offsetTop
              : target?.children?.[steps[index - 1]]?.offsetTop +
                target?.children?.[steps[index - 1]]?.offsetHeight;

            let tem = (height - prevHeight) / 2;
            line.height = prevHeight + tem;
          }

          middeleLinesHeightsArr.push(line);

          const lineOffset =
            (itemOffsetTop + currentPaddingTop + currentOfsetTop) /
            (parentHeight / 100);

          if (itemOffsetTop) {
            arr.push(lineOffset - 11);
          }
        });
      }

      if (arr.length) {
        const middeleLinesArr = [];

        arr.forEach((item, index) => {
          if (index === 0) {
            middeleLinesArr.push(item / 2);
            return;
          }

          let tem = (item - arr[index - 1]) / 2;
          middeleLinesArr.push(arr[index - 1] + tem);
        });

        setMiddeleLines([...middeleLinesArr]);
        setMiddeleLinesHeights(middeleLinesHeightsArr);
        setLines([...arr]);
      }
    },
    [steps]
  );

  const onLinesRender = useCallback(
    (target) => {
      const lineRef = target?.getElementsByClassName("pyramid-line");
      const linesInPixel = [];
      const parentHeight = target.clientHeight;

      if (parentHeight) {
        middeleLines.forEach((item, index) => {
          const line = {};

          line.height = middeleLinesHeights[index].height;
          line.width = lineRef?.[index]?.getBoundingClientRect()?.width;

          linesInPixel.push(line);
        });
      }

      if (linesInPixel.length) {
        setLabelSettings([...linesInPixel]);
      }
    },
    [middeleLines, middeleLinesHeights]
  );

  useEffect(() => {
    onLinesRender(svgRef?.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [middeleLines, middeleLinesHeights]);

  const ref = useResizeObserver(onResize);

  const resizeCallback = () => {
    onResize(ref.current);
  };

  useEffect(() => {
    if (data?.originalData?.data.length > 20) {
      resizeCallback();
      setMaxWidth(customWidth || 800);
    } else {
      resizeCallback();
      setMaxWidth(customWidth || 400);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const getGradiend = () => {
    let gradients = gradient ? gradient : ["#083763", "#4483bc", "#d4e4f8"];

    if (nextGeneration) {
      gradients = ["#cc0100", ...gradient];
    }

    return gradients;
  };

  return (
    <div
      className={classes.wrapper}
      style={{
        paddingLeft: data?.originalData?.title ? "100px" : "0px",
        background: backgroundColor ? backgroundColor : "#fff",
      }}
    >
      {editMode ? (
        <FormGroup className={classes.switch}>
          <FormControlLabel
            control={
              <Switch
                checked={nextGeneration}
                onChange={() => {
                  setNextGeneration(!nextGeneration);
                  dispatch(
                    addNewDataField({
                      field: "next_generation",
                      value: !nextGeneration,
                    })
                  );
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Next Generation"
          />
        </FormGroup>
      ) : null}
      <div
        className={classes.wrapperTriangle}
        style={{ maxWidth: `${maxWidth}px` }}
      >
        <div
          style={{
            position: "absolute",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            zIndex: "10",
          }}
        >
          <TriangleSVG
            color={linesColor ? linesColor : "#d7e6f4"}
            topTriangleColor={"#cc0100"}
            lines={lines}
            middeleLines={middeleLines}
            isTopTriangle={nextGeneration}
            gradientColors={getGradiend()}
            svgRef={svgRef}
          />
        </div>
        <div
          style={{
            aspectRatio: "2/1.5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between ",
            gap: "2px",
            padding: "5%",
            position: "relative",
          }}
          ref={ref}
        >
          <TriangleComponent
            data={data?.originalData.data}
            links={data?.originalData?.links}
            allDiapazons={data?.originalData?.all_compare_diapazons}
            rowRatio={rowRatio}
            setRowRatio={setRowRatio}
            nextGeneration={nextGeneration}
            viewMode={!editMode}
            setSteps={setSteps}
            steps={steps}
            description={data?.originalData.value_description}
            lines={labelSettings}
            onResize={resizeCallback}
            title={data?.originalData?.title}
            gradients={getGradiend()}
            titleColor={titleColor}
            titlePadding={titlePadding}
            titleFontSize={titleFontSize}
            lablesFontSize={lablesFontSize}
            labelsPadding={labelsPadding}
          />
        </div>
      </div>
    </div>
  );
};

export default PyramidDesigner;
