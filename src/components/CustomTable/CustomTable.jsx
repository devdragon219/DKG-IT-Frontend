import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useMemo } from "react";
import { ModalComponent } from "./ModalComponent";
import {
  adjustColorTransparency,
  findMinMaxValues,
  getComparator,
  stableSort,
} from "./utils";
import { EnhancedTableHead } from "./TableHeader";

const Android12Switch = styled(Switch)(({ theme, text }) => ({
  padding: 8,
  width: 94,
  "& .MuiSwitch-track": {
    border: "1px solid white",
    borderRadius: 22 / 2,
    backgroundColor: "#083763",
  },

  "& .MuiSwitch-thumb": {
    borderRadius: 22 / 2,
    boxShadow: "none",
    width: 50,
    height: 18,
    margin: 2,
    "&:before": {
      content: `'${text}'`,
      fontSize: "10px",
      fontFamily: `'FS Koopman',sans-serif`,
      position: "absolute",
      width: "100%",
      height: "100%",
      left: "27px",
      top: "14px",
      color: "black",
      zIndex: 1,
    },
  },
}));

const Android12SwitchMobile = styled(Switch)(({ theme, text }) => ({
  "& .MuiSwitch-track": {
    border: "1px solid white",
    borderRadius: 22 / 2,
    backgroundColor: "#083763",
  },

  "& .MuiSwitch-thumb": {
    borderRadius: 22 / 3,
    boxShadow: "none",
    width: 25,
    height: 14,
    margin: 4,
    "&:before": {
      content: `'${text}'`,
      fontSize: "0.9vw",
      fontFamily: `'FS Koopman',sans-serif`,
      position: "absolute",
      width: "100%",
      height: "100%",
      left: "16px",
      top: "16px",
      color: "black",
      zIndex: 1,
    },
  },
}));

export default function CustomTable(props) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(null);
  const [showRank, setShowRank] = React.useState(false);

  const dataProps = props?.data.originalData.data;
  const headCells = props?.data.originalData.settings;
  const sectors = props?.data.originalData.sectors;
  const isResponsive = props?.data.originalData.isResponsive;
  const isMobile = window.innerWidth < 800;

  const data = useMemo(() => {
    return dataProps.map((item) => {
      const valueType = showRank ? "rank" : "score";
      const newObject = {};

      const keys = Object.keys(item);
      keys.forEach((key) => {
        if (typeof item[key] === "object") {
          newObject[key] = item[key][valueType];
          return;
        }

        newObject[key] = item[key];
      });

      return newObject;
    });
  }, [showRank, dataProps]);

  const colSeparete = [];

  headCells.forEach((item, index) => {
    if (index === 0) return;

    if (
      item?.color !== headCells[index - 1]?.color &&
      headCells[index - 1]?.color !== null
    ) {
      colSeparete.push(index);
    }
  });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const [modalData, setModalData] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const modalDataItemDescriptionRequest = (item, desc) => {
    const countryInfo = dataProps.find((info) => info[item] === desc);
    const itemDescription = countryInfo?.description?.itemDescription || [];
    return itemDescription;
  };

  const modalDataRequest = (item, desc) => {
    const modalDataInfoDesc = dataProps.find((info) => info[item] === desc);
    const accordionList = modalDataInfoDesc?.description?.accordionList;

    return (
      <div>
        {accordionList &&
          accordionList.map((accordionItem, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <Typography>{accordionItem.header}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ width: "100%" }}>
                  {accordionItem.list.map((company, companyIndex) => (
                    <div
                      style={{
                        cursor: company.link ? "pointer" : "default",
                        marginBottom: "10px",
                        borderBottom: "1px solid #ccc",
                        paddingBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                        minHeight: isResponsive ? undefined : "50px",
                      }}
                      onClick={() => {
                        if (company.link) {
                          window.location.href = company.link;
                        }
                      }}
                      key={companyIndex}
                    >
                      {company.logo && (
                        <img
                          src={company.logo}
                          alt={company.text}
                          style={{
                            marginRight: "10px",
                            width: "100px",
                          }}
                        />
                      )}
                      <div>{company.text}</div>
                    </div>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
    );
  };

  return (
    <div
      style={{
        height: isResponsive ? "100vh" : undefined,
        backgroundColor: "rgb(0,40,80)",
        overflow: "scroll",
      }}
    >
      <Sheet
        sx={{
          width: "100%",
          backgroundColor: "rgb(0,40,80)",
          color: "white",
          height: isResponsive ? "100%" : undefined,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "30px",
          }}
        >
          <div style={{ width: "20%" }}>
            <FormControlLabel
              value="start"
              control={
                isMobile ? (
                  <Android12SwitchMobile
                    color="default"
                    text={showRank ? "rank" : "score"}
                    checked={showRank}
                    onChange={() => setShowRank(!showRank)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                ) : (
                  <Android12Switch
                    color="default"
                    text={showRank ? "rank" : "score"}
                    checked={showRank}
                    onChange={() => setShowRank(!showRank)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                )
              }
              label={
                <span
                  style={{
                    fontSize: isResponsive ? "1.1vw" : undefined,
                  }}
                >
                  Show :
                </span>
              }
              labelPlacement="start"
            />
          </div>
        </div>
        <div
          style={{
            padding: "30px 10px",
            height: "90%",
          }}
        >
          <Table
            style={{
              fontFamily: `'FS Koopman',sans-serif`,
              padding: "30px 10px",
              height: "100%",
            }}
            size="medium"
            sx={{
              "& .table-border > *:nth-child(n)": {
                fontSize: isResponsive ? "1.1vw" : "14px",
                fontWeight: "300",
                borderBottomStyle: "dashed !important",
                borderColor: "white",
                borderBottomWidth: "0.5px !important",
              },
              "& .table-border > *:nth-child(n+2)": {
                textAlign: "center",
                color: "white",
                height: isResponsive ? undefined : "30px",
              },
            }}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
              headCells={headCells}
              colSeparete={colSeparete}
              sectors={sectors}
              isResponsive={isResponsive}
            />

            <tbody style={{ color: "white", transform: "translateY(-23px)" }}>
              {stableSort(data, getComparator(order, orderBy)).map(
                (row, index) => {
                  const minMax = findMinMaxValues(data);

                  return (
                    <tr className="table-border">
                      {Object.keys(row).map((key, index) => {
                        if (key === "img") {
                          return <></>;
                        }

                        if (key === "description") {
                          return <></>;
                        }

                        const elIndex = headCells?.findIndex((el) => {
                          return el.id === key;
                        });

                        const color = headCells?.[elIndex]?.color;

                        return (
                          <>
                            {colSeparete?.indexOf(index) !== -1 ? (
                              <td style={{ width: "20px" }}></td>
                            ) : null}
                            <td
                              style={{
                                backgroundColor:
                                  index === 0
                                    ? undefined
                                    : adjustColorTransparency(
                                        row?.[key],
                                        minMax?.[key]?.[0],
                                        minMax?.[key]?.[1],
                                        color
                                      ),
                                borderRight: `2px solid rgb(0,40,80)`,
                              }}
                            >
                              {index === 0 ? (
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    cursor:
                                      row && "description" in row
                                        ? "pointer"
                                        : "default",
                                  }}
                                  onClick={() => {
                                    if (row && "description" in row) {
                                      setModalData({
                                        imgTop: row?.img,
                                        logo: row?.img,
                                        name: row?.[key],
                                        description:
                                          modalDataItemDescriptionRequest(
                                            key,
                                            row?.[key]
                                          ),
                                        descriptionFull: modalDataRequest(
                                          key,
                                          row?.[key]
                                        ),
                                      });
                                      handleOpen();
                                    }
                                  }}
                                >
                                  <img
                                    src={row?.img}
                                    alt="d"
                                    style={{
                                      width: "20px",
                                      height: isResponsive ? undefined : "20px",
                                      marginRight: "5px",
                                    }}
                                  />
                                  <span>{row?.[key]}</span>
                                </div>
                              ) : (
                                row?.[key]
                              )}
                            </td>
                          </>
                        );
                      })}
                    </tr>
                  );
                }
              )}
            </tbody>
          </Table>
        </div>
      </Sheet>
      <ModalComponent
        handleClose={handleClose}
        open={open}
        modalData={modalData}
      />
    </div>
  );
}
