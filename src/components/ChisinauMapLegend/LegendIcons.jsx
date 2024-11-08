import * as React from "react";
import { Marker } from "react-simple-maps";

import { useMemo } from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import getIconComponent from "../getIconComponent/getIconComponent"


const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    padding: "10px",
    border: "1px solid black",
    fontSize: "20px",
    borderRadius: "5px",
  },
}));

export default function LegendIcons({
  name,
  color,
  legend,
  coordinates,
  iconNames,
  fontColor,
  logoLists,
}) {
  const size = legend.size;

  const getTranslate = (size, length) => {
    let multiplier = length;
    if (length > 5) {
      multiplier = 5;
    }
    return `translate(-${(size * multiplier) / 2}, -${size / 2})`;
  };

  const filteredIconNames = useMemo(() => {
    return iconNames.filter((name) => {
      const logoItem = logoLists.find((item) => item.name === name);
      return logoItem && logoItem.visible;
    });
  }, [logoLists, iconNames]);

  const getLabel = (name) => {
    const logoItem = logoLists.find((item) => item.name === name);

    return logoItem?.label || "";
  };

  const getLogoX = (index, size) => {
    if (index <= 4) {
      return index * size;
    }
    if (index > 4 && index <= 9) {
      return (index - 5) * size;
    }
    if (index > 9 && index <= 13) {
      return (index - 10) * size;
    }
  };

  const getLogoY = (index, size) => {
    if (index < 4) {
      return 0;
    }
    if (index > 4 && index <= 9) {
      return 1 * size;
    }
    if (index > 9 && index <= 13) {
      return 2 * size;
    }
  };
  return (
    <Marker key={name} coordinates={coordinates}>
      <g transform={getTranslate(size, filteredIconNames.length)}>
        <text
          textAnchor="middle"
          y={-2}
          x={
            filteredIconNames.length > 5
              ? (size * 5) / 2
              : (size * filteredIconNames.length) / 2
          }
          style={{
            fontFamily: "system-ui",
            fill: fontColor ? fontColor : "red",
            fontSize: "4px",
            fontWeight: 900,
          }}
        >
          {name}
        </text>
        {filteredIconNames.length > 0 ? (
          filteredIconNames.map((el, index) => {
            const Icon = getIconComponent(el);

            return (
              <HtmlTooltip title={getLabel(el)}>
                <g style={{ cursor: "pointer" }}>
                  <Icon
                    size={size}
                    fill={color || "black"}
                    x={getLogoX(index, size)}
                    y={getLogoY(index, size)}
                  />
                </g>
              </HtmlTooltip>
            );
          })
        ) : (
          <circle r="2px" fill="#F00" cy="2" stroke="#fff" strokeWidth={1} />
        )}
      </g>
    </Marker>
  );
}
