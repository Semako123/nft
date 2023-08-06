import React from "react";
import nftData from "../data/nfts";
import { NftCard } from "../components";
import { motion } from "framer-motion";

const NftMarket = () => {
	return (
		<>
			{nftData.map((nft, index) => (
				<motion.div
					key="collection"
					initial={{ x: "-100%", opacity: 0 }}
					animate={{
						x: 0,
						opacity: 1,
						transition: { delay: index * 0.2, type: "just" },
					}}
					exit={{ x: "-100%", opacity: 0 }}>
					<NftCard nft={nft} dark key={index} />
				</motion.div>
			))}
		</>
	);
};

export default NftMarket;
