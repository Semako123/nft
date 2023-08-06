import React from "react";
import nftData from "../data/nfts";
import { NftCard } from "../components";

const NftMarket = () => {
	return (
		<>
			{nftData.map((nft, index) => (
				<NftCard nft={nft} dark key={index} />
			))}
		</>
	);
};

export default NftMarket;
