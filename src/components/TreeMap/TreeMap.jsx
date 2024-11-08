import React, { useEffect, useRef } from 'react';
import { Box } from "@mui/material";
import * as d3 from 'd3';

const TreeMap = (props) => {
  const data = props?.data?.originalData?.data;
  const svgRef = useRef();

  const width = data?.width || 400;
  const height = data?.height || 300;
  const padding = data?.padding || 1;

  useEffect(() => {
    const root = d3.hierarchy(data)
      .sum(d => d.value);

    const treemap = d3.treemap()
      .size([width, height])
      .padding(padding)
      .round(true);

    treemap(root);

    const svg = d3.select(svgRef.current);

    const block = svg
      .selectAll('g')
      .data(root.leaves())
      .enter()
      .append('g')
      .attr('transform', d => `translate(${d.x0},${d.y0})`);

    block
      .append('rect')
      .attr('width', d => d.x1 - d.x0)
      .attr('height', d => d.y1 - d.y0)
      .attr('fill', d => d.data?.backgroundColor || '#1976d2')
      .attr('stroke', d => d.data?.borderColor || '#fff')
      .on('mouseover', (event, d) => {
        const tooltip = svg
          .append('g')
          .attr('id', 'tooltip')
          .style('pointer-events', 'none');

        const tooltipWidth = 150;
        const tooltipHeight = 50;
        const tooltipX = d.x0 + 5 > width - tooltipWidth ? width - tooltipWidth : d.x0 + 5;
        const tooltipY = d.y0 + 5 > height - tooltipHeight ? height - tooltipHeight : d.y0 + 5;

        tooltip
          .append('rect')
          .attr('x', tooltipX)
          .attr('y', tooltipY)
          .attr('width', tooltipWidth)
          .attr('height', tooltipHeight)
          .attr('fill', d.data?.tooltipFill || 'rgba(255, 255, 255, 0.8)')
          .attr('stroke', d.data?.tooltipStroke || 'white')
          .attr('rx', 5)
          .attr('ry', 5);

        tooltip
          .append('text')
          .attr('x', tooltipX + 10)
          .attr('y', tooltipY + 20)
          .text(`${d.data?.labelName}: ${d.data?.label}`)
          .attr('fill', d.data?.textColor || 'black');

        tooltip
          .append('text')
          .attr('x', tooltipX + 10)
          .attr('y', tooltipY + 40)
          .text(`${d.data?.valueName}: ${d.data?.value}`)
          .attr('fill', d.data?.textColor || 'black');
      })
      .on('mouseout', () => {
        svg.select('#tooltip').remove();
      });

    block
      .append('text')
      .attr('x', d => (d.x1 - d.x0) / 2)
      .attr('y', d => (d.y1 - d.y0) / 2)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle')
      .text(d => d.data.label)
      .attr('fill', d => d.data?.color || 'white')
      .attr('font-size', d => d.data?.fontSize || '14px');
  }, [data, width, height, padding]);

  return (
    <Box style={{ 
      width: "100%", 
      position: "relative",
      fontFamily: "system-ui",
    }}>
      <svg ref={svgRef} width={width} height={height}></svg>
    </Box>
  );
};

export default TreeMap;
