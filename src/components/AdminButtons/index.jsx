import React from "react";
import { ButtonWrapper } from "./ButtonsWrapper";
import { makeStyles } from "@mui/styles";
import BasicModal from "./Model";
import { useState } from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    background: "white",
    "&> div:nth-child(5)": {
      background: "gainsboro",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.6), 0 1px 4px rgba(0,0,0,.6)",
    },
    "& > div:nth-child(1)": {
      background: "gainsboro",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.6), 0 1px 4px rgba(0,0,0,.6)",
    },
    "@media (max-width:700px)": { flexDirection: 'column', alignItems: 'center' },
  },
});


const AdminButtons = ({
  data
}) => {
  const adminButtonData = data?.originalData?.data;
  const classes = useStyles();
  const [displayModal, setDisplayModal] = useState(false);
  const [modalData, setModaldata] = useState();

  const handleOpenPop = (cardId, buttonId) => {
    setModaldata(adminButtonData[cardId]?.buttons[buttonId]);
    setDisplayModal(true);
  };
  const handleClose = () => {
    setDisplayModal(false);
  };
  
  
  return (
    <>
      <div className={classes.container}>
        {adminButtonData.map((cardData, index) => (
            <ButtonWrapper
              handleOpenPop={handleOpenPop}
              handleClose={handleClose}
              headerText={"Geogrsphy and Industry"}
              cardData={cardData}
              cardId={index}
              key={`${cardData?.header}-${index}-list-item`}
            />
        ))}
      </div>
      {<BasicModal handleClose={handleClose} displayModal={displayModal} modalData={modalData}/>}
    </>
  );
};

export default AdminButtons;
