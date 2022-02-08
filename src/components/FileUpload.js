import React from 'react';
import { useEffect, useState } from 'react';
import { csvParse } from 'd3';
import Graphing from './Graphing';

export default function FileUpload() {
  const [data, setData] = useState(null);
  const [file, setFile] = useState(null);

  const onInputChange = (event) => {
    setFile(event.target.files[0]);
  };

  const fetchText = async (file) => {
    return await file.text();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetchText(file)
      .then((text) => {
        const row = (d) => {
          d.Population = +d['2020']; // + operator is used to turn string to float
          return d;
        };
        setData(csvParse(text, row).slice(0, 10));
      })
      .catch((e) => {
        console.error('error', e);
      });
  };

  return (
    <>
      <nav>
        <input
          type="file"
          name="file"
          multiple={false}
          accept=".csv"
          onChange={onInputChange}
        />
      </nav>
      <nav>
        <button onClick={onSubmit}>Submit</button>
      </nav>
      <nav>
        {data ? (
          <Graphing data={data} />
        ) : (
          <nav>no graph to display</nav>
        )}
        {/* <Graphing data={data} /> */}
      </nav>
    </>
  );
}
