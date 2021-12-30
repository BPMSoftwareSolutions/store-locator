import React from "react";
import "./Button.css";

const Button = (props) => {
	return (
		<button
			value={props.location}
			onClick={props.handleClick}
			className="location-button"
		>
			{props.location ? props.location : "All Locations"}
		</button>
	);
};

export default Button;
