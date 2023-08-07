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
			<div className="flex py-12">
				<div className="px-28 w-[60%]">
					<h2 className="mb-2 text-6xl font-semibold">The Orbitians</h2>
					<p className="text-[#858584] mb-7 font-light">
						Minted on Sep 30, 2022
					</p>
					<p className="font-secondary text-[#858584] mb-2">Created by</p>
					<div className="flex items-center gap-3 mb-8">
						<img src={Avatar3} alt="" className="h-7 w-7 rounded-full" />
						<p>Orbitian</p>
					</div>
					<p className="font-secondary text-[#858584] mb-2">Description</p>
					<p className="font-light mb-8">
						<span className="block mb-4">The Orbitians</span>
						<span className="block mb-4">
							is a collection of 10,000 unique NFTs on the Ethereum blockchain.
						</span>
						<span className="block mb-4">
							There are all sorts of beings in the NFT Universe. The most
							advanced and friendly of the bunch are Orbitians.
						</span>
						<span className="block">
							They live in a metal space machines, high up in the sky and only
							have one foot on Earth.
						</span>
						<span className="block">
							These Orbitians are a peaceful race, but they have been at war
							with a group of invaders for many generations. The invaders are
							called Upside-Downs, because of their inverted bodies that live on
							the ground, yet do not know any other way to be. Upside-Downs
							believe that they will be able to win this war if they could only
							get an eye into Orbitian territory, so they've taken to make human
							beings their target.
						</span>
					</p>
					<div className="mb-7">
						<p className="font-secondary text-[#858584] mb-2">Details</p>
						<div className="hover:cursor-pointer flex gap-3 items-center mb-1">
							<BsGlobe className="text-[#858584]" />{" "}
							<p className="font-light">View on Etherscan</p>
						</div>
						<div className="hover:cursor-pointer flex gap-3 items-center mb-1">
							<BsGlobe className="text-[#858584]" />{" "}
							<p className="font-light">View Original</p>
						</div>
					</div>

					<p className="font-secondary text-[#858584] mb-2">Tags</p>
					<div className="flex flex-wrap gap-5">
						{tags.map((tag, index) => (
							<div
								key={index}
								className="text-xs uppercase bg-[#3B3B3B] px-3 py-2 rounded-[10px] w-fit">
								{tag}
							</div>
						))}
					</div>
				</div>
				<div className="flex justify-center items-start pt-10">
					<Timer>
						<Button>Place Bid</Button>
					</Timer>
				</div>
			</div>
			<div>
				<div className="flex justify-between mb-[20px] px-20 py-10 text-white container mx-auto">
					<h3 className="font-semibold text-4xl mb-2">More Like This</h3>
					<Link>
						<Button outlined={2}>
							<HiOutlineArrowRight className="text-[#A259FF]" /> Go To Artist
							Page
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
