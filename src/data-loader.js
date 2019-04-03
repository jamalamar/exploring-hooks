import React, { useState, useEffect } from 'react';

export default function DataLoader() {
	const [data, setData] = useState([]);



	//To solve the infinite loop "bug", we pass an empty array...
	//...as a second argument to useEffect
	useEffect(()=>{
		fetch("http://localhost:3001/links/")
		.then(response => response.json())
		.then(data => setData(data));
	}, []);// << SUPER IMPORTANT ARRAY



	return (
		<div>
			<ul>
				{data.map(el => (
					<li key={el.id}>{el.title}</li>
				))}
			</ul>
		</div>
	);
}