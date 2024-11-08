import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles(() => ({
  modalWrapper: {
    width: "400px",
    height: "565px",
    position: "absolute",
    backgroundColor: "#f2f2f2",
    borderRadius: "10px",
    top: 0,
    bottom: 0,
    margin: "auto 0",
    right: 100,

    padding: "10px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
  closeIcon: {
    cursor: "pointer",
    position: "absolute",
    right: 8,
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "50px",
    objectFit: "cover",
  },
  imgTop: {
    height: "200px",
    width: "100%",
    objectFit: "contain",
  },
}));

export const ModalComponent = ({ handleClose, open, modalData }) => {
  const classes = useStyles();
  const { imgTop, logo, name, description } = modalData;

  return (
    <div
      style={{
        display: open ? "block" : "none",
        overflow: "auto"
      }}
      className={classes.modalWrapper}
    >
      <CloseIcon onClick={handleClose} className={classes.closeIcon} />
      <div className={classes.modalHeader}>
        {logo ? <img className={classes.logo} src={logo} alt="" /> : <></>}

        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          style={{
            marginLeft: "10px",
            color: "#083763",
          }}
        >
          {name}
        </Typography>
      </div>

      {imgTop ? <img className={classes.imgTop} src={imgTop} alt="" /> : <></>}
      {description ? (
        <Typography 
          id="modal-modal-description" 
          sx={{ mt: 2 }}
          dangerouslySetInnerHTML={{ __html: description }}>
        </Typography>
      ) : (
        <></>
      )}
    </div>
  );
};
