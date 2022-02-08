import { extent, scaleLinear, format } from 'd3';
import React from 'react';
import AxisBottom from './components/AxisBottom';
import AxisLeft from './components/AxisLeft';
import Marks from './components/Marks';
import useData from './components/UseData';

const width = 960;
const height = 500;
const margin = {
  top: 20,
  right: 30,
  bottom: 65,
  left: 220,
};

export default function Scatter() {
  const data = useData();

  if (!data) {
    return <pre>loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => d.sepal_length;
  const yValue = (d) => d.sepal_width;

  const siFormat = format('.2s');
  const xAxisTickFormat = (tickValue) =>
    siFormat(tickValue).replace('G', 'B');

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth]);

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);

  return (
    <>
      <svg width={width} height={height}>
        <g
          transform={`translate(${margin.left},${margin.top})`}
        >
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
          />
          <AxisLeft yScale={yScale} />
          <Marks
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            tooltipFormat={xAxisTickFormat}
          />
          {/* {data.map((d) => ( */}
          {/* <circle */}
          {/* // className="mark" */}
          {/* // cx={xScale(xValue(d))} */}
          {/* // cy={yScale(yValue(d))} */}
          {/* // r={10} */}
          {/* // > */}
          {/* <title>{tooltipFormat(xValue(d))}</title> */}
          {/* </circle> */}
          {/* ))} */}
        </g>
      </svg>
    </>
  );
}
