import React from "react";
import { Link } from "react-router-dom";

const Collection = ({ nftColData }) => {
	const { name, img1, img2, img3, value, artist } = nftColData;
	return (
		<Link to="/exhibition">
			<div className="w-[330px] text-white">
				<img
					src={img1}
					alt=""
					className="hover:cursor-pointer h-[330px] rounded-[20px] mb-4"
				/>
				<div className="flex justify-between">
					<img
						src={img2}
						alt=""
						className="hover:cursor-pointer w-[100px] h-[100px] rounded-[20px]"
					/>
					<img
						src={img3}
						alt=""
						className="hover:cursor-pointer w-[100px] h-[100px] rounded-[20px]"
					/>
					<div className="hover:cursor-pointer mb-4 w-[100px] h-[100px] rounded-[20px] bg-[#A259FF] grid place-items-center font-bold text-xl font-secondary">
						{value}+
					</div>
				</div>
				<div>
					<h5 className="font-bold mb-3 text-xl">{name}</h5>
					<Link to="/profile">
						<div className="hover:cursor-pointer flex gap-2 items-center">
							<img src={artist.img} alt="" className="w-6 h-6 rounded-full" />
							<p className="font-light text-sm">{artist.name}</p>
						</div>
					</Link>
				</div>
			</div>
		</Link>
	);
};

export default Collection;
