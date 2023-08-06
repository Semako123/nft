import React from "react";
import { Button, NftCard } from "../components";
import { Eye } from "../assets";
import nftData from "../data/nfts";
import { Link } from "react-router-dom";

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
					<Link to="/marketplace/nft">
						<Button outlined={2}>
							<img src={Eye} alt="" />
							<p>See All</p>
						</Button>
					</Link>
				</div>
			</div>
			<div className="flex justify-between">
				{nftData.slice(1, 4).map((nft, index) => (
					<NftCard nft={nft} key={index} />
				))}
			</div>
		</div>
	);
};

export default Discover;
