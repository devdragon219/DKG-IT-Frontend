import React, { useMemo, useState } from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PolarChartDesigner from "../../components/PolarChart/PolarChartDesigner";
import KeyIndicatorDesigner from "../../components/KeyIndicatorDesigner";
import { getDefaultDataset } from "../PolarChart/PolarChartDesigner";
import StatsComponent from "../../components/StatsComponent";
import VerticalBarForGeoMaps from "../../components/VerticalBarForGeoMaps";
import HarleyStreet3D from "../HarleyStreet3D";

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
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    backgroundColor: "white",
  },
  mainSubSection_3: {
    borderRadius: "5px",
    margin: "0 !important",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 0px 30px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -1px 6px 0px inset",
    flex: "1 !important",
    padding: "25px 10px !important",
    backgroundColor: "white",
  },
  mainSubSection_1: {
    display: "flex",
    flexDirection: "column !important",
    gap: "20px",
  },
});

const MapboxGeodashboardv1 = ({ data }) => {
  console.log("data==>", data);
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
      title: "Polar Chart",
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
    <Box
      className={classNameMain.container}
      style={{ backgroundColor: "white" }}
    >
      <Box className={classNameMain.statsContainer}>
        <StatsComponent data={stats} onClick={onStatClick} />
      </Box>
      <Box>
        <Grid container style={{ position: "relative" }}>
          <Grid
            item
            xs={12}
            md={12}
            className={classNameMain.mainSubSection}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor: "white",
              padding: "10px",
              width: "100%",
              position: "relative",
            }}
          >
            <HarleyStreet3D
              data={{ originalData: mapConfig }}
              handleClick={(selected) => setSelected(selected)}
            ></HarleyStreet3D>
          </Grid>
          <Grid
            item
            xs={12}
            className={classNameMain.mainSubSection_3}
            style={{
              position: "absolute",
              top: "3%",
              right: "1.5%",
              width: "20%",
              zIndex: 1,
            }}
          >
            <PolarChartDesigner data={polardata} />
          </Grid>
          <Grid
            item
            xs={12}
            className={classNameMain.mainSubSection_3}
            style={{
              position: "absolute",
              bottom: "2.5%",
              right: "10%",
              width: "80%",
              zIndex: 1,
            }}
          >
            <KeyIndicatorDesigner data={keyIndicatorData} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MapboxGeodashboardv1;
