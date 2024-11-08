/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";

import {
  FormControlLabel,
  FormGroup,
  Grid,
  Slider,
  Switch,
} from "@mui/material";
import { setMockData } from "../../store/item";
import { useDispatch } from "react-redux";

import TreeDesigner from "../TreeDesigner";

const TreeDesignerWrapper = ({ isEditMode, data }) => {
  const dispatch = useDispatch();

  const [jsonData, setJsonData] = useState(data.originalData.data || null);
  const [startPoint, setStartPoint] = useState(
    data.originalData?.startPoint || null
  );
  const [position, setPosition] = useState(
    data?.originalData?.position || { x: 16, y: 280 }
  );
  const [isHorisontal, setIsHorisontal] = useState(
    data?.originalData?.isHorisontal === false ? false : true
  );
  const [zoom, setZoom] = useState(data?.originalData?.zoom || 0.1);

  const [nodeSizeX, setNodeSizeX] = useState(
    data?.originalData?.nodeSizeX || 1300
  );
  const [nodeSizeY, setNodeSizeY] = useState(
    data?.originalData?.nodeSizeY || 50
  );

  const nodeSize = useMemo(() => {
    return { x: nodeSizeX, y: nodeSizeY };
  }, [nodeSizeX, nodeSizeY]);

  const handlePositionUpdate = (newPosition) => {
    if (isEditMode) {
      setZoom(newPosition.zoom);
      setPosition(newPosition.translate);
    }
  };

  useEffect(() => {
    if (isEditMode) {
      dispatch(
        setMockData(
          JSON.stringify({
            originalData: {
              zoom,
              position,
              nodeSizeX,
              nodeSizeY,
              data: jsonData,
              startPoint,
              isHorisontal,
            },
          })
        )
      );
    }
  }, [zoom, position, nodeSizeX, nodeSizeY, startPoint, isHorisontal]);

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        marginBottom: "10px",
        backgroundColor: "transparent",
      }}
    >
      {isEditMode && nodeSize ? (
        <>
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={4}>
              <span>Edge Size Y</span>
              <Slider
                aria-label="Temperature"
                valueLabelDisplay="auto"
                value={nodeSizeY}
                onChange={(e) => setNodeSizeY(e.target.value)}
                step={10}
                marks
                min={10}
                max={2000}
              />
            </Grid>
            <Grid item xs={4}>
              <span>Edge Size X</span>
              <Slider
                aria-label="Temperature"
                valueLabelDisplay="auto"
                value={nodeSizeX}
                onChange={(e) => setNodeSizeX(e.target.value)}
                step={10}
                marks
                min={10}
                max={2000}
              />
            </Grid>
            <Grid item xs={2}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isHorisontal}
                      onChange={(event) => {
                        setIsHorisontal(event.target.checked);
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Is Horisontal"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </>
      ) : (
        <></>
      )}

      <TreeDesigner
        startPoint={startPoint}
        position={position}
        zoomJson={zoom}
        dataProps={jsonData}
        nodeSize={nodeSize}
        handlePositionUpdate={handlePositionUpdate}
        isHorisontal={isHorisontal}
      />
    </div>
  );
};

export default TreeDesignerWrapper;
