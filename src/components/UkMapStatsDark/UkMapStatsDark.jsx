import React, { useMemo, useState } from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PolarChartDesigner from "../../components/PolarChart/PolarChartDesigner";
import KeyIndicatorDesigner from "../../components/KeyIndicatorDesigner";
import { getDefaultDataset } from "../PolarChart/PolarChartDesigner";
import StatsComponent from "../../components/StatsComponent";
import VerticalBarForGeoMaps from "../../components/VerticalBarForGeoMaps";
import UkMapDark from "../../components/UkMapDark";

const useStyles_main = makeStyles({
  container: {
    padding: "10px 15px",
  },
  statsContainer: {
    marginBottom: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 12px 0px rgba(194,194,194,1)",
  },
  mainSubSection: {
    borderRadius: "5px",
    margin: "0 !important",
    boxShadow: "0px 0px 12px 0px rgba(194,194,194,1)",
    backgroundColor:"#283046"
      // "rgba(50, 50, 93, 0.25) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  },
  mainSubSection_3: {
    borderRadius: "5px",
    margin: "0 !important",
    boxShadow:"0px 0px 12px 0px rgba(194,194,194,1)",
      // "rgba(50, 50, 93, 0.25) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    flex: "1 !important",
    padding: "25px 10px !important",
    backgroundColor:"#283046"
  },
  mainSubSection_1: {
    display: "flex",
    flexDirection: "column !important",
    gap: "20px !important",
  },
});

const UkMapStatsDark = ({ data }) => {
  const mapDetails = data?.originalData?.data;
  const mapData = mapDetails?.mapData;
  const mapConfig = mapDetails?.mapConfig;
  const classNameMain = useStyles_main();

  const [selected, setSelected] = useState("");

  const selectedData = useMemo(() => {
    if (!selected) {
      return mapDetails?.defaultData;
    }

    return mapData?.[selected];
  }, [mapDetails, selected, mapData]);

  const dataForBarChart = useMemo(() => {
    return {
      originalData: selectedData?.barChartData || {},
    };
  }, [selectedData]);

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
        titleColor: "#000",
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
        titleColor: "#000",
      },
    };
  }, [selectedData]);

  const stats = {
    originalData: {
      data: mapDetails?.stats,
    },
  };

  const [showMarkers, setShowMarkers] = useState(false);

  const onStatClick = (key) =>
    key === "aging_clinics" && setShowMarkers((prev) => !prev);

  return (
    <Box className={classNameMain.container} style={{ backgroundColor: "#171d32"}}>
      <Box className={classNameMain.statsContainer}>
        <StatsComponent data={stats} onClick={onStatClick} isDarkTheme={true}/>
      </Box>
      <Box className={classNameMain.mainContainer}>
        <Grid
          container
          style={{ width: "100%" }}
          justifyContent={"space-between"}
          alignItems="stretch"
        >
          <Grid item xs={12} md={3.9} className={classNameMain.mainSubSection}>
            <VerticalBarForGeoMaps data={dataForBarChart} isDarkTheme={true}/>
          </Grid>
          <Grid
            item
            xs={12}
            md={3.9}
            className={classNameMain.mainSubSection_1}
          >
            <Grid item xs={12} className={classNameMain.mainSubSection_3}>
              <PolarChartDesigner data={polardata} isDarkTheme={true}/>
            </Grid>
            <Grid item xs={12} className={classNameMain.mainSubSection_3}>
              <KeyIndicatorDesigner data={keyIndicatorData} isDarkTheme={true}/>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={3.9}
            className={classNameMain.mainSubSection}
            sx={{
              padding: "25px !important",
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor:"#283046",
            }}
          >
            <UkMapDark
              data={{ originalData: mapConfig }}
              handleClick={(selected) => setSelected(selected)}
              showMarkers={showMarkers}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UkMapStatsDark;
