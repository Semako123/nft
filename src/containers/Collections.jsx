import React from "react";
import { Collection } from "../components";
import { nftCollection } from "../data/nfts";

const Collections = () => {
	return (
		<div className="px-20 py-12 text-white">
			<h3 className="font-semibold text-4xl mb-2">Trending Collections</h3>
			<p className="text-base mb-14 font-light">
				Checkout Our Weekly Updated Trending Collections
			</p>
			<div className="flex justify-between">
				{nftCollection.map((data) => (
					<Collection nftColData={data} />
				))}
			</div>
		</div>
	);
};

export default Collections;
