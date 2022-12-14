import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM
import React from "react"; //Main React.js library

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 
 */
const planetsList = planets.map((planet, i) => {
	return (
		<li key={planet} className="list-group-item active">
			{planet}
		</li>
	);
});

// 2) add the array planetsInHTML inside the innerHTML of this ul
const content = <ul className="list-group m-5">{planetsList}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
