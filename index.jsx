//  React js 1  ******************************************************************
import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const data = {
	image: "../../.learn/assets/Dylan.png?raw=true",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia",
	},
};

let content = (
	/**
	 * define the variable 'content' here and fill it with the
	 * needed code to render the bootstrap card
	 **/
	<div className="card m-5">
		<img className="card-img-top" src={data.image} alt="Card image cap" />
		<div className="card-body">
			<h5 className="card-title">{data.cardTitle}</h5>
			<p className="card-text">{data.cardDescription}</p>
			<a href={data.button.url} className="btn btn-primary">
				{data.button.label}
			</a>
		</div>
	</div>
);

ReactDOM.render(content, document.querySelector("#myDiv"));

//  React js 2  ******************************************************************

import React from "react";
import ReactDOM from "react-dom";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

/**
 * change the content inside the map function
 **/
const animalsInHTML = animals.map((singleAnimal) => {
	return (<li key={i}>{singleAnimal}</li>), (<li key={i}>{singleAnimal}</li>), (<li key={i}>{singleAnimal}</li>), (<li key={i}>{singleAnimal}</li>);
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));

//  React js 3  ******************************************************************

// QUÉ: Esta función devuelve un string que será renderizado 
const PrintHello = () => {
    return <h1>Hello World</h1>;
}
               //qué           //dónde
ReactDOM.render(PrintHello(), myDiv);

//  React js 4  ******************************************************************

import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */
const planetsInHTML = planets.map((item, i) => {
    return (
        (
            <li key={i} className="list-group-item">
                {item}
            </li>
        ),
        (
            <li key={i} className="list-group-item">
                {item}
            </li>
        ),
        (
            <li key={i} className="list-group-item">
                {item}
            </li>
        ),
        (
            <li key={i} className="list-group-item">
                {item}
            </li>
        ),
        (
            <li key={i} className="list-group-item">
                {item}
            </li>
        ),
        (
            <li key={i} className="list-group-item">
                {item}
            </li>
        )
    );
});

// 2) add the array planetsInHTML inside the innerHTML of this ul
const content = <ul className="list-group m-5">{planetsInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));

//  React js 5  ******************************************************************

import React from "react";
import ReactDOM from "react-dom";

//create your function here
export const BootstrapCard = () => {
	return (
		<div class="card m-5">
			<img class="card-img-top" src="../../.learn/assets/Dylan.png?raw=true" alt="Card image cap" />
			<div class="card-body">
				<h5 class="card-title">Bob Dylan</h5>
				<p class="card-text">
					Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an
					influential figure in popular music and culture for more than five decades.
				</p>
				<a href="https://en.wikipedia.org/wiki/Bob_Dylan" class="btn btn-primary">
					Go to wikipedia
				</a>
			</div>
		</div>
	);
};

//remember to use ReactDOM.render to include the component into the website
ReactDOM.render(<BootstrapCard></BootstrapCard>, document.querySelector("#myDiv"));

//  React js 6  ******************************************************************