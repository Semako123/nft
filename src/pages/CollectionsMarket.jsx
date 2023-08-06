import React from "react";
import { Collection } from "../components";
import { nftCollection } from "../data/nfts";
import { motion } from "framer-motion";

const CollectionsMarket = () => {
	return (
		<>
			{nftCollection.map((data, index) => (
				<motion.div
					key="collection"
					initial={{ x: "100%", opacity: 0 }}
					animate={{
						x: 0,
						opacity: 1,
						transition: { delay: index * 0.2, type: "just" },
					}}
					exit={{ x: "-100%", opacity: 0 }}>
					<Collection nftColData={data} key={index} />
				</motion.div>
			))}
		</>
	);
};

export default CollectionsMarket;
