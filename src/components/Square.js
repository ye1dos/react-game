import React from "react";
const style = {
	background: "orange",
	border: "2px solid",
	fontSize: "30px",
	fontWeight: "800",
	cursor: "pointer",
	outline: "none",
};
const Square = (props) => (
	<button style ={style} onClick={props.onClick}>{props.value}</button>
);

export default Square;