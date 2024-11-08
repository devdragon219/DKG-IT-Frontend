import Link from "@mui/joy/Link";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { visuallyHidden } from "@mui/utils";
import Tooltip from "@mui/material/Tooltip";

import Box from "@mui/joy/Box";

export function EnhancedTableHead(props) {
  const {
    order,
    orderBy,
    onRequestSort,
    headCells,
    colSeparete,
    sectors,
    isResponsive,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const sectorsHeader = [];

  headCells.forEach((headCell, index) => {
    if (index === 0) {
      sectorsHeader.push(
        <th
          key={headCell.id}
          style={{
            width: index === 0 ? "20%" : headCell.widthCol,
            border: "none",
          }}
        ></th>
      );
    }

    const sectionLength = (color) => {
      let length = 0;
      headCells.forEach((item) => {
        if (item.color === color) {
          length++;
        }
      });
      return length;
    };

    if (colSeparete.indexOf(index) !== -1) {
      sectorsHeader.push(
        <th
          style={{
            width: "20px",
            border: "none",
          }}
        ></th>
      );
    }

    if (
      headCell?.color !== headCells[index - 1]?.color &&
      headCell?.color !== null
    ) {
      const sector = sectors.find((item) => item.color === headCell?.color);

      sectorsHeader.push(
        <th
          key={headCell.id}
          style={{
            border: "none",
            position: "relative",
            overflow: "visible",
          }}
          colSpan={sectionLength(headCell?.color)}
        >
          <div
            style={{
              color: sector?.color,
              fontFamily: `'FS Koopman',sans-serif`,
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "translateY(-23px)",
              fontSize: isResponsive ? "1.4vw" : undefined,
            }}
          >
            {sector?.name}
          </div>
        </th>
      );
    }
  });

  return (
    <thead style={{ color: "white", height: "52px" }}>
      <tr style={{ color: "white" }} className="table-border">
        {headCells.map((headCell, index) => {
          const active = orderBy === headCell.id;

          return (
            <>
              {colSeparete.indexOf(index) !== -1 ? (
                <th
                  style={{
                    width: "20px",
                  }}
                ></th>
              ) : null}
              <th
                key={headCell.id}
                style={{
                  width: isResponsive
                    ? undefined
                    : index === 0
                    ? "20%"
                    : headCell.widthCol,
                  borderBottomStyle: "dashed",
                  borderColor: "white",
                  borderWidth: "0.5px",
                }}
                aria-sort={
                  active
                    ? { asc: "ascending", desc: "descending" }[order]
                    : undefined
                }
              >
                <Tooltip title={headCell.label}>
                  <Link
                    underline="none"
                    color="neutral"
                    textColor={active ? headCell?.color : "white"}
                    component="button"
                    onClick={createSortHandler(headCell.id)}
                    fontWeight="lg"
                    startDecorator={
                      headCell.numeric ? (
                        <ArrowDownwardIcon
                          sx={{
                            display: active ? "block" : "none",
                            fontSize: isResponsive ? "1.2vw" : undefined,
                          }}
                        />
                      ) : null
                    }
                    endDecorator={
                      !headCell.numeric ? (
                        <ArrowDownwardIcon
                          sx={{
                            display: active ? "block" : "none",
                            fontSize: isResponsive ? "1.2vw" : undefined,
                          }}
                        />
                      ) : null
                    }
                    sx={{
                      "& svg": {
                        transition: "0.2s",
                        transform:
                          active && order === "desc"
                            ? "rotate(0deg)"
                            : "rotate(180deg)",
                      },

                      fontSize: "14px !important",
                      "&:hover": { "& svg": { display: "block" } },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: isResponsive ? "0.9vw" : "13px",
                        fontWeight: "300",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {headCell.label}
                    </Box>

                    {active ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </Link>
                </Tooltip>
              </th>
            </>
          );
        })}
      </tr>
      <tr
        style={{
          border: "none",
          position: "relative",
          top: "-60px",
          overflow: "visible",
        }}
      >
        {sectorsHeader}
      </tr>
    </thead>
  );
}
