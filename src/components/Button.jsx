import React from "react";

const Button = ({ variant, children, sz }) => {
	return (
		<div
			className={`${
				variant === "outlined" ? "border-[#A259FF]" : "bg-[#A259FF]"
			} ${
				sz === "lg" ? "px-[40px]" : "px-[25px]"
				} py-[15px] hover:cursor-pointer text-base text-white rounded-[20px] flex gap-3`}>
			{children}
		</div>
	);
};

export default Button;
