import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Select, MenuItem, Typography } from "@mui/material";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGtnLTI0IiwiYSI6ImNsc3VsNTd6eDF4c2oybG5zM2RmcjJ6Z3EifQ.XKL22ONswQ5EZiNiq-zLSg";

const HarleyStreetMap3D = (props) => {
  const markerLabelTitle = props?.data?.originalData?.markerLabelTitle;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markerInstances = useRef([]);
  const markersGroups = props?.data?.originalData?.markersGroups;
  const [selectedMarkersGroup, setSelectedMarkersGroup] = useState(null);
  const center = props?.data?.originalData?.center;
  const pitch = props?.data?.originalData?.picth;
  const zoom = props?.data?.originalData?.zoom;
  const bearing = props?.data?.originalData?.bearing;
  // const mapStyle =
  //   props?.data?.originalData?.mapStyle ||
  //   "mapbox://styles/dkg-24/clt3n0z4700f101qpcmtp6zyh";

  const buldingsColor = props?.data?.originalData?.buldingsColor || "#FFF";

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        //style: mapStyle,
        center: center || [-0.146273, 51.51784],
        zoom: zoom || 16.8,
        pitch: pitch || 70,
        bearing: bearing || -15,
      });

      map.current.on("style.load", () => {
        map.current.setConfigProperty("basemap", "lightPreset", "dusk");
      });

      map.current.on("load", () => {
        // Load default markers initially
        if (mapStyle !== "mapbox://styles/dkg-24/clt3n0z4700f101qpcmtp6zyh") {
          map.current.addLayer({
            id: "3d-buildings",
            source: "composite",
            "source-layer": "building",
            type: "fill-extrusion",
            minzoom: 14,
            paint: {
              "fill-extrusion-color": buldingsColor,
              "fill-extrusion-height": [
                "interpolate",
                ["linear"],
                ["zoom"],
                15,
                0,
                15.05,
                ["get", "height"],
              ],
              "fill-extrusion-base": [
                "interpolate",
                ["linear"],
                ["zoom"],
                15,
                0,
                15.05,
                ["get", "min_height"],
              ],
              "fill-extrusion-opacity": 1,
            },
          });
        }
        if (markersGroups) {
          const groups = Object.keys(markersGroups);
          if (groups.length > 0) {
            setSelectedMarkersGroup(groups[0]); // Select the first marker group by default
          }
        }
      });
    }

    return () => {
      map.current.off("load");
    };
  }, [markersGroups]);

  useEffect(() => {
    if (selectedMarkersGroup && markersGroups) {
      addMarkersToMap(markersGroups[selectedMarkersGroup]);
    }
  }, [selectedMarkersGroup]);

  const addMarkersToMap = (markers) => {
    removeMarkersFromMap();

    markers.forEach((marker) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        marker.popupText
      );
      const markerInstance = new mapboxgl.Marker({
        color: marker?.markerColor,
        scale: marker?.markerSize,
      })
        .setLngLat(marker.coordinates)
        .setPopup(popup)
        .addTo(map.current);

      markerInstance.getElement().addEventListener("click", () => {
        if (props?.handleClick) {
          props?.handleClick(marker?.markerName);
        }
      });
      markerInstances.current.push(markerInstance);
    });
  };

  const removeMarkersFromMap = () => {
    markerInstances.current.forEach((markerInstance) => {
      markerInstance.remove();
    });
    markerInstances.current = [];
  };

  const handleSelectChange = (event) => {
    const selectedGroup = event.target.value;
    setSelectedMarkersGroup(selectedGroup);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          zIndex: 2,
          backgroundColor: "#ffffff",
          padding: "1vw",
          borderRadius: "2px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          style={{ fontSize: "1vw", color: "#000000" }}
        >
          {markerLabelTitle}
        </Typography>
        <Select
          value={selectedMarkersGroup}
          onChange={handleSelectChange}
          style={{
            width: "100%",
            fontSize: "1vw",
            backgroundColor: "#ffffff",
            color: "#000000",
          }}
        >
          {markersGroups &&
            Object.keys(markersGroups).map((group) => (
              <MenuItem key={group} value={group}>
                {group}
              </MenuItem>
            ))}
        </Select>
      </div>
      <div
        ref={mapContainer}
        style={{ width: "100%", height: "100%", zIndex: 1 }}
      />
    </div>
  );
};

export default HarleyStreetMap3D;
