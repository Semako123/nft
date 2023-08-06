import React from "react";
import { Collection, Button } from "../components";
import { nftCollection } from "../data/nfts";
import { Eye } from "../assets";
import { Link } from "react-router-dom";

const Collections = () => {
	return (
		<div className="px-20 py-12 text-white">
			<div className="flex justify-between mb-[20px]">
				<div>
					<h3 className="font-semibold text-4xl mb-2">Trending Collections</h3>
					<p className="text-base mb-14 font-light">
						Checkout Our Weekly Updated Trending Collections
					</p>
				</div>
				<div>
					<Link to="/marketplace/collections">
						<Button outlined={2}>
							<img src={Eye} alt="" />
							<p>See All</p>
						</Button>
					</Link>
				</div>
			</div>

			<div className="flex justify-between">
				{nftCollection.slice(0, 3).map((data, index) => (
					<Collection nftColData={data} key={index}/>
				))}
			</div>
		</div>
	);
};

export default Collections;
