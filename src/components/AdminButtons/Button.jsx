import React from "react";
import { makeStyles } from "@mui/styles";
import MoreIcon from "./moreIcon";
import { Typography } from "@mui/material";


const useStyles = makeStyles({
  button:(props) => ({
    display: "flex",
    gap: 5,
    padding: "20px 10px",
    borderRadius: 7,
    outline: "1px solid rgb(119, 119, 119)",
    background: "rgb(255, 255, 255)",
    cursor: "pointer",
    alignItems: "center",
    marginBottom: 8,
    "&:hover": {
      outline: `2px solid ${props.color}`,
      "& p": {
        color: `${props.color} !important`,
      },
    },
    "@media (max-width: 700px)": {
      padding: "10px 10px",
    }
  }),
  buttonTxt: {
    padding: 0,
    margin: 0,
    lineHeight: 1.2,
    fontWeight: 400,
    fontFamily: "sans-serif",
    fontSize: 15,
    color: "#525252",
    paddingBottom: 0,
    maxWidth: '100%',
    minWidth: '1.8em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
});

const Button = ({ buttonData, isIcon, handleOpenPop, color, buttonId, cardId }) => {
  const props = {
    color: color,
  };
  const classes = useStyles(props);
  return isIcon ? (
    <div className={classes.button} style={{ padding: "17px 10px", outline: `2px solid ${color}` }}>
      <MoreIcon color={color} />
      <Typography
        style={{
          fontSize: "15px",
        }}
        className={classes.buttonTxt}
      >
        {buttonData?.textMessage}
      </Typography>
    </div>
  ) : (
    <div className={classes.button} onClick={() => handleOpenPop(cardId, buttonId)}>
      <Typography
        style={{
          fontSize: "20px",
          color: color,
        }}
      >
        {buttonData?.number}
      </Typography>
      <Typography
        style={{
          fontSize: "15px",
        }}
        className={classes.buttonTxt}
      >
        {buttonData?.textMessage}
      </Typography>
    </div>
  );
};

export default Button;
