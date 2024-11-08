import React from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { STATS_LOGO } from "./mockData";

const useStyles = makeStyles({
  container: {
    borderRadius: "5px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  },
});

const getStats = (
  { label, value, icon, iconBackground, click_key, textColor },
  onClick,
  isDarkTheme
) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
    }}
    onClick={() => onClick(click_key)}
  >
    <div
      style={{
        height: "auto",
        width: "40px",
        aspectRatio: "1/1",
        borderRadius: "50%",
        backgroundColor: iconBackground || "#32375b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {STATS_LOGO?.[icon]}
    </div>
    <div>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: textColor || (isDarkTheme ? "#d0d2d6" : "#0c5393"),
        }}
      >
        {value}
      </div>
      <div
        style={{ fontSize: "15px", color: textColor || (isDarkTheme ? "#d0d2d6" : "#0c5393") }}
      >
        {label}
      </div>
    </div>
  </div>
);

const StatsComponent = ({ data, onClick, isDarkTheme }) => {
  const className = useStyles();

  const stats = data?.originalData?.data;

  return (
    <Box
      sx={{
        fontFamily: "Montserrat, Helvetica, Arial, serif",
        padding: "20px",
        background: isDarkTheme && "#283046",
      }}
      className={className.container}
    >
      <Grid
        container
        spacing={2}
        style={{ width: "100%" }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {stats.map((el) => {
          return (
            <Grid item xs={12} md={6} lg={2} xl={2}>
              {getStats(el, onClick, isDarkTheme)}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default StatsComponent;
