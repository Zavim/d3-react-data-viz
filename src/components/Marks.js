import React from 'react';

export default function Marks({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
}) {
  return (
    <>
      {console.log(xValue, yValue)}
      {data.map((d) => (
        <circle
          className="mark"
          cx={xScale(xValue(d))}
          cy={yScale(yValue(d))}
          r={10}
        >
          <title>{tooltipFormat(xValue(d))}</title>
        </circle>
      ))}
    </>
  );
}
