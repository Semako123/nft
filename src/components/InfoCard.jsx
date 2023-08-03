import React from "react";

const InfoCard = ({ img, title, children }) => {
	return (
		<div className="flex flex-col items-center text-center w-[300px] h-[439px] rounded-[20px] bg-[#3B3B3B] p-8">
			<img src={img} alt="" className="rounded-full mb-5" />
			<h5 className="font-semibold text-xl mb-3">{title}</h5>
			<p className="font-light text-sm">{children}</p>
		</div>
	);
};

export default InfoCard;
