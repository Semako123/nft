import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import nftData from "../data/nfts";
import { NftCard } from "../components";

const Marketplace = () => {
	return (
		<div className="text-white">
			<div className="px-24 py-12 container mx-auto">
				<h2 className="mb-5 text-5xl font-semibold w-fit">
					Browse Marketplace
				</h2>
				<p className="font-light mb-14">
					Browse through more than 50k NFTs on the NFT Marketplace.
				</p>
				<div className="flex items-center">
					<input
						type="text"
						className="p-5 rounded-[20px] border-[#858584] border bg-transparent w-full outline-none"
						placeholder="Search your favorite NFTs"
					/>
					<AiOutlineSearch className="text-[#858584] text-3xl -translate-x-12 hover:cursor-pointer" />
				</div>
			</div>
			<div className="bg-[#3B3B3B] py-12 mb-[2px] flex flex-wrap justify-center gap-12">
				{nftData.map((nft) => (
					<NftCard nft={nft} dark/>
				))}
			</div>
		</div>
	);
};

export default Marketplace;
