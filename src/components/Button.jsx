import React from "react";

const Button = ({ outlined, children, lg, light }) => {
	return (
		<div
			className={`${
				outlined
					? "border-[#A259FF] border-2"
					: light
					? "bg-white"
					: "bg-[#A259FF]"
			} ${lg ? "px-[40px]" : "px-[25px]"} ${
				light ? "text-black font-semibold" : "text-white"
			} py-[15px] hover:cursor-pointer text-base  rounded-[20px] flex gap-3 w-fit`}>
			{children}
		</div>
	);
};

export default Button;
