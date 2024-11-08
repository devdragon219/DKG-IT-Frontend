import React, { useState } from "react";
import Hexagone from "./Hexagon";
import "./hexagon.css";

const HexagonPageV2 = ({ data = {} }) => {
  const [currentHexagon, setCurrentHexagon] = useState("");
  const hexagonData = data?.originalData?.data;
  const centeredHexagon = hexagonData?.centerHexagon;
  const outerHexagon = hexagonData?.outerHexagon;

  const handleOuterClick = (id) => {
    outerHexagon?.forEach((item) => {
      const hexagon = item?.hexagon;
      const details = hexagon.find((ele) => ele.id === id);
      if (details) {
        setCurrentHexagon(details.extraInfo);
      }
    });
  };

  const handleCenterClick = (id) => {
    const details = centeredHexagon?.hexagon?.find((ele) => ele?.id === id);
    if (details) {
      setCurrentHexagon(details?.extraInfo);
    }
  };

  return data ? (
    <div className="flex">
      <div className="circle" style={{ "--total": 6 }}>
        <div className="stat" style={{ "--i": 0 }}>
          <Hexagone
            hexagoneId={`hexagone-${0}`}
            hexagonTexts={centeredHexagon?.hexagon}
            colors={centeredHexagon?.color}
            isCenter={true}
            handleClick={handleCenterClick}
          />
        </div>
        {outerHexagon?.length > 0 &&
          outerHexagon.map((item, index) => (
            <div className="stat" style={{ "--i": index + 1 }}>
              <Hexagone
                hexagoneId={`hexagone-${index + 1}`}
                hexagonTexts={item?.hexagon}
                colors={item?.color}
                isCenter={true}
                handleClick={handleOuterClick}
              />
            </div>
          ))}
        {/* {outerHexagon?.length > 0 &&
          outerHexagon.map((item, index) => (
            <div className="stat" style={{ "--i": index + 1 }}>
              <Hexagone
                hexagoneId={`hexagone-${index + 1}`}
                hexagonTexts={centeredHexagon?.hexagon}
                colors={centeredHexagon?.color}
                isCenter={true}
                handleClick={handleCenterClick}
              />
            </div>
          ))} */}
      </div>
      {currentHexagon ? (
        <div className="extra-info">
          <p>{currentHexagon}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  ) : (
    ""
  );
};

export default HexagonPageV2;
