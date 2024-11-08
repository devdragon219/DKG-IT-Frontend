import React, { useMemo, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PolarChartDesigner from "../../components/PolarChart/PolarChartDesigner";
import KeyIndicatorDesigner from "../../components/KeyIndicatorDesigner";
import { getDefaultDataset } from "../PolarChart/PolarChartDesigner";
import GlobalMap from "./GlobalMap";
import StatsComponent from "../../components/StatsComponent";

const useStyles_main = makeStyles({
  container: {
    padding: "10px 15px",
  },
  statsContainer: {
    marginBottom: "20px",
  },
  mainSubSection: {
    borderRadius: "5px",
    margin: "0 !important",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  },
  mainSubSection_3: {
    borderRadius: "5px",
    margin: "0 !important",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    flex: "1 !important",
    padding: "25px 10px !important",
  },
  mainSubSection_1: {
    display: "flex",
    flexDirection: "column !important",
    gap: "20px !important",
  },
});

const GlobalMapStats = ({ data }) => {
  const mapDetails = data?.originalData?.data;
  const mapData = mapDetails?.mapData;
  const mapConfig = mapDetails?.mapConfig;
  const classNameMain = useStyles_main();

  const [selected, setSelected] = useState("defaultData");

  const selectedData = useMemo(() => {
    if (!selected) {
      return mapDetails?.defaultData;
    }

    return mapData?.[selected] || mapDetails?.defaultData;
  }, [mapDetails, selected]);

  const {
    labels,
    data: pData,
    title,
    fontSize,
    backgroundColor,
  } = selectedData?.polarData || {
    labels: [],
    data: [],
    title: "Polar Chart",
    backgroundColor: [
      "rgba(255, 99, 132, 0.9)",
      "rgba(54, 162, 235, 0.9)",
      "rgba(255, 206, 86, 0.9)",
      "rgba(75, 192, 192, 0.9)",
      "rgba(153, 102, 255, 0.9)",
      "rgba(255, 159, 64, 0.9)",
    ],
  };
  const polardata = {
    originalData: {
      data: getDefaultDataset({
        labels,
        data: pData,
        backgroundColor,
      }),
      title,
      fontSize,
      titleColor: "#000",
      height: "300px",
    },
  };

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
        titleColor: "#000",
      },
    };
  }, [selectedData]);

  const stats = {
    originalData: {
      data: mapDetails?.stats,
    },
  };

  return (
    <Box className={classNameMain.container}>
      <Box className={classNameMain.statsContainer}>
        <StatsComponent data={stats} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "25px",
          maxHeight: "450px",
          marginBottom: "20px !important",
        }}
        className={classNameMain.mainSubSection}
      >
        <GlobalMap data={mapConfig} handleClick={(name) => setSelected(name)} />
      </Box>

      <Box className={classNameMain.mainContainer}>
        <Grid
          container
          style={{ width: "100%" }}
          alignItems="stretch"
          gap="20px"
        >
          <Grid item xs={12} md={6} className={classNameMain.mainSubSection_3}>
            <PolarChartDesigner data={polardata} />
          </Grid>
          <Grid item xs={12} md={6} className={classNameMain.mainSubSection_3}>
            <KeyIndicatorDesigner data={keyIndicatorData} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default GlobalMapStats;
