import React from "react";
import { Button, NftCard } from "../components";
import { Eye } from "../assets";
import nftData from "../data/nfts";

const Discover = () => {
	return (
		<div className="px-20 py-12 text-white">
			<div className="flex justify-between mb-[20px]">
				<div>
					<h3 className="font-semibold text-4xl mb-3">Discover More NFTs</h3>
					<p className="text-base mb-14 font-light">
						Explore New Trending NFTs
					</p>
				</div>
				<div>
					<Button outlined>
						<img src={Eye} alt="" />
						<p>See All</p>
					</Button>
				</div>
			</div>
			<div className="flex justify-between">
				{nftData.slice(1, ).map((nft) => (
					<NftCard nft={nft} />
				))}
			</div>
		</div>
	);
};

export default Discover;
