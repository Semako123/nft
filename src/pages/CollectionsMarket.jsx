import React from "react";
import { Collection } from "../components";
import { nftCollection } from "../data/nfts";

const CollectionsMarket = () => {
	return (
		<>
			{nftCollection.map((data, index) => (
				<Collection nftColData={data} key={index} />
			))}
		</>
	);
};

export default CollectionsMarket;
