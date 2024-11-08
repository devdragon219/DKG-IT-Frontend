import { Popover } from "@mui/material";
import { useState } from "react";

export const NodeComponent = ({ nodeData, foreignObjectProps, year }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { attributes, name, classes, children } = nodeData;

  return (
    <g
      className={`rd3t-node ${
        classes === "future" ? "node__branch__future" : "node__branch"
      } ${
        parseInt(attributes?.year) === parseInt(year)
          ? "node__branch__current"
          : ""
      }`}
      onClick={(event) => {
        if (anchorEl !== null && anchorEl === event.currentTarget) {
          setAnchorEl(null);
        } else {
          setAnchorEl(event.currentTarget);
        }
      }}
    >
      <circle r="15"></circle>
      {children?.length > 0 ? (
        <foreignObject {...foreignObjectProps}>
          <div>
            <h3 style={{ textAlign: "center" }}>{name}</h3>
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <div style={{maxWidth: '300px',
              padding: '16px',
              fontFamily: 'Arial, Helvetica, sans-serif'
            }}>
              <div style={{
                borderBottom: '1px solid #ccc',
                paddingBottom: '5px',
                marginBottom: '5px'
              }}>{name}</div>
              <div
              style={{fontSize: '12px'}}>
                {name} is aliquid animi assumenda at consectetur delectus deserunt dolor dolore.
              </div>
            </div>
          </Popover>
        </foreignObject>
      ) : (
        <foreignObject {...foreignObjectProps} x={25} y={-25}>
          <div className={"node__label"}>
            <h3 style={{ margin: 0 }}>{name}</h3>
            <span>{attributes?.year}</span>
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <div style={{maxWidth: '300px',
              padding: '16px',
              fontFamily: 'Arial, Helvetica, sans-serif'
            }}>
              <div style={{
                borderBottom: '1px solid #ccc',
                paddingBottom: '5px',
                marginBottom: '5px'
              }}>{name}</div>
              <div
                  style={{fontSize: '12px'}}>
                {name} is aliquid animi assumenda at consectetur delectus deserunt dolor dolore.
              </div>
            </div>
          </Popover>
        </foreignObject>
      )}
    </g>
  );
};
