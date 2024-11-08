import React, { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Tooltip as ReactTooltip } from "react-tooltip";
import PolarChartDesigner from "../../components/PolarChart/PolarChartDesigner";
import KeyIndicatorDesigner from "../../components/KeyIndicatorDesigner";
import VerticalBarForGeoMaps from "../../components/VerticalBarForGeoMaps";
import { getDefaultDataset } from "../PolarChart/PolarChartDesigner";
import UkMapSvg from "./UkMapSvg";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    "& svg": {
      color: "red",
      "& path": {
        outline: "none",
        "&:hover": {
          fill: "grey",
        },
      },
    },
  },
});

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

const UkMapStats = ({ data }) => {
  console.log("data", data);
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
    const { labels, data, title } = selectedData?.polarData || {
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

  const barChartData = useMemo(() => {
    const { data, labels, colors, height, title } =
      selectedData?.barChartData || {
        data: [],
        labels: {},
        colors: {},
        height: "700px",
        title: "Companies Distribution  by Industry",
      };

    return {
      originalData: {
        data,
        labels,
        colors,
        height,
        title,
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
          height: "100px",
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
          width: "100%",
          gap: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            flexDirection: "column",
            width: "35%",
          }}
        >
          <div
            style={{
              // flex: 1,
              background: "#283046",
              borderRadius: "8px",
              boxShadow: "0px 0px 12px 0px rgba(194,194,194,1)",
              height: "800px",
              padding: "25px 0px",
            }}
          >
            <div
              style={{
                fontFamily: "Montserrat, Helvetica, Arial, serif",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "30px",
                fontSize: "20px",
                margin: "0px",
                fontWeight: "inherit",
                color: "white",
              }}
            >
              Companies Distribution By Industry
            </div>
            <VerticalBarForGeoMaps data={barChartData} />
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "15px",
            flexDirection: "column",
            width: "30%",
          }}
        >
          <div
            style={{
              // flex: 1,
              background: "#283046",
              borderRadius: "8px",
              height: "400px",
              boxShadow: "0px 0px 12px 0px rgba(194,194,194,1)",
            }}
          >
            <PolarChartDesigner data={polardata} />
          </div>

          <div
            style={{
              // flex: 1,
              background: "#283046",
              borderRadius: "8px",
              height: "435px",
              boxShadow: "0px 0px 12px 0px rgba(194,194,194,1)",
            }}
          >
            <KeyIndicatorDesigner data={keyIndicatorData} />
            {/* {console.log("keydata==>", keyIndicatorData)} */}
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "25px 0px",
            background: "#283046",
            borderRadius: "8px",
            maxHeight: "800px",
            boxShadow: "0px 0px 12px 0px rgba(194,194,194,1)",
            width: "35%",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              textAlign: "center",
              fontSize: "22px",
              marginBottom: "-80px",
            }}
          >
            {headerText}
          </Typography>

          <UkMapSvg
            // style={{ marginBottom: "-15px" }}
            onClick={(e) => setSelected(e.target.dataset.tooltipId)}
          />
        </Box>
      </Box>

      {mapData &&
        Object.keys(mapData).map((item) => (
          <ReactTooltip
            id={item}
            place="right"
            variant="light"
            clickable={false}
            noArrow={true}
            float={true}
            content={mapData[item].label}
            opacity="1"
            style={{
              background: "white",
              fontWeight: "bold",
            }}
          />
        ))}
    </Box>
  );
};

export default UkMapStats;
