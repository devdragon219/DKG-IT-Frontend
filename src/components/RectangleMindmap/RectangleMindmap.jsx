/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";

import Image from "./img.jpg";

const useStyles = makeStyles({
  wrap: {
    width: "100%",
    display: "flex",
    gap: "25px",
    boxSizing: "border-box",
    padding: "15px",
  },
  item: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column !important",
  },
  rectangle: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "white",

    cursor: "pointer",
    backgroundImage: `url(${Image})`,
    backgroundSize: "1500px",
  },
  sectorName: {
    fontSize: "13px !important",
    fontWeight: "800 !important",
    textAlign: "center",
  },
});

const RectangleMindmapDesigner = ({ data, isEditMode, ...rest }) => {
  const classes = useStyles();
  const dataProps = data.originalData.data;
  const heightProps = data?.originalData?.height;
  const isNewMode = data?.originalData?.isNewMode;

  const borderColor = data?.originalData?.borderColor;
  const textColor = data?.originalData?.textColor;

  const getHeight = () => {
    let height = `${heightProps}px`;
    if (isNewMode) {
      height = isEditMode ? `100%` : "100vh";
    }

    return height;
  };

  return (
    <div className={classes.wrap} style={{ height: getHeight() }}>
      {dataProps.map((row, i) => {
        return (
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            style={{ height: "100%" }}
            spacing={1}
          >
            {row.map((item, j) => {
              const spacing = 0.12 * item?.percentage;
              const positionX = 100 / dataProps.length;
              let positionY = 0;
              row.forEach((el, index) => {
                if (index < j) {
                  positionY = positionY + el?.percentage;
                }
              });

              return (
                <Grid item xs={spacing} className={classes.item}>
                  <Typography
                    className={classes.sectorName}
                    style={{
                      color: textColor ? textColor : "#3069a0",
                    }}
                  >
                    {item?.name}
                  </Typography>
                  <a
                    href={item?.link}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.rectangle}
                    style={{
                      backgroundPositionX: `${i * positionX}%`,
                      backgroundPositionY: `${positionY}%`,
                      border: borderColor
                        ? `2px solid ${borderColor}`
                        : "2px solid #3069a0",
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        );
      })}
    </div>
  );
};

export default RectangleMindmapDesigner;
