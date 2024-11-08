import React, { useEffect } from 'react';
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
});

const Heatmap = (props) => {
  const classes = useStyles();
  const dataProps = props?.data?.originalData?.data;
  const data = dataProps?.children;
  const title = dataProps?.title;

  const widthProps = dataProps?.width || 400;
  const heightProps = dataProps?.height || 300;

  const yMargin = dataProps?.yMargin || 50;
  
  const colorRangeStart = dataProps?.colorRangeStart || "white";
  const colorRangeFinish = dataProps?.colorRangeFinish || "#03294A";
  const colorText = dataProps?.colorText || "black";
  const colorTitle = dataProps?.colorTitle || "#3993E1";
  const colorAxis = dataProps?.colorAxis || "#3993E1";

  useEffect(() => {
    const margin = { top: 40, right: 30, bottom: 30, left: 40 };
    const width = widthProps - margin.left - margin.right;
    const height = heightProps - margin.top - margin.bottom;

    const minVal = d3.min(data, (d) => d.value);
    const maxVal = d3.max(data, (d) => d.value);

    const color = d3.scaleLinear().range([colorRangeStart, colorRangeFinish]).domain([minVal, maxVal]);

    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.x))
      .padding(0.1);

    const y = d3
      .scaleBand()
      .range([height, 0])
      .domain(data.map((d) => d.y))
      .padding(0.1);

    const svg = d3.select("#heatmapWrapper")
      .append("svg")
      .attr("width", width + margin.left + yMargin + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left + yMargin} ,${margin.top})`);

      const mouseover = function(event, d) {
        const squareWidth = x.bandwidth();
        const strokeWidth = squareWidth * 0.15;
        
        d3.select(this)
          .classed(classes.hovered, true)
          .style("stroke", function() {
            return color(d.value);
          })
          .style("stroke-width", `${strokeWidth}px`);
      };
      
      const mouseleave = function(d) {
        d3.select(this)
          .style("stroke", "none")
          .style("stroke-width", "0px")
          .transition()
          .duration(300)
          d3.select(this).classed(classes.hovered, false);
      };
      
      svg.selectAll()
      .data(data, (d) => `${d.x}:${d.y}`)
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.x))
      .attr('y', (d) => y(d.y))
      .attr('width', x.bandwidth())
      .attr('height', y.bandwidth())
      .style('fill', (d) => color(d.value))
      .on("mouseover", mouseover)
      .on("mouseleave", mouseleave);

    svg.selectAll('text')
      .data(data, (d) => `${d.x}:${d.y}`)
      .enter()
      .append('text')
      .attr('x', (d) => x(d.x) + x.bandwidth() / 2)
      .attr('y', (d) => y(d.y) + y.bandwidth() / 2)
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'central')
      .attr('fill', colorText)
      .attr('pointer-events', 'none')
      .text((d) => d.value);

    const xAxis = svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));
    
    xAxis.selectAll('path, line')
      .attr('stroke', colorAxis);
    
    xAxis.selectAll('text')
      .attr('fill', colorAxis);

    const yAxis = svg.append('g')
      .call(d3.axisLeft(y));
    
    yAxis.selectAll('path, line')
      .attr('stroke', colorAxis);
    
    yAxis.selectAll('text')
      .attr('fill', colorAxis);

    svg.append('text')
      .attr('x', width / 2)
      .attr('y', -20)
      .attr('text-anchor', 'middle')
      .attr('fill',  colorTitle)
      .style('font-size', '1em')
      .text(title);
  }, []);

  return (
    <Box className={classes.wrapper}>
      <div style={{
        width: widthProps, 
        height: heightProps,        
      }}>
        <div id="heatmapWrapper"></div>
      </div>
    </Box>
  );
};

export default Heatmap;
