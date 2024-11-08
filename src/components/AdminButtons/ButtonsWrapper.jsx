import React from "react";
import Button from "./Button";
import { makeStyles } from "@mui/styles";
import RightArrow from "./rightArrow";

const useStyles = makeStyles({
  buttonWrapper: {
    width: 273,
    padding: 10,
    borderRadius: 10,
    paddingBottom: 0,
  },
  headerMessage: {
    fontFamily: "roboto-thin,roboto,sans-serif",
    fontSize: 19,
    fontWeight: 500,
    color: "#004DFF",
    margin: 0,
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
    cursor: "pointer",
  },
});

export const ButtonWrapper = ({ cardData, handleOpenPop, cardId }) => {
  const classes = useStyles();
  const headerText = cardData?.header;
  const buttons = cardData?.buttons;
  const color = cardData?.color;
  return (
    <div className={classes.buttonWrapper}>
      <div className={classes.header}>
        <p className={classes.headerMessage} style={{ color: color }}>
          {headerText}
        </p>
        <RightArrow color={color} />
      </div>
      {buttons.map((button, index) =>
        button.icon ? (
          <Button isIcon={true} color={color} buttonData={button} />
        ) : (
          <Button
            color={button?.color ? button?.color : color}
            handleOpenPop={handleOpenPop}
            buttonId={index}
            cardId={cardId}
            buttonData={button}
            key={`${button?.textMessage}-${index}-list-item`}
          />
        )
      )}
    </div>
  );
};
