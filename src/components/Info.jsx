import React from "react";

const Info = ({ value, name }) => {
	return (
		<div>
			<h4 className="font-bold text-white text-3xl">{value}k+</h4>
			<p className="text-white text-base font-light">{name}</p>
		</div>
	);
};

export default Info;
