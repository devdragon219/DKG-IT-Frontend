import React, { useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { makeStyles } from "@mui/styles";
import StatsComponent from "../../components/StatsComponent";
import VerticalBarForGeoMaps from "../../components/VerticalBarForGeoMaps";
import { useMemo } from "react";
import PolarChartDesigner from "../../components/PolarChart/PolarChartDesigner";
import KeyIndicatorDesigner from "../../components/KeyIndicatorDesigner";
import { getDefaultDataset } from "../PolarChart/PolarChartDesigner";
import UKMapStatic from "./UKMapStatic";

const useStyles = makeStyles({
  container: {
    padding: "10px 15px",
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
  statsContainer: {
    marginBottom: "20px",
  },
  mainSubSection: {
    borderRadius: "5px",
    margin: "0 !important",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  },
  mainSubSection_3: {
    borderRadius: "5px",
    margin: "0 !important",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 0px 30px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -1px 6px 0px inset",
    flex: "1 !important",
    padding: "25px 10px !important",
  },
  mainSubSection_1: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
});

const UkStaticGeomap = ({ data }) => {
  const hightlightCountry = data?.originalData?.hightlightCountry;
  const className = useStyles();
  const [selectedCountry, setSelectedCountry] = useState(hightlightCountry);
  const { mapTitle } = data?.originalData;
  const isDarkTheme = data?.originalData?.theme === "dark";

  const stats = {
    originalData: {
      data: data?.originalData?.stats,
    },
  };

  let footer = {
    originalData: {
      data: data.originalData.statsFooter,
    },
  };

  if (footer.originalData.data === undefined) {
    footer = stats;
  }

  const dataForBArChart = useMemo(() => {
    const keys = Object.keys(data?.originalData);
    if (keys.indexOf("map_and_stats_connected") !== -1) {
      if (!data?.originalData?.map_and_stats_connected) {
        return {
          originalData: data?.originalData?.dataForBArChart,
        };
      }
    }

    return {
      originalData: data?.originalData?.dataForBArChart[selectedCountry],
    };
  }, [selectedCountry, data]);

  const handleCountryChange = (value) => {
    const keys = Object.keys(data?.originalData);
    if (keys.indexOf("map_and_stats_connected") !== -1) {
      if (!data?.originalData?.map_and_stats_connected) {
        return;
      }
    }
    console.log(value);
    setSelectedCountry(value);
  };

  const dataForPolarChart = useMemo(() => {
    const keys = Object.keys(data?.originalData);
    if (keys.indexOf("map_and_stats_connected") !== -1) {
      if (!data?.originalData?.map_and_stats_connected) {
        const {
          labels,
          data: dataExt,
          title,
          fontSize,
        } = data?.originalData?.dataForPolarChart;
        return {
          originalData: {
            data: getDefaultDataset({
              labels,
              data: dataExt,
            }),
            title,
            fontSize,
            titleColor: "#fff",
            height: "300px",
          },
        };
      }
    }
    const {
      labels,
      data: dataExt,
      title,
      fontSize,
    } = data?.originalData?.dataForPolarChart?.[selectedCountry];

    return {
      originalData: {
        data: getDefaultDataset({
          labels,
          data: dataExt,
        }),
        title,
        fontSize,
        titleColor: "#000",
        height: "300px",
      },
    };
  }, [selectedCountry, data]);

  const dataForKeyIndicator = useMemo(() => {
    const keys = Object.keys(data?.originalData);
    if (keys.indexOf("map_and_stats_connected") !== -1) {
      if (!data?.originalData?.map_and_stats_connected) {
        const { indicators, title, ...rest } =
          data?.originalData?.dataForKeyIndicator;
        return {
          originalData: {
            ...rest,
            indicators,
            title,
            backgroundColor: "transparent",
            titleColor: "#000",
          },
        };
      }
    }

    const { indicators, title, ...rest } =
      data?.originalData?.dataForKeyIndicator?.[selectedCountry];

    return {
      originalData: {
        ...rest,
        indicators,
        title,
        backgroundColor: "transparent",
        titleColor: "#000",
      },
    };
  }, [selectedCountry, data]);

  return (
    <Box
      className={className.container}
      sx={{ background: isDarkTheme && "rgb(22, 29, 49)" }}
    >
      <Box className={className.statsContainer}>
        <StatsComponent isDarkTheme={isDarkTheme} data={stats} />
      </Box>
      <Box className={className.mainContainer}>
        <Grid
          style={{ width: "100%" }}
          justifyContent={"space-between"}
          container
          // alignItems="stretch"
        >
          <Grid
            item
            xs={12}
            md={4.1}
            className={className.mainSubSection}
            sx={{
              marginBottom: "10px !important",
              background: isDarkTheme && "#283046",
            }}
            key={selectedCountry}
          >
            <VerticalBarForGeoMaps
              isDarkTheme={isDarkTheme}
              xWidth={245}
              data={dataForBArChart}
            />
          </Grid>
          <Grid
            item
            xs={10}
            md={3.6}
            className={className.mainSubSection_1}
            sx={{
              marginBottom: "10px !important",
            }}
            cla
          >
            <Grid
              item
              xs={12}
              sx={{ background: isDarkTheme && "#283046" }}
              className={className.mainSubSection_3}
            >
              <PolarChartDesigner
                isDarkTheme={isDarkTheme}
                data={dataForPolarChart}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ background: isDarkTheme && "#283046" }}
              className={className.mainSubSection_3}
            >
              <KeyIndicatorDesigner
                isDarkTheme={isDarkTheme}
                data={dataForKeyIndicator}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={4.2}
            className={className.mainSubSection}
            sx={{
              marginBottom: "10px !important",
              background: isDarkTheme && "#283046",
            }}
          >
            <UKMapStatic
              highlight={hightlightCountry}
              data={data}
              handleClick={handleCountryChange}
              mapTitle={mapTitle}
              isDarkTheme={isDarkTheme}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UkStaticGeomap;
