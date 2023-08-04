import React from "react";
import { Button, Creator } from "../components";
import { RocketS } from "../assets";
import artists from "../data/artists";

const TopCreators = () => {
	return (
		<div className="px-20 py-12 text-white">
			<div className="flex justify-between mb-[20px]">
				<div>
					<h3 className="font-semibold text-4xl mb-3">Top Creators</h3>
					<p className="text-base mb-14 font-light">
						Checkout Top Rated Creators on the NFT Marketplace
					</p>
				</div>
				<div>
					<Button outlined={2}>
						<img src={RocketS} alt="" />
						<p>View Rankings</p>
					</Button>
				</div>
			</div>
			<div className="flex flex-wrap justify-between gap-y-10">
				{artists.slice(0, 12).map((artist, index) => (
					<Creator artist={artist} index={index + 1} />
				))}
			</div>
		</div>
	);
};

export default TopCreators;
