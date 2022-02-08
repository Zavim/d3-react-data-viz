import { csvParse, scaleBand, scaleLinear, max } from 'd3';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import FileUpload from './components/FileUpload';
import Scatter from './Scatter';

export default function App() {
  return (
    <>
      {/* <FileUpload /> */}
      <Scatter />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
