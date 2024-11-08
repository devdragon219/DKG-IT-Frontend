import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles(() => ({
  modalWrapper: {
    width: "400px",
    height: "fit-content",
    position: "absolute",
    backgroundColor: "#f2f2f2",
    borderRadius: "10px",
    top: 0,
    bottom: 0,
    margin: "auto 0",
    right: "50%",
    transform: "translateX(50%)",

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

  const { title, description } = modalData;

  return (
    <div
      style={{
        display: open ? "block" : "none",
      }}
      className={classes.modalWrapper}
    >
      <CloseIcon onClick={handleClose} className={classes.closeIcon} />
      <div className={classes.modalHeader}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          style={{
            marginLeft: "10px",
            color: "#083763",
          }}
        >
          {title}
        </Typography>
      </div>

      {description ? (
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          style={{
            color: "#083763",
          }}
        >
          {description}
        </Typography>
      ) : (
        <></>
      )}
    </div>
  );
};
