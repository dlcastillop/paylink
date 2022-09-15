import React from "react";

function IndieHackers(props) {
  return (
    <a href={props.href} target="_blank" className="ms-2 me-2">
		<svg 
			xmlns="http://www.w3.org/2000/svg"
			width="24" 
			height="24"
			fill="#000"
			className="bi bi-indiehackers" 
			viewBox="0 0 24 24"
		>
			<path d="M4 6H7V18H4V6Z"/>
			<path d="M10 6H13V10.5H17V6H20V18H17V13.5H13V18H10V6Z"/>
		</svg>
	</a>
  );
}

export default IndieHackers;