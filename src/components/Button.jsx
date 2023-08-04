import React from "react";

const Button = ({ outlined, children, light, lg, dark }) => {
	return (
		<div
			className={`${
				outlined ? `border-[#A259FF] border-[${outlined}px]` : " bg-[#A259FF]"
			} ${
				light
					? "text-black font-semibold bg-white"
					: dark
					? "bg-[#3B3B3B] text-white"
					: "text-white"
			} ${lg ? "rounded-full w-full":""} py-[15px] hover:cursor-pointer text-base items-center justify-center rounded-[20px] flex gap-3 w-fit px-[25px]`}>
			{children}
		</div>
	);
};

export default Button;
