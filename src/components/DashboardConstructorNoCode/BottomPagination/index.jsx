import {
  Button,
  IconButton,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles(() => ({
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    marginBottom: "0",
    padding: "3px !important",
    "& .MuiPagination-ul": {
      padding: "3px",
    },
  },
  paginationItem: {
    color: "white !important",
    fontSize: "14px !important",
    "&.Mui-selected": {
      backgroundColor: "rgba(255,255,255, 0.4) !important",
      fontWeight: 600,
    },
    "& .MuiPaginationItem-icon": {
      fontSize: "24px !important",
    },
  },
}));

const BottomPagination = ({
  setCurrentPage,
  currentPage,
  setSelectedPage,
  macroPanelConfig,
  isEditMode,
  pagesData,
  addPage,
  removePage,
  currentBreakpoint,
}) => {
  const classes = useStyles();
  const { mainColor1, mainColor2 } = macroPanelConfig;
  return (
    <>
      {isEditMode && currentBreakpoint === "lg" ? (
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: "54px",
            bottom: "-12px",
            transform: "translateY(-50%)",
          }}
        >
          <Button
            size="small"
            onClick={() => addPage()}
            style={{
              color: "#fff",
            }}
          >
            <IconButton size="normal" color="#fff" variant="contained">
              <AddIcon style={{ fontSize: "12px", color: "#fff" }} />
            </IconButton>
            Add page
          </Button>
          {pagesData.length > 1 ? (
            <Button
              size="small"
              onClick={() => removePage(currentPage - 1)}
              style={{
                color: "#fff",
              }}
            >
              <IconButton
                sx={{
                  marginLeft: "15px",
                }}
                size="normal"
                color="primary"
                variant="contained"
              >
                <DeleteIcon style={{ fontSize: "12px", color: "#fff" }} />
              </IconButton>
              Delete page
            </Button>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      <Pagination
        size="large"
        style={{
          background: `linear-gradient(90deg, ${mainColor2} 0%, ${mainColor1} 100%)`,
        }}
        classes={{ ul: classes.pagination }}
        count={pagesData.length}
        page={currentPage}
        onChange={(_event, page) => {
          setSelectedPage(page);
          setCurrentPage(page);
        }}
        type="start-ellipsis"
        renderItem={(item) => {
          return (
            <PaginationItem
              className={classes.paginationItem}
              slots={{
                previous: () => (
                  <Typography
                    variant="label"
                    style={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <ArrowBackIcon />
                    <span style={{ marginLeft: "16px" }}>Previous</span>
                  </Typography>
                ),
                next: () => (
                  <Typography
                    variant="label"
                    style={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <span style={{ marginRight: "16px" }}>Next</span>
                    <ArrowForwardIcon />
                  </Typography>
                ),
              }}
              {...item}
              sx={{ color: "white" }}
            />
          );
        }}
      />
    </>
  );
};

export default BottomPagination;
