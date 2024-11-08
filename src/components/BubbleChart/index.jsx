import React, { useEffect, useRef } from 'react';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import * as d3 from 'd3';


const useStyles = makeStyles({
  wrapper: {
    width: "100%", 
    height: "100vh",
    position: "relative",
    fontFamily: "system-ui",
  },
  hovered: {
    transition: "stroke 0.3s ease-out, stroke-width 0.3s ease-out",
  },
  bubbles: {
    strokeWidth: "1px",
    stroke: "black",
    opacity: .8
  },
  'bubbles:hover': {
    stroke: "black",
  }
});

const BubbleChart = (props) => {
  const svgRef = useRef();
  const classes = useStyles();
  const dataProps = props?.data?.originalData?.data;
  const data = dataProps?.children;
  const Ylabel = dataProps?.Ylabel;
  const Xlabel = dataProps?.Xlabel;
  const title = dataProps?.title;
  const fontSizeTitle = dataProps?.fontSizeTitle || "1em";

  const colorTitle = dataProps?.colorTitle || "#3993E1";
  const colorAxis = dataProps?.colorAxis || "#3993E1";

  const categoryList = dataProps?.categoryList;

  const selectedTheme = props.selectedTheme;

  const colorRangeStart =
    dataProps?.colorRangeStart !== undefined
    ? dataProps?.colorRangeStart
    : selectedTheme
    ? selectedTheme.barColor1
    : "#3993E1";
    
  const colorRangeFinish =
    dataProps?.colorRangeFinish !== undefined
    ? dataProps?.colorRangeFinish
    : selectedTheme
    ? selectedTheme.barColor2
    : "#03294A";

    const generateColors = (dataLength, startColor, endColor) => {
      const color = d3
        .scaleLinear()
        .range([startColor, endColor])
        .domain([0, dataLength]);
      return Array.from({ length: dataLength }, (_, index) => color(index));
    };

    let minXValue = data[0].xValue;
    let maxXValue = data[0].xValue;
    let minYValue = data[0].yValue;
    let maxYValue = data[0].yValue;

    let minScaleBubbleValue = data[0].pop;
    let maxScaleBubbleValue = data[0].pop;
    
    data.forEach(item => {
      minXValue = Math.min(minXValue, item.xValue);
      maxXValue = Math.max(maxXValue, item.xValue);
      minYValue = Math.min(minYValue, item.yValue);
      maxYValue = Math.max(maxYValue, item.yValue);
      minScaleBubbleValue = Math.min(minScaleBubbleValue, item.pop);
      maxScaleBubbleValue = Math.max(maxScaleBubbleValue, item.pop);
    });

    let intMinXValue = Math.floor(minXValue);
    let intMinYValue = Math.floor(minYValue);
    let intmaxXValue = Math.ceil(maxXValue);
    let intmaxYValue = Math.ceil(maxYValue);

    let intMinScaleBubbleValue = Math.floor(minScaleBubbleValue);
    let intMaxScaleBubbleValue = Math.ceil(maxScaleBubbleValue);

    const rangeScaleStart = dataProps?.rangeScaleStart || 2;
    const rangeScaleFinish = dataProps?.rangeScaleFinish || 30;

  useEffect(() => {


    const widthProps = dataProps?.width || svgRef.current.parentElement.clientWidth;
    const heightProps = dataProps?.height || svgRef.current.parentElement.clientHeight;

    const margin = { top: 80, right: 150, bottom: 60, left: 30 },
      width = widthProps - margin.left - margin.right,
      height = heightProps - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

      // Add X axis
      const x = d3.scaleLinear()
        .domain([intMinYValue, intmaxYValue])
        .range([0, width]);

      const xAxis = svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x).ticks(3));

      xAxis.selectAll('path, line')
        .attr('stroke', colorAxis);
      
      xAxis.selectAll('text')
        .attr('fill', colorAxis);

      // Add X axis label
      svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height + 50)
        .attr("fill", colorAxis)
        .text(Xlabel);

      // Add Y axis
      const y = d3.scaleLinear()
        .domain([intMinXValue, intmaxXValue])
        .range([height, 0]);
      
      const yAxis = svg.append("g")
        .call(d3.axisLeft(y));

        yAxis.selectAll('path, line')
        .attr('stroke', colorAxis);
      
      yAxis.selectAll('text')
        .attr('fill', colorAxis);

      // Add Y axis label
      svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", 0)
        .attr("y", -20)
        .attr("fill", colorAxis)
        .text(Ylabel)
        .attr("text-anchor", "start")


      // Add a scale for bubble size
      const z = d3.scaleSqrt()
        .domain([intMinScaleBubbleValue, intMaxScaleBubbleValue])
        .range([rangeScaleStart, rangeScaleFinish]);

          let colorScale;

          const categoryColors = new Map(categoryList.map(item => [item.category, item.categoryColor]));
          const hasCategoryColor = categoryList.some(item => item.categoryColor !== undefined);

          if (hasCategoryColor) {
           colorScale = d3.scaleOrdinal()
            .domain(data.map(d => d.category))
            .range(data.map(d => categoryColors.get(d.category)));
          } else {
           colorScale = d3.scaleOrdinal()
            .domain(data.map(d => d.category))
            .range(generateColors(categoryList.length, colorRangeStart, colorRangeFinish)); 
          }

      // -1- Create a tooltip div that is hidden by default:
      const tooltip = d3.select("#my_dataviz")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "black")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("color", "white")

      // -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
      const showTooltip = function (event, d) {
        tooltip
          .transition()
          .duration(200)
        tooltip
          .style("opacity", 1)
          .html(d.description)
          .style("left", (event.x) / 2 + "px")
          .style("top", (event.y) / 2 - 50 + "px")
      }
      const moveTooltip = function (event, d) {
        tooltip
          .style("left", (event.x) / 2 + "px")
          .style("top", (event.y) / 2 - 50 + "px")
      }
      const hideTooltip = function (event, d) {
        tooltip
          .transition()
          .duration(200)
          .style("opacity", 0)
      }

      // What to do when one group is hovered
      const highlight = function (event, d) {
        // reduce opacity of all groups
        d3.selectAll(".bubbles").style("opacity", .05)
        // expect the one that is hovered
        d3.selectAll("." + d).style("opacity", 1)
      }

      // And when it is not hovered anymore
      const noHighlight = function (event, d) {
        d3.selectAll(".bubbles").style("opacity", 1)
      }


      svg
      .append('g')
      .selectAll("dot")
      .data(data)
      .data(data)
      .join("circle")
      .attr("class", d => `bubbles ${d.category}`)
      .attr("cx", d => x(d.yValue))
      .attr("cy", d => y(d.xValue))
      .attr("r", d => z(d.pop))
      .style("fill", d => colorScale(d.category))
        // -3- Trigger the functions for hover
        .on("mouseover", showTooltip )
        .on("mousemove", moveTooltip )
        .on("mouseleave", hideTooltip )



  // ---------------------------//
  //       LEGEND              //
  // ---------------------------//

  // Add legend: circles
  const valuesToShow = [10000000, 100000000, 1000000000]
  const xCircle = 390
  const xLabel = 440
  svg
    .selectAll("legend")
    .data(valuesToShow)
    .join("circle")
      .attr("cx", xCircle)
      .attr("cy", d => height - 100 - z(d))
      .attr("r", d => z(d))
      .style("fill", "none")
      .attr("stroke", "black")

  // Add legend: segments
  svg
    .selectAll("legend")
    .data(valuesToShow)
    .join("line")
      .attr('x1', d => xCircle + z(d))
      .attr('x2', xLabel)
      .attr('y1', d => height - 100 - z(d))
      .attr('y2', d => height - 100 - z(d))
      .attr('stroke', 'black')
      .style('stroke-dasharray', ('2,2'))

  // Add legend: labels
  svg
    .selectAll("legend")
    .data(valuesToShow)
    .join("text")
      .attr('x', xLabel)
      .attr('y', d => height - 100 - z(d))
      .text( d => d/1000000)
      .style("font-size", 10)
      .attr('alignment-baseline', 'middle')

  // Legend title
  svg.append("text")
    .attr('x', xCircle)
    .attr("y", height - 100 +30)
    .text("Population (M)")
    .attr("text-anchor", "middle")

  // Add one dot in the legend for each name.
  const size = 20
  const allgroups = categoryList.map(item => item.category);
  svg.selectAll("myrect")
    .data(allgroups)
    .join("circle")
      .attr("cx", 390)
      .attr("cy", (d,i) => 10 + i*(size+5)) // 100 is where the first dot appears. 25 is the distance between dots
      .attr("r", 7)
      .style("fill", d =>  colorScale(d))
      .on("mouseover", highlight)
      .on("mouseleave", noHighlight)

  // Add labels beside legend dots
  svg.selectAll("mylabels")
    .data(allgroups)
    .enter()
    .append("text")
      .attr("x", 390 + size*.8)
      .attr("y", (d,i) =>  i * (size + 5) + (size/2)) // 100 is where the first dot appears. 25 is the distance between dots
      .style("fill", d => colorScale(d))
      .text(d => d)
      .attr("text-anchor", "left")
      .style("alignment-baseline", "middle")
      .on("mouseover", highlight)
      .on("mouseleave", noHighlight)


    svg.append('text')
      .attr('x', width / 2)
      .attr('y', -50)
      .attr('text-anchor', 'middle')
      .attr('fill',  colorTitle)
      .style('font-size', fontSizeTitle)
      .text(title);

  }, [selectedTheme]);


  return props?.geoDashboard ? (
    <Box style={{
      width: "100%",
      height: "100%",
    }}>
      <div id="my_dataviz" style={{
        width: "100%",
        height: "100%",
      }}>
        <svg ref={svgRef}></svg>
      </div>
    </Box>
  ) : (
    <Box className={classes.wrapper}>
      <div id="my_dataviz" className={classes.wrapper}>
        <svg ref={svgRef}></svg>
      </div>
    </Box>
  );
};

export default BubbleChart;
