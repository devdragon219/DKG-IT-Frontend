import React from "react";
import { Marker } from "react-simple-maps";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
import * as Icons from "@mui/icons-material";

const useStyles = makeStyles(() => ({
    svgIcon: {
      fill: "inherit!important"
    }
  }));

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

const LegendList = ({ data }) => {
    const classes = useStyles();
    return (
    <>
      {data.list.map((item) =>
        item.coordinates.map((coord, coordIndex) => {
          return (
            <g key={coordIndex} transform={`translate(${coord[0]}, ${coord[1]})`}>
              <Marker key={`${item.name}-${coordIndex}`} coordinates={coord}>
                <HtmlTooltip title={item.name}>
                    <svg
                        width="8px"
                        height="8px"
                        fill="none"
                        >
                        <rect
                            width="100%"
                            height="100%"
                            fill={item.fontColor}
                            stroke="#808080"
                            strokeWidth="0.5"
                            rx="1"
                            ry="1"
                        />
                        <svg
                            x="1"
                            y="1" 
                            width="6px"
                            height="6px"
                            fill="black"
                            dangerouslySetInnerHTML={{ __html: item.iconSVG }}
                        >
                        </svg>
                    </svg>
                </HtmlTooltip>
              </Marker>
            </g>
          );
        })
      )}
      <g transform={`translate(0, 200)`}>
        <text 
            x="10"
            y="20" 
            style={{
                fontFamily: "system-ui",
                fill: "black",
                fontSize: "8px",
            }}>
          {data.title}
        </text>
        {data.list.map((item, index) => (
          <g key={index} transform={`translate(0, ${index * 10 + 10})`}>
            <svg
                x="10"
                y="17"
                width="8px"
                height="8px"
                fill="none"
                >
                <rect
                    width="100%"
                    height="100%"
                    fill={item.fontColor}
                    stroke="#808080"
                    strokeWidth="0.5"
                    rx="1"
                    ry="1"
                />
                <svg
                    x="1"
                    y="1" 
                    width="6px"
                    height="6px"
                    fill="black"
                    dangerouslySetInnerHTML={{ __html: item.iconSVG }}
                ></svg>
            </svg>

            <text 
                x="20"
                y="23" 
                style={{
                    fontFamily: "system-ui",
                    fill: "black",
                    fontSize: "5px",
                }}>
              {item.name}
            </text>
          </g>
        ))}
      </g>
    </>
  );
};

export default LegendList;
