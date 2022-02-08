import React from 'react';
import { scaleBand, scaleLinear, max } from 'd3';

const width = 960;
const height = 500;

export default function Graphing(props) {
  const data = props.data;
  const yScale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, height]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, width]);

  return (
    <svg width={width} height={height}>
      {data.map((d) => (
        <rect
          x={0}
          y={yScale(d.Country)}
          width={xScale(d.Population)}
          height={yScale.bandwidth()}
          key={d['Country code']}
        />
      ))}
    </svg>
  );
}
