import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",

  bgcolor: "background.paper",
  boxShadow: 20,
  padding: "10px",
  overflowY: "scroll",
};

export default function BasicModal({ displayModal, handleClose, modalData }) {
  return (
    <div>
      <Modal
        open={displayModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            height: modalData?.hideModalText ? 490 : 650,
          }}
        >
          <IconButton
            sx={{
              float: "right",
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          {modalData?.hideModalText ? (
            <></>
          ) : (
            <>
              <Typography
                sx={{
                  paddingTop: "30px",
                }}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                {modalData?.textMessage}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {modalData?.detailedtext}
              </Typography>
            </>
          )}

          <div
            style={{
              margin: "20px",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <iframe
              width={900}
              height={450}
              style={{
                border: "none",
              }}
              src={modalData?.diagramLink}
              title={modalData?.textMessage}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
