import React from "react";

const NftCard = ({ nft, large }) => {
	const { name, img, artist, price, highestBid } = nft;
	return (
		<div
			className={`${
				large ? "lg:w-[500px]" : ""
			} w-[330px] rounded-2xl overflow-hidden text-white bg-[#3B3B3B]`}>
			<img src={img} alt={name} className="w-full" />
			<div>
				<div className="px-6 py-4">
					<h5 className="text-base mb-1 font-semibold">{name}</h5>
					<div className="flex gap-3 items-center mb-5">
						<img src={artist.img} alt="" className="rounded-full h-5 w-5" />
						<p className="font-light text-sm">{artist.name}</p>
					</div>
					{!large && (
						<div className="flex justify-between">
							<div>
								<p className="text-light text-[#858584] mb-1  font-secondary">
									Price
								</p>
								<p className="font-secondary">{price} ETH</p>
							</div>
							<div className="text-right">
								<p className="text-light text-[#858584] mb-1  font-secondary">
									Highest Bid
								</p>
								<p className=" font-secondary">{highestBid} ETH</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default NftCard;
