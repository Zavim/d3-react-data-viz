import React from 'react';

export default function AxisLeft({ yScale }) {
  return (
    <>
      {yScale.domain().map((tickValue) => (
        <g className="tick">
          <text
            key={tickValue}
            style={{ textAnchor: 'end' }}
            x={-3}
            dy=".32em"
            y={yScale(tickValue)}
          ></text>
        </g>
      ))}
    </>
  );
}
