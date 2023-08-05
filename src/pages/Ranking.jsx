import React, { useState } from "react";
import artists from "../data/artists";

const Ranking = () => {
	const [cid, setCid] = useState(0);
	function getRandomFloat() {
		// Generate a random number between 0 and 1
		const randomFraction = Math.random();

		// Scale the random number to the desired range (-10 to 10)
		const randomInRange = randomFraction * 20 - 10;

		// Round the number to two decimal places
		const randomFloat = Number(randomInRange.toFixed(2));

		return randomFloat;
	}
	const [artistList, setArtisits] = useState(artists);
	const sortArtists = () => {
		setArtisits(artistList.sort(() => 0.5 - Math.random()));
	};
	const translate = [
		"translate-x-[0%]",
		"translate-x-[100%]",
		"translate-x-[200%]",
		"translate-x-[300%]",
	];

	return (
		<div className="container mx-auto text-white px-12 py-12 ">
			<h2 className="mb-5 text-5xl font-semibold w-fit">Top Creators</h2>
			<p className="font-light mb-14 lg:w-[70%]">
				Check out top ranking NFT artists on the NFT Marketplace.
			</p>
			<div className="flex mb-2">
				<h6
					className="w-1/4 hover:cursor-pointer text-center"
					onClick={() => {
						setCid(0);
						sortArtists();
					}}>
					Today
				</h6>
				<h6
					className="w-1/4 hover:cursor-pointer text-center"
					onClick={() => {
						setCid(1);
						sortArtists();
					}}>
					This Week
				</h6>
				<h6
					className="w-1/4 hover:cursor-pointer text-center"
					onClick={() => {
						setCid(2);
						sortArtists();
					}}>
					This Month
				</h6>
				<h6
					className="w-1/4 hover:cursor-pointer text-center"
					onClick={() => {
						setCid(3);
						sortArtists();
					}}>
					All Time
				</h6>
			</div>
			<div className="h-1 mb-5">
				<div
					className={`transition-all ease-[cubic-bezier(0.25,0.1,0.25,1)] w-1/4 h-full bg-[#3B3B3B] ${translate[cid]} rounded-full`}></div>
			</div>
			<div className="flex flex-col gap-y-5">
				<div className="flex justify-evenly gap-7 items-center border-[1px] border-[#3B3B3B] rounded-[20px] px-6 py-2 text-[#858584]">
					<div className="h-7 w-7 grid place-items-center bg-[#2B2B2B] rounded-full text-[#858584] font-secondary text-sm">
						#
					</div>
					<p className="w-[40%] font-secondary">Artist</p>
					<p className="w-[15%] font-secondary">Change</p>
					<p className="w-[15%] font-secondary">NFTs Sold</p>
					<p className="w-[15%] font-secondary">Volume</p>
				</div>
				{artists.map((artist, index) => {
					const change = getRandomFloat();
					return (
						<div className="flex justify-evenly gap-7 items-center bg-[#3B3B3B] rounded-[20px] px-6 py-2">
							<div className="h-7 w-7 grid place-items-center bg-[#2B2B2B] rounded-full text-[#858584] font-secondary text-sm">
								{index + 1}
							</div>
							<div className="w-[40%] flex gap-6 items-center hover:cursor-pointer">
								<img
									src={artist.img}
									alt=""
									className="rounded-full w-14 h-14"
								/>
								<p className="font-semibold">{artist.name}</p>
							</div>
							<p
								className={`w-[15%] font-secondary ${
									change < 0 ? "text-[#ff5353]" : "text-[#00AC4F]"
								}`}>
								{change}%
							</p>
							<p className="w-[15%] font-secondary">{artist.ntfs}</p>
							<p className="w-[15%] font-secondary">{artist.sales} ETH</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Ranking;
