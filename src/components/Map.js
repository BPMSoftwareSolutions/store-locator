import React from "react";
import "./Map.css";

const Map = (props) => {
	let imagePath;
	if (props.imagename) {
		imagePath = "images/" + props.imagename;
	} else {
		imagePath = "images/none.png";
	}
	return (
		<div className="MapBox">
			<img src={imagePath} alt={props.location} />
		</div>
	);
};

export default Map;
