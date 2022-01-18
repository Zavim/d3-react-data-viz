import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { csvParse, arc, pie } from 'd3';

const App = () => {
  const [data, setData] = useState(null);

  const fetchText = async (file) => {
    return await file.text();
  };

  const handleChange = (event) => {
    let file = event.target.files[0];
    fetchText(file).then(text => {
      const data = csvParse(text);
      setData(data);
    }
    );
  };

  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;

  const pieArc = arc()
    .innerRadius(0)
    .outerRadius(width);

  const colorPie = pie().value(1);

  return <>
    <div>
      <input type="file" name="file" multiple={false} accept=".csv" onChange={handleChange} />
    </div>
    {data ? (
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          {colorPie(data).map((d) => (
            <path
              fill={d.data['RGB hex value']}
              d={pieArc(d)} />
          ))}
        </g>
      </svg>

    ) :
      <div>no data to display</div>}
  </>;
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);