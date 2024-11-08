//This file is the table of all the widgets creation details
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Alert from "@mui/material/Alert";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LanguageIcon from '@mui/icons-material/Language';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { getItemsBySlug, deleteItemBySlug } from "../../store/list";
import Loader from "../Loader";
import Stack from "@mui/material/Stack";
import {
  CREATE_DASH,
  EDIT_ROUTE,
  onCheckIsNewGenVis,
  pathToNewPage,
} from "../../constants/routes";
import CustomButton from "../CustomButton";
import { NotEnoughPermissionsError } from "../../constants/messages";
import { LINKS_CONSTS } from "../../constants/links";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ccc",
    color: "#282828",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function WidgetsList({ type }) {
  const dispatch = useDispatch();

  const { items, status } = useSelector((state) => state.list);
  const { profile } = useSelector(({ user }) => user);
  const permissionTooltip = profile.isEditor ? "" : NotEnoughPermissionsError;

  useEffect(() => {
    dispatch(getItemsBySlug(type));
    console.log('items', items)
  }, [type]);

  const onClickDelete = (id) => {
    const res = window.confirm("Are you sure you want to delete this item?");
    if (!res) {
      return;
    }
    dispatch(deleteItemBySlug(id));
  };

  const isNewGenVisBySlug = (slug) => {
    if (slug.split("-").length >= 4) {
      return true;
    }
    return false;
  };

  const isLoading = status === "loading";
  let hrefPart = pathToNewPage(type);

  return (
    <Container maxWidth="2xl">
      <Paper
        sx={{
          width: "100%",
          marginBottom: "24px",
          height: "440px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {!profile.isEditor && (
          <Alert style={{ marginBottom: "10px" }} severity="warning">
            You do not have permission to edit or create charts.
          </Alert>
        )}
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>URL</StyledTableCell>
                <StyledTableCell>Updated Time</StyledTableCell>
                <StyledTableCell>Updated User</StyledTableCell>
                <StyledTableCell align="right"> </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {type !== 'portfolioConstructionTool' && (
                <StyledTableRow key={"best-exs"}>
                  <StyledTableCell component="th" scope="row">
                    Example of best implementation
                  </StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell align="right">
                    <Stack
                      spacing={2}
                      direction="row"
                      style={{ justifyContent: "end" }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<OpenInNewIcon />}
                        href={`${hrefPart}demo_example?${type}`}
                        target="_blank"
                        underline="none"
                      >
                        Open
                      </Button>
                    </Stack>
                  </StyledTableCell>
                </StyledTableRow>
              )}
              {!isLoading &&
                items?.length > 0 &&
                items.map((row) => {
                  const getHref = () => {
                    if (row.diagram_type === "dashboardConstructorNoCode") {
                      return `${CREATE_DASH}${row.slug}`;
                    }
                    if (row.diagram_type === "portfolioConstructionTool") {
                      return `${LINKS_CONSTS[row.diagram_type].link}/edit/${row.slug}`
                    }
                    console.log(
                      `${onCheckIsNewGenVis(type) && isNewGenVisBySlug(row.slug)
                        ? ""
                        : EDIT_ROUTE
                      }${row.diagram_type}/${row.slug}`,
                      9989898
                    );
                    return `${onCheckIsNewGenVis(type) && isNewGenVisBySlug(row.slug)
                      ? ""
                      : EDIT_ROUTE
                      }${row.diagram_type}/${row.slug}`;
                  };
                  return (
                    <StyledTableRow key={row.id || row?.slug}>
                      <StyledTableCell component="th" scope="row">
                        {row?.title}
                      </StyledTableCell>
                      <StyledTableCell>{row?.slug}</StyledTableCell>
                      <StyledTableCell>{row?.updated_time}</StyledTableCell>
                      <StyledTableCell>
                        {row?.updated_user_name || "admin"}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Stack
                          spacing={2}
                          direction="row"
                          style={{ justifyContent: "end" }}
                        >
                          <CustomButton
                            variant="contained"
                            startIcon={<EditIcon />}
                            href={getHref()}
                            target="_blank"
                            underline="none"
                            tooltip={permissionTooltip}
                            disabled={!!permissionTooltip}
                          >
                            Edit
                          </CustomButton>
                          <Button
                            variant="contained"
                            startIcon={<LanguageIcon />}
                            href={
                              `/panel-deploy/${row?.slug}`
                            }
                            target="_blank"
                            underline="none"
                          >
                            Go live
                          </Button>
                          <Button
                            variant="contained"
                            startIcon={<OpenInNewIcon />}
                            href={
                              row.diagram_type !== 'portfolioConstructionTool' ?
                                `${hrefPart}${row?.slug}` : `${LINKS_CONSTS[row.diagram_type].link}/view/${row.slug}`
                            }
                            target="_blank"
                            underline="none"
                          >
                            Open
                          </Button>
                          <CustomButton
                            onClick={() => onClickDelete(row?.slug)}
                            variant="contained"
                            startIcon={<DeleteIcon />}
                            tooltip={permissionTooltip}
                            disabled={!!permissionTooltip}
                          >
                            Delete
                          </CustomButton>
                        </Stack>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        {isLoading && <Loader />}
      </Paper>
    </Container>
  );
}