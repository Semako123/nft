import React from "react";
import { Button, Info, NftCard } from "../components";
import { Rocket } from "../assets";
import nftData from "../data/nfts";

const Hero = () => {
	const hero_info = [
		["Total Sale", 240],
		["Auctions", 100],
		["Artist", 300],
	];
	return (
		<div className="px-20 py-12 flex items-center gap-4">
			<div className="w-[50%]">
				<h2 className="text-white text-6xl font-bold mb-5">
					Discover digital art & Collect NFTs
				</h2>
				<p className="text-white font-light text-xl mb-8 leading-7 ">
					NFT marketplace UI created with Anima for Figma. Collect, buy and sell
					art from more than 20k NFT artists.
				</p>
				<Button sz="lg">
					<img src={Rocket} alt="" /> Get Started
				</Button>
				<div className="mt-8 flex justify-between max-w-[80%]">
					{hero_info.map(([name, value]) => (
						<Info name={name} value={value} />
					))}
				</div>
			</div>
			<div className="flex justify-center w-[50%] items-center">
				<NftCard nft={nftData[0]} large />
			</div>
		</div>
	);
};

export default Hero;
