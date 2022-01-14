import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { csvParse } from 'd3';

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

  return <>
    <input type="file" name="file" multiple={false} accept=".csv" onChange={handleChange} />
    {data ? (
      data.map(d => <div key={d['Keyword']} style={{ backgroundColor: d['RGB hex value'], width: '100px', height: '100px' }}></div>)
    ) :
      <div>no data to display</div>}
  </>;
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);