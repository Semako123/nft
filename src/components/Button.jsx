import React from "react";

const Button = ({ variant, children, sz }) => {
	return (
		<div
			className={`${variant === "outlined" ? "" : ""} ${
				sz === "lg" ? "px-[50px]" : "px-[30px]"
			} py-[20px]`}>
			{children}
		</div>
	);
};

export default Button;
