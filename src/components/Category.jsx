import React from "react";

const Category = ({ name, img, icon }) => {
	return (
		<div className="w-[240px] h-[316px] rounded-[20px] overflow-hidden hover:cursor-pointer">
			<div className="relative">
				<img src={img} alt="" className="h-full" />
				<div className="h-full w-full backdrop-blur-sm absolute top-0 grid place-items-center">
					<img src={icon} alt="" />
				</div>
			</div>
			<div className="pt-[20px] pb-[25px] px-[30px] bg-[#3B3B3B]">
				<h5 className="text-xl">{name}</h5>
			</div>
		</div>
	);
};

export default Category;
