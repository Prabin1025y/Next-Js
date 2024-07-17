"use client";
import React, { useEffect, useState } from "react";

const About = () => {
	const [count, setcount] = useState(0);
	return (
		<>
			<div>About</div>
			<button className="border-2 p-4 border-white rounded-md" onClick={() => setcount(count + 1)}>Count {count}</button>
		</>
	);
};

export default About;
