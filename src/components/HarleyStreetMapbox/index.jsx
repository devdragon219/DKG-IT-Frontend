import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGtnLTI0IiwiYSI6ImNsc3VsNTd6eDF4c2oybG5zM2RmcjJ6Z3EifQ.XKL22ONswQ5EZiNiq-zLSg";

const HarleyStreetMapbox = (props) => {
  const markerData = props?.data?.originalData?.markers;
  const markerSize = props?.data?.originalData?.markerSize || 1;
  const markerColor = props?.data?.originalData?.markerColor || "#3FB1CE";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markers = useRef([]);

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [-0.146273, 51.51784],
        zoom: 16.8,
        pitch: 70,
        bearing: -15,
      });

      // map.current.on("load", () => {
      //   const markers = [

      //   ];

      //   markers.forEach((marker) => {
      //     const popup = new mapboxgl.Popup({ offset: 25 }).setText(
      //       marker.popupText
      //     );

      //     new mapboxgl.Marker()
      //       .setLngLat(marker.coordinates)
      //       .setPopup(popup)
      //       .addTo(map.current);
      //   });
      // });

      map.current.on("load", () => {
        initializeMarkers();

        map.current.on("zoom", updateMarkerVisibility);
      });
    }

    return () => {
      map.current.off("zoom", updateMarkerVisibility);
      map.current.remove();
    };
  }, []);

  const initializeMarkers = () => {
    markerData.forEach((marker) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        marker.popupText
      );
      const newMarker = new mapboxgl.Marker({
        color: markerColor,
        scale: markerSize,
      })
        .setLngLat(marker.coordinates)
        .setPopup(popup);
      markers.current.push(newMarker);
    });
  };

  const updateMarkerVisibility = () => {
    const zoomLevel = map.current.getZoom();

    markers.current.forEach((marker) => {
      if (zoomLevel >= 12) {
        marker.addTo(map.current);
      } else {
        marker.remove();
      }
    });
  };

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
};

export default HarleyStreetMapbox;
