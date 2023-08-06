import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Outlet, Link, useLocation } from "react-router-dom";
import nftData, { nftCollection } from "../data/nfts";
import { AnimatePresence, motion } from "framer-motion";

const Marketplace = () => {
	const [cid, setCid] = useState(0);
	const location = useLocation();
	useEffect(() => {
		if (
			location.pathname === "/marketplace" ||
			location.pathname === "/marketplace/nft"
		) {
			setCid(0);
		} else {
			setCid(1);
		}
	}, [location]);

	const translate = ["translate-x-0", "translate-x-[100%]"];
	return (
		<AnimatePresence>
			<motion.div
				key="market"
				initial={{ x: "100%", opacity: 0 }}
				animate={{
					x: 0,
					opacity: 1,
					transition: { duration: 0.5, type: "tween" },
				}}
				exit={{ x: "-100%", opacity: 0 }}
				className="text-white">
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
				<div className="border-t border-[#3B3B3B]">
					<div className="w-[80%] mx-auto flex py-3">
						<Link to="/marketplace/nft" className="w-1/2">
							<div className="text-center text-xl cursor-pointer font-semibold">
								NFTs
								<span className="ml-2 bg-[#858584] py-1 px-[6px] rounded-full font-secondary font-normal text-sm">
									{nftData.length * 20}
								</span>
							</div>
						</Link>
						<Link to="/marketplace/collections" className="w-1/2">
							<div className="text-center text-xl cursor-pointer font-semibold">
								Collections
								<span className="ml-2 bg-[#858584] py-1 px-[6px] rounded-full font-secondary font-normal text-sm">
									{nftCollection.length * 13}
								</span>
							</div>
						</Link>
					</div>
					<div className="w-[80%] mx-auto">
						<div
							className={`w-[50%] bg-[#858584] h-1 rounded-full ${translate[cid]} transition-all ease-[cubic-bezier(0.25,0.1,0.25,1)]`}></div>
					</div>
				</div>
				<div className="bg-[#3B3B3B] py-12 mb-[2px] flex flex-wrap justify-center gap-12">
					<Outlet />
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Marketplace;
