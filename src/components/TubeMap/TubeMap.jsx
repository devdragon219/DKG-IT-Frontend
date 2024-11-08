import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import * as d3 from 'd3';
import * as d3tube from 'd3-tube-map';
import 'd3-tube-map';
import { ModalComponent } from "./ModalComponent";
import Button from "@mui/material/Button";

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    position: "relative",
    border: "1px solid #ccc",
    background: "#fff",
    fontFamily: "system-ui",
  }
}));

const TubeMapAlternative = (props) => {
  const classes = useStyles();
  const data = props?.data?.originalData?.data;
  const copiedData = JSON.parse(JSON.stringify(data));
  const childrenData = copiedData.children;
  const [currentStations, setCurrentStations] = useState(childrenData);
  const [isAlternativeData, setIsAlternativeData] = useState(false);
  
  const handleButtonClick = () => {
    const newStations = isAlternativeData ? childrenData : copiedData.childrenAlternative;
    setCurrentStations(newStations);
    setIsAlternativeData(!isAlternativeData);
  };
  

  const [modalData, setModalData] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    handleModalState(false);
  };

  const width = data?.width || 400;
  const height = data?.height || 300;

  const updateBtnName = data?.updateBtnName || "Update Map";

  const svgRef = useRef();

  const handleModalState = (isOpen) => {
    const svg = d3.select(svgRef.current).select('svg');
    const zoom = d3.zoom();

    if (isOpen) {
      zoom.scaleExtent([0.5, 6]).on('zoom', (event) => {
        svg.select('g').attr('transform', event.transform.toString());
      });

      svg.call(zoom);
    } else {
      svg.on('.zoom', null);
    }
  };

  useEffect(() => {
    d3.selectAll("#svg").remove();
  
    const svg = d3.select(svgRef.current).append('svg').attr("id", "svg")
      .attr('width', '100%')
      .attr('height', '100vh');
  
    const map = d3tube
      .tubeMap()
      .width(width)
      .height(height)
      .on('click', (name) => {
        const stationData = currentStations.stations[name];
        if (stationData && (stationData.description || stationData.imgTop || stationData.logo)) {
          const { label, description, imgTop, logo } = stationData;
          setModalData({
            imgTop: imgTop,
            logo: logo,
            name: label,
            description: description,
          });
          handleOpen();
        }
      });
  
    svg.datum(currentStations).call(map);
    handleModalState(true);
  
    return () => {
      svg.on('.zoom', null);
    };
  }, [currentStations, width, height, isAlternativeData]);
  

  const legendItems = data?.legendItems || [];

  const legend = legendItems.map((item, index) => (
    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <div style={{ width: '10px', height: '10px', backgroundColor: item.color, marginRight: '5px' }}></div>
      <span>{item.label}</span>
    </div>
  ));

  return (
    <Box className={classes.wrapper}>
      <div ref={svgRef}></div>
      <ModalComponent
        handleClose={handleClose}
        open={open}
        modalData={modalData}
      />

      {copiedData.childrenAlternative && (
        <Box sx={{ position: 'absolute', maxWidth: "300px", top: '20px', left: '20px', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)' }}>
          <Button onClick={handleButtonClick}>{updateBtnName}</Button>
        </Box>
      )}

      {legendItems.length > 0 && (
        <Box sx={{ position: 'absolute', maxWidth: "300px", bottom: '20px', left: '20px', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)' }}>
          {legend}
        </Box>
      )}
    </Box>
  );
};

export default TubeMapAlternative;
