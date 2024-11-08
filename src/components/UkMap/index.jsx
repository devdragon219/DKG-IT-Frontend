import React from "react";
import { useEffect } from "react";
import Konva from "konva";
import {
  UK_MAP_UI,
  city_value,
  colours,
  coordinates_for_display_name,
  country_value,
  map_data,
} from "./constant.js";

const ukMapHtml = { __html: UK_MAP_UI };

const UkMap = (props) => {
  let point_x, point_y;
  let stage;
  let layer;
  let selected_country = null;
  const { data } = props || {};
  const originalData = data?.originalData?.data;
  const countryValue = originalData?.countries || {};
  const cityValues = originalData?.cities || {};
  const headerText = originalData?.headerText || "";
  const headerFontColor = originalData?.headerFontColor || "#d0d2d6";
  const mapBackgroundColor = originalData?.mapBackgroundColor || "#283046";
  const pageBackgroundColor =
    originalData?.pageBackgroundColor || "transparent";

  function fitMapIntoParentContainer() {
    const container = document.querySelector("#map-parent");

    // now we need to fit stage into parent
    const containerWidth = container?.offsetWidth;
    const containerHeight = container?.offsetHeight;
    // to do this we need to scale the stage
    const scale1 = containerWidth / 580;
    const scale2 = containerHeight / 920;
    const scale = Math.min(scale1, scale2);

    stage.width(580 * scale);
    stage.height(920 * scale);
    stage.scale({ x: scale, y: scale });
    layer.draw();
  }

  function select_all_parts(stage, layer, name, colour, full_name) {
    if (selected_country == null || selected_country !== full_name) {
      if (selected_country != null) {
        let prev_shapes = stage.find(
          "." + selected_country.replaceAll(" ", "")
        );
        prev_shapes.forEach(function (shape) {
          shape.fill(colours[selected_country]);
        });
      }
      point_x = coordinates_for_display_name[full_name]["X"];
      point_y = coordinates_for_display_name[full_name]["Y"];
      selected_country = full_name;
      let shapes = stage.find("." + name);
      shapes.forEach(function (shape) {
        shape.fill(colour);
      });
    }
  }

  function draw_iframe_uk_map() {
    stage = new Konva.Stage({
      container: "map",
      width: 540,
      height: 830,
    });
    layer = new Konva.Layer();
    let min_x = 1000000;
    let min_y = 1000000;
    for (let i = 0; i < map_data["polygons"].length; i++) {
      let colour_to_fill =
        colours[map_data["polygons"][i]["properties"]["name"]];
      let name_to_fill = map_data["polygons"][i]["properties"]["name"];
      let coords_obj = JSON.parse(map_data["polygons"][i].geometry);
      if (coords_obj.type === "Polygon") {
        let points = [];
        let coords_array = coords_obj.coordinates[0];
        for (let j = 0; j < coords_array.length; j++) {
          let calculated_coords = coordinatesToPixels(
            coords_array[j][0],
            coords_array[j][1],
            18000,
            18000
          );
          min_x = Math.min(min_x, calculated_coords[0]);
          min_y = Math.min(min_y, calculated_coords[1]);
          points.push(calculated_coords[0] - 8560);
          points.push(calculated_coords[1] - 5300);
        }

        let polygon = new Konva.Line({
          points: points,
          fill: colour_to_fill,
          stroke: "transparent",
          strokeWidth: 1,
          closed: true,
          name: name_to_fill.replaceAll(" ", ""),
        });
        let text = new Konva.Text({
          x: points[0],
          y: points[1],
          text: "" + name_to_fill + ":" + getValueByKeyCountry(name_to_fill),
          fontSize: 28,
          fontStyle: "bold",
          fill: "#000",
          visible: false,
        });
        let rect = new Konva.Rect({
          x: points[0] - 5,
          y: points[1] - 5,
          cornerRadius: 2,
          width: text.textWidth + 20,
          height: text.textHeight + 5,
          fill: "#fff",
          visible: false,
          name: "text_" + name_to_fill.replaceAll(" ", ""),
        });
        polygon.on("mouseover", function () {
          //polygon.fill('#6E90FE');
          select_all_parts(
            stage,
            layer,
            name_to_fill.replaceAll(" ", ""),
            "#90909a",
            name_to_fill
          );
          text.attrs.x = point_x;
          text.attrs.y = point_y;
          rect.attrs.x = point_x - 5;
          rect.attrs.y = point_y - 5;
          text.visible(true);
          rect.visible(true);
          rect.moveToTop();
          text.moveToTop();
          layer.draw();
        });
        polygon.on("mouseout", function () {
          //polygon.fill(colour_to_fill);
          select_all_parts(
            stage,
            layer,
            name_to_fill.replaceAll(" ", ""),
            colour_to_fill,
            name_to_fill
          );
          text.visible(false);
          rect.visible(false);
          layer.draw();
        });

        layer.add(polygon);
        layer.add(rect);
        layer.add(text);
      } else if (coords_obj.type === "MultiPolygon") {
        let name_to_fill = map_data["polygons"][i]["properties"]["name"];
        let colour_to_fill =
          colours[map_data["polygons"][i]["properties"]["name"]];
        let polygons = coords_obj.coordinates;
        for (let k = 0; k < polygons.length; k++) {
          for (let j = 0; j < polygons[k].length; j++) {
            let points = [];
            for (let n = 0; n < polygons[k][j].length; n++) {
              let calculated_coords = coordinatesToPixels(
                polygons[k][j][n][0],
                polygons[k][j][n][1],
                18000,
                18000
              );
              min_x = Math.min(min_x, calculated_coords[0]);
              min_y = Math.min(min_y, calculated_coords[1]);
              points.push(calculated_coords[0] - 8560);
              points.push(calculated_coords[1] - 5300);
            }
            let polygon = new Konva.Line({
              points: points,
              fill: colour_to_fill,
              stroke: "transparent",
              strokeWidth: 1,
              closed: true,
              name: name_to_fill.replaceAll(" ", ""),
            });
            let text = new Konva.Text({
              x: points[0],
              y: points[1],
              text:
                "" + name_to_fill + ":" + getValueByKeyCountry(name_to_fill),
              fontSize: 28,
              fontStyle: "bold",
              fill: "#000",
              visible: false,
            });
            let rect = new Konva.Rect({
              x: points[0] - 5,
              y: points[1] - 5,
              cornerRadius: 2,
              width: text.textWidth + 20,
              height: text.textHeight + 5,
              fill: "#fff",
              visible: false,
              name: "text_" + name_to_fill.replaceAll(" ", ""),
            });
            polygon.on("mouseover", function () {
              //polygon.fill('#6E90FE');
              select_all_parts(
                stage,
                layer,
                name_to_fill.replaceAll(" ", ""),
                "#90909a",
                name_to_fill
              );
              text.attrs.x = point_x;
              text.attrs.y = point_y;
              rect.attrs.x = point_x - 5;
              rect.attrs.y = point_y - 5;
              text.visible(true);
              rect.visible(true);
              rect.moveToTop();
              text.moveToTop();
              layer.draw();
            });
            polygon.on("mouseout", function () {
              //polygon.fill(colour_to_fill);
              select_all_parts(
                stage,
                layer,
                name_to_fill.replaceAll(" ", ""),
                colour_to_fill,
                name_to_fill
              );
              text.visible(false);
              rect.visible(false);
              layer.draw();
            });

            layer.add(polygon);
            layer.add(rect);
            layer.add(text);
          }
        }
      }
    }
    const cityNames = Object.keys(cityValues);
    for (let i = 0; i < map_data["points"].length; i++) {
      if (cityNames.includes(map_data["points"][i]["name"])) {
        let calculated_coords = coordinatesToPixels(
          parseFloat(map_data["points"][i]["lon"]),
          parseFloat(map_data["points"][i]["lat"]),
          18000,
          18000
        );
        let radius = 5;
        if (map_data["points"][i]["name"] == "London") {
          radius = 15;
        }
        let circle = new Konva.Circle({
          x: calculated_coords[0] - 8560,
          y: calculated_coords[1] - 5300,
          radius: radius,
          fill: "#ff4996",
          stroke: "grey",
          strokeWidth: 1,
          name: map_data["points"][i]["name"],
        });
        let text = new Konva.Text({
          x: calculated_coords[0] - 8600,
          y: calculated_coords[1] - 5325,
          text:
            "" +
            map_data["points"][i]["name"] +
            ":" +
            getValueByKey(map_data["points"][i]["name"]),
          fontSize: 24,
          fill: "#000",
          visible: false,
        });
        let rect = new Konva.Rect({
          x: calculated_coords[0] - 8605,
          y: calculated_coords[1] - 5330,
          cornerRadius: 2,
          width: text.textWidth + 20,
          height: text.textHeight + 5,
          fill: "#fff",
          visible: false,
          name: "" + map_data["points"][i]["name"],
        });
        circle.on("mouseover", function () {
          circle.fill("#90909a");
          if (map_data["points"][i]["name"] == "Southend-on-Sea") {
            text.attrs.x = text.attrs.x - 50;
            text.attrs.y = text.attrs.y;
            rect.attrs.x = rect.attrs.x - 50;
            rect.attrs.y = rect.attrs.y;
          }
          text.visible(true);
          rect.visible(true);
          rect.moveToTop();
          text.moveToTop();
          layer.draw();
        });
        circle.on("mouseout", function () {
          circle.fill("#ff4996");
          rect.visible(false);
          text.visible(false);
          layer.draw();
        });
        circle.on("mousedown", function () {
          //    draw_first_uk_map_chart(map_data["points"][i]["name"]);
          //    draw_second_uk_map_chart(map_data["points"][i]["name"]);
          //    draw_third_uk_map_chart(name_to_fill);
          //    if (map_data["points"][i]["name"] == "London") {
          //        show_parameters("London");
          //    }
        });
        text.on("mousedown", function () {
          //    draw_first_uk_map_chart(map_data["points"][i]["name"]);
          //    draw_second_uk_map_chart(map_data["points"][i]["name"]);
          //    draw_third_uk_map_chart(name_to_fill);
          //    if (map_data["points"][i]["name"] == "London") {
          //        show_parameters("London");
          //    }
        });
        layer.add(circle);
        layer.add(rect);
        layer.add(text);
      }
    }
    stage.add(layer);
    stage.on("mousemove", function (e) {
      const position = stage.getPointerPosition();
      const shape = stage.getIntersection(position);
      if (!shape && selected_country) {
        // Mouse is currently over a polygon
        selected_country = null;
        draw_iframe_uk_map();
      }
    });
    fitMapIntoParentContainer();
    // $(window).on('resize', fitMapIntoParentContainer);
    window.addEventListener("resize", fitMapIntoParentContainer);
  }

  function getValueByKey(key) {
    // Convert the input key to lowercase for case-insensitive matching
    const lowercaseKey = key.toLowerCase();

    // Iterate through the keys in the dictionary
    for (let dictKey in cityValues) {
      // Convert the current dictionary key to lowercase
      let lowercaseDictKey = dictKey.toLowerCase();

      // Check if the lowercase key matches the lowercase dictionary key
      if (lowercaseKey === lowercaseDictKey) {
        // If it's a match, return the corresponding value
        return cityValues[dictKey];
      }
    }

    // If no match is found, return null or an error
    return 0;
  }

  function getValueByKeyCountry(key) {
    // Convert the input key to lowercase for case-insensitive matching
    const lowercaseKey = key.toLowerCase();

    // Iterate through the keys in the dictionary
    for (let dictKey in countryValue) {
      // Convert the current dictionary key to lowercase
      let lowercaseDictKey = dictKey.toLowerCase();

      // Check if the lowercase key matches the lowercase dictionary key
      if (lowercaseKey === lowercaseDictKey) {
        // If it's a match, return the corresponding value
        return countryValue[dictKey];
      }
    }

    // If no match is found, return null or an error
    return 0;
  }

  function coordinatesToPixels(lng, lat, mapWidth, mapHeight) {
    const x = (lng + 180) * (mapWidth / 360);
    const latRad = (lat * Math.PI) / 180;
    const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
    const y = mapHeight / 2 - (mapWidth * mercN) / (2 * Math.PI);
    return [x, y];
  }

  useEffect(() => {
    draw_iframe_uk_map();
    const headerElement = document.getElementById("head-text");
    headerElement.innerHTML =
      headerText || "Visual Overview of AI Company Headquarters Across the UK";
    headerElement.style.color = headerFontColor;

    const ukMapPage = document.getElementById("uk-map-page");
    ukMapPage.style.backgroundColor = pageBackgroundColor;

    const ukMapCard = document.getElementById("uk-map-card");
    ukMapCard.style.backgroundColor = mapBackgroundColor;
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={ukMapHtml} />
    </>
  );
};

export default UkMap;
