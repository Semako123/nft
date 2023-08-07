import React from "react";
import { motion } from "framer-motion";
import { Avatar3, exhibit } from "../assets";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button, NftCard, Timer } from "../components";
import { HiOutlineArrowRight } from "react-icons/hi";
import nftData from "../data/nfts";

const ExhibitionPage = () => {
	const tags = ["Illustration", "Animation", "Space", "Moon"];
	return (
		<motion.div
			key="exhibition"
			initial={{ x: "100%", opacity: 0 }}
			animate={{
				x: 0,
				opacity: 1,
				transition: { duration: 0.5, type: "tween" },
			}}
			className="text-white">
			<img src={exhibit} alt="" className="w-full" />
			<div className="flex">
				<div className="py-10 px-28 w-[60%]">
					<h2>The Orbitals</h2>
					<p>Minted on Sep 30, 2022</p>
					<p>Created by</p>
					<div className="flex items-center gap-3">
						<img src={Avatar3} alt="" className="h-7 w-7 rounded-full" />
						<p>Orbitian</p>
					</div>
					<p>Description</p>
					<p>
						The Orbitians is a collection of 10,000 unique NFTs on the Ethereum
						blockchain,There are all sorts of beings in the NFT Universe. The
						most advanced and friendly of the bunch are Orbitians. They live in
						a metal space machines, high up in the sky and only have one foot on
						Earth. These Orbitians are a peaceful race, but they have been at
						war with a group of invaders for many generations. The invaders are
						called Upside-Downs, because of their inverted bodies that live on
						the ground, yet do not know any other way to be. Upside-Downs
						believe that they will be able to win this war if they could only
						get an eye into Orbitian territory, so they've taken to make human
						beings their target.
					</p>
					<p>Details</p>
					<div className="hover:cursor-pointer flex gap-3 items-center">
						<BsGlobe /> <p>View on Etherscan</p>
					</div>
					<div className="hover:cursor-pointer flex gap-3 items-center">
						<BsGlobe /> <p>View Original</p>
					</div>
					<p>Tags</p>
					<div>
						{tags.map((tag, index) => (
							<div key={index}>{tag}</div>
						))}
					</div>
				</div>
				<div>
					<Timer>
						<Button>Place Bid</Button>
					</Timer>
				</div>
			</div>
			<div>
				<div>
					<h3>More Like This</h3>
					<Link>
						<Button outlined={2}>
							<HiOutlineArrowRight /> Go To Artist Page
						</Button>
					</Link>
				</div>
				<div className="flex gap-12 justify-center flex-wrap mb-10">
					{nftData.slice(12, 21).map((nft) => (
						<NftCard nft={nft} />
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default ExhibitionPage;
