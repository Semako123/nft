import React from "react";
import { Link } from "react-router-dom";

const Creator = ({ artist, index }) => {
	return (
		<Link to="/">
			<div className="w-[240px] h-[238px] bg-[#3B3B3B] rounded-[20px] flex items-center justify-center flex-col hover:cursor-pointer relative p-[20px]">
				<div className="lg:absolute top-5 left-5 w-7 h-7 rounded-full text-[#858584] bg-[#2B2B2B] grid place-items-center">
					{index}
				</div>
				<img
					src={artist.img}
					alt=""
					className="rounded-full h-[120px] w-[120px] mb-[20px]"
				/>
				<h5 className="text-xl mb-1">{artist.name}</h5>
				<p className="text-base text-[#858584]">
					Total Sales:{" "}
					<span className="text-white font-secondary">{artist.sales} ETH</span>
				</p>
			</div>
		</Link>
	);
};

export default Creator;
