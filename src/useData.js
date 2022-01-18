import React, { useState, useEffect } from "react";
import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv';

export const useData = () => {
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

	// useEffect(() => {
	// 	const row = d => {

	// 	}
	// 	csv(csvUrl, row).then(data => {
	// 		setData(data);
	// 	})
	// },[])
};