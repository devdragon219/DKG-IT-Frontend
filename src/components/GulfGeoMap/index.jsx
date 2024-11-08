import React, { useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { makeStyles } from "@mui/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { IRAN_TOPO_JSON } from "./topojson";
import { IRAQ_TOPO_JSON } from "./topojson";
import { KUWAIT_TOPO_JSON } from "./topojson";
import { SAUDI_ARABIA_TOPO_JSON } from "./topojson";
import { BAHRAIN_TOPO_JSON } from "./topojson";
import { QATAR_TOPO_JSON } from "./topojson";
import { UAE_TOPO_JSON } from "./topojson";
import { OMAN_TOPO_JSON } from "./topojson";
import PolarChartDesigner from "../../components/PolarChart/PolarChartDesigner";
import KeyIndicatorDesigner from "../../components/KeyIndicatorDesigner";
import { getDefaultDataset } from "../PolarChart/PolarChartDesigner";

const useStyles = makeStyles({
  iran: {
    strokeWith: "10",
    fill: "#5ccbe4",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  iraq: {
    fill: "#344f64",
    strokeWith: "10",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  kuwait: {
    fill: "rgb(67, 126, 148)",
    strokeWith: "10",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  "saudi-arabia": {
    fill: "rgb(72, 114, 130)",
    strokeWith: "10",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  bahrain: {
    fill: "rgb(52, 79, 100)",
    strokeWith: "10",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  qatar: {
    fill: "rgb(125, 173, 188)",
    strokeWith: "10",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  uae: {
    fill: "rgb(52, 79, 100)",
    strokeWith: "10",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  oman: {
    fill: "rgb(102, 177, 201)",
    strokeWith: "10",
    cursor: "pointer",
    "&:hover": {
      fill: "#3b729f !important",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    "& svg": {
      color: "red",
      "& .paths": {
        outline: "none",
        "&:hover": {
          fill: "grey",
        },
      },
    },
  },
});

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

const names = [
  "IRAN",
  "IRAQ",
  "KUWAIT",
  "SAUDI",
  "BAHRAIN",
  "QATAR",
  "UAE",
  "OMAN",
];

// {
//   "originalData": {
//     "title": "Gulf Regions",
//     "backgroundColor": "white",
//     "fontColor": "black",
//     "labels": [
//       "IRAN",
//       "IRAQ",
//       "KUWAIT",
//       "SAUDI",
//       "BAHRAIN",
//       "QATAR",
//       "UAE",
//       "OMAN"
//     ]
//   }
// }

const GulfGeoMap = (props) => {
  const {
    backgroundColor = "transparent",
    title,
    fontColor,
    labels,
    onClick,
  } = props?.data?.originalData;
  const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          backgroundColor: backgroundColor,
          textAlign: "center",
          width: "40%",
        }}
      >
        {title && (
          <Typography
            sx={{
              color: fontColor ? fontColor : "black",
              textAlign: "center",
              padding: "20px 0px 0px 0px",
              fontSize: "30px",
            }}
          >
            {title}
          </Typography>
        )}

        <ComposableMap
          width={450}
          height={280}
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-54, -24.3, 0],
            scale: 500,
          }}
        >
          {[
            IRAN_TOPO_JSON,
            IRAQ_TOPO_JSON,
            KUWAIT_TOPO_JSON,
            SAUDI_ARABIA_TOPO_JSON,
            BAHRAIN_TOPO_JSON,
            QATAR_TOPO_JSON,
            UAE_TOPO_JSON,
            OMAN_TOPO_JSON,
          ].map((data, index) => (
            <HtmlTooltip title={labels?.length ? labels[index] : names[index]}>
              <Geographies
                geography={data}
                className={classes[data.name]}
                onClick={() => onClick(data.name)}
              >
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      style={{
                        default: {
                          stroke: "1",
                          outline: "none",
                        },
                        hover: {
                          outline: "none",
                        },
                        pressed: {
                          outline: "none",
                        },
                      }}
                      geography={geo}
                      onClick={() => {
                        if (props?.handleClick) {
                          props?.handleClick(geo?.properties?.woe_name);
                        }
                      }}
                    />
                  ))
                }
              </Geographies>
            </HtmlTooltip>
          ))}
        </ComposableMap>
      </Box>
    </>
  );
};

const getStats = ({ label, value, icon, iconBackground }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
    <div
      style={{
        height: "48px",
        width: "48px",
        borderRadius: "50%",
        backgroundColor: iconBackground || "#32375b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {icon}
    </div>
    <div>
      <div style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}>
        {value}
      </div>
      <div style={{ fontSize: "15px", color: "#fff" }}>{label}</div>
    </div>
  </div>
);

const GulfRegionStats = ({ data }) => {
  const mapDetails = data?.originalData?.data;
  const headerText = mapDetails?.headerText;
  const mapData = mapDetails?.mapData;
  const stats = mapDetails?.stats;
  const className = useStyles();

  const [selected, setSelected] = useState("");

  const selectedData = useMemo(() => {
    if (!selected) {
      return mapDetails?.defaultData;
    }

    return mapData?.[selected];
  }, [mapDetails, selected]);

  const polardata = useMemo(() => {
    const { labels, data, title, fontSize } = selectedData?.polarData || {
      labels: [],
      data: [],
      title: "Polor Chart",
    };

    return {
      originalData: {
        data: getDefaultDataset({
          labels,
          data,
        }),
        title,
        fontSize,
        titleColor: "#fff",
        height: "300px",
      },
    };
  }, [selectedData]);

  const keyIndicatorData = useMemo(() => {
    const { indicators, title, ...rest } = selectedData?.keyIndicatorData || {
      indicators: [],
      title: "Key Indicator",
    };

    return {
      originalData: {
        ...rest,
        indicators,
        title,
        backgroundColor: "transparent",
        titleColor: "#fff",
      },
    };
  }, [selectedData]);

  return (
    <Box
      sx={{
        backgroundColor: "#171d32",
        fontFamily: "Montserrat, Helvetica, Arial, serif",
        padding: "25px",
      }}
      className={className.container}
    >
      <div
        style={{
          background: "#283046",
          borderRadius: "8px",
          height: "90px",
          boxShadow: "0px 0px 12px 0px rgba(194,194,194,1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {getStats({
          label: stats?.[0]?.label,
          value: stats?.[0]?.value,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7367f0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          ),
        })}
        {getStats({
          label: stats?.[1]?.label,
          value: stats?.[1]?.value,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7367f0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-grid avatar-icon"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          ),
        })}
        {getStats({
          label: stats?.[2]?.label,
          value: stats?.[2]?.value,
          iconBackground: "#283c44",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#25b867"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-command avatar-icon"
            >
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
          ),
        })}
        {getStats({
          label: stats?.[3]?.label,
          value: stats?.[3]?.value,
          iconBackground: "#284055",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0bbbd1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-user avatar-icon"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          ),
        })}
        {getStats({
          label: stats?.[4]?.label,
          value: stats?.[4]?.value,
          iconBackground: "#3d3143",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e25152"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-box avatar-icon"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          ),
        })}
        {getStats({
          label: stats?.[5]?.label,
          value: stats?.[5]?.value,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7367f0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-trending-up avatar-icon"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          ),
        })}
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px",
          background: "#283046",
          borderRadius: "8px",
          maxHeight: "450px",
          boxShadow: "0px 0px 12px 0px rgba(194,194,194,1)",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            textAlign: "center",
            padding: "10px 0px 0px 0px",
            fontSize: "22px",
          }}
        >
          {headerText}
        </Typography>
        <GulfGeoMap
          data={{
            originalData: {
              onClick: (e) => setSelected(e),
              labels: Object.values(mapData).map(({ label }) => label),
            },
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <div
          style={{
            flex: 1,
            background: "#283046",
            borderRadius: "8px",
            height: "380px",
            boxShadow: "0px 0px 12px 0px rgba(194,194,194,1)",
          }}
        >
          <PolarChartDesigner data={polardata} />
        </div>

        <div
          style={{
            flex: 1,
            background: "#283046",
            borderRadius: "8px",
            height: "380px",
            boxShadow: "0px 0px 12px 0px rgba(194,194,194,1)",
          }}
        >
          <KeyIndicatorDesigner data={keyIndicatorData} />
        </div>
      </Box>
    </Box>
  );
};

export default GulfRegionStats;
