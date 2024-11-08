import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Select, MenuItem, Typography } from "@mui/material";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGtnLTI0IiwiYSI6ImNsc3VsNTd6eDF4c2oybG5zM2RmcjJ6Z3EifQ.XKL22ONswQ5EZiNiq-zLSg";

const BuildingsMap3D = (props) => {
  let map;
  const center = props?.data?.originalData?.center;
  const zoom = props?.data?.originalData?.zoom;
  const pitch = props?.data?.originalData?.pitch;
  const bearing = props?.data?.originalData?.bearing;
  const buildingData = props?.data?.originalData?.buildingData;
  const otherBuildingColor =
    props?.data?.originalData?.otherBuildingColor || "#aaa";

  const buildingIdsToColor = [];
  const buildingColors = {};

  buildingData.forEach((building) => {
    buildingIdsToColor.push(building.buildingId);
    buildingColors[building.buildingId] = building.color;
  });

  useEffect(() => {
    map = new mapboxgl.Map({
      style: "mapbox://styles/mapbox/light-v10",
      center: center,
      zoom: zoom,
      pitch: pitch,
      bearing: bearing,
      container: "map",
      antialias: true,
    });

    map.on("load", () => {
      map.addLayer(
        {
          id: "3d-buildings",
          source: "composite",
          "source-layer": "building",
          type: "fill-extrusion",
          minzoom: 14,
          paint: {
            "fill-extrusion-color": [
              "match",
              ["id"],
              ...buildingIdsToColor.reduce((acc, id) => {
                acc.push(id);
                acc.push(buildingColors[id]);
                return acc;
              }, []),
              otherBuildingColor,
            ],
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
            "fill-extrusion-opacity": 0.8,
          },
        },
        "road-label"
      );

      map.on("click", function (e) {
        let features = map.queryRenderedFeatures(e.point, {
          layers: ["3d-buildings"],
        });
        console.log(features[0].id);

        if (!features.length) {
          return;
        }
        const clickedBuildingId = features[0].id;
        const clickedBuildingData = buildingData.find(
          (building) => building.buildingId === clickedBuildingId
        );

        if (clickedBuildingData) {
          new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML("<p>" + clickedBuildingData.popupText + "<p>")
            .addTo(map);
        }
      });
    });

    return () => map.remove();
  });

  return <div id="map" style={{ width: "100%", height: "100vh" }} />;
};

export default BuildingsMap3D;
