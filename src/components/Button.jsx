import React from "react";

const Button = ({ outlined, children, lg }) => {
	return (
		<div
			className={`${outlined ? "border-[#A259FF]" : "bg-[#A259FF]"} ${
				lg ? "px-[40px]" : "px-[25px]"
			} py-[15px] hover:cursor-pointer text-base text-white rounded-[20px] flex gap-3 w-fit`}>
			{children}
		</div>
	);
};

export default Button;
