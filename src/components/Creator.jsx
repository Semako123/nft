import React from "react";

const Creator = ({ artist, index }) => {
	return (
		<div className="w-[240px] h-[238px] bg-[#3B3B3B] rounded-[20px] flex items-center justify-center flex-col">
			<div>{index}</div>
			<img
				src={artist.img}
				alt=""
				className="rounded-full h-[120px] w-[120px]"
			/>
			<h5>{artist.name}</h5>
			<p>
				Total Sales: <span>{artist.sales} ETH</span>
			</p>
		</div>
	);
};

export default Creator;
