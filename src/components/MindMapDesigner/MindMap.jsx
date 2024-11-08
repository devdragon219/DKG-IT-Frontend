import React, { useRef, useState, createContext, useCallback } from "react";
import * as d3 from "d3";
import Defs from "./Components/Defs";
import Names from "./Components/Names";
import Lines from "./Components/Lines";
import Pies from "./Components/Pies";

const ID_BACKGROUND = "backGround";
const ID_SHADOW = "drop-shadow";

export const MindMapContext = createContext(null);

const MindMap = (props) => {
  const { isEditMode, data: { originalData } = {} } = props;

  const backGroundType = originalData?.settings?.bgType || 1;

  const svgRef = useRef(null);
  const [listNameBlockRefs, setListNameBlockRefs] = useState([]);
  const handleSetListNames = useCallback(
    (item) => {
      setListNameBlockRefs((prev) => {
        return [...prev, item];
      });
    },
    [setListNameBlockRefs]
  );

  const [blockName, handleName] = useState(null);

  const onClick = (link) => {
    if (isEditMode || !link) return;
    window.open(link, "_blank");
  };

  const createPie = d3
    .pie()
    .startAngle(originalData.startAngle)
    .value((d) => d.value)
    .sort(null);

  let pies = [];
  let names = [];

  originalData.data.forEach(
    ({
      data,
      name,
      color,
      outerRadius,
      innerRadius,
      strokeWidth,
      link,
      ...resp
    }) => {
      names.push({
        name,
        color,
        outerRadius,
        innerRadius,
        link,
        strokeWidth: originalData.strokeWidthLine,
      });

      const item = createPie(data);

      pies.push({
        data: item,
        name,
        color,
        outerRadius,
        innerRadius,
        strokeWidth,
        ...resp,
      });
    }
  );

  const fullWidth =
    originalData.width + originalData.paddingLeft + originalData.paddingRight;
  const fullHeight =
    originalData.height + originalData.paddingTop + originalData.paddingBottom;

  const translateX = originalData.width / 2 + originalData.paddingLeft;
  const translateY = originalData.height / 2 + originalData.paddingTop;

  return (
    <MindMapContext.Provider
      value={{
        isEditMode,
        idBackGround: ID_BACKGROUND,
        idShadow: ID_SHADOW,
        backGroundType: backGroundType,
        onClick: onClick,
      }}
    >
      <div
        style={{
          position: "relative",
          width: fullWidth + 150,
          height: fullHeight,
          border: originalData?.needBorder
            ? "1px solid rgba(0, 0, 0, 0.12)"
            : "",
        }}
      >
        {originalData.title && (
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "16px",
              fontSize: "25px",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#1976d2",
              border: "3px solid #1976d2",
              padding: "15px",
              borderRadius: "2px",
              maxWidth: "20%",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            {originalData.title}
          </div>
        )}
        {originalData?.displayTable && (
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "16px",
              fontSize: "18px",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "bolder",
              color: "#1976d2",
              border: "3px solid #1976d2",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              borderRadius: "2px",
              textAlign: "right",
            }}
          >
            {originalData.data.map((item) => (
              <div
                style={{ whiteSpace: "nowrap" }}
              >{`${item.name} — ${item.numberOfSectors}`}</div>
            ))}
          </div>
        )}
        {originalData.viewMoreLink && (
          <div
            onClick={() => {
              window.open("https://" + originalData.viewMoreLink, "_blank");
            }}
            style={{
              position: "absolute",
              bottom: "20px",
              right: "16px",
              fontSize: "18px",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "red",
              border: "3px solid red",
              padding: "15px",
              borderRadius: "2px",
              textAlign: "center",
              fontWeight: "bolder",
              cursor: "pointer",
            }}
          >
            <div>View More at</div>
            <div
              style={{
                whiteSpace: "nowrap",
              }}
            >
              {originalData.viewMoreLink}
            </div>
          </div>
        )}
        {originalData.logos && (
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "16px",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#1976d2",
              border: "3px solid #1976d2",
              padding: "15px",
              borderRadius: "2px",
              maxWidth: "20%",
              fontWeight: "bolder",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {originalData.logos.map((el, index) => {
              return (
                <img
                  style={{
                    height: "60px",
                    objectFit: "contain",
                    paddingBottom:
                      index + 1 === originalData.logos.length ? "" : "15px",
                  }}
                  src={el}
                  alt="logo"
                />
              );
            })}
          </div>
        )}
        <svg width={fullWidth} height={fullHeight} ref={svgRef}>
          <Defs />
          <Names
            names={names}
            width={originalData.paddingLeft}
            handleSetListNames={handleSetListNames}
            handleName={handleName}
          />
          <Pies
            pies={pies}
            originalData={originalData}
            svgRef={svgRef}
            translateX={translateX}
            translateY={translateY}
            setLiveData={props?.setLiveData}
          />
          <Lines
            names={names}
            blockName={blockName}
            listNameBlockRefs={listNameBlockRefs}
            widthPies={originalData.width}
          />
        </svg>
      </div>
    </MindMapContext.Provider>
  );
};

export default MindMap;
