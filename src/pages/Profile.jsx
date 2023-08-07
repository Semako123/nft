import React from "react";
import { motion } from "framer-motion";
import { Avatar9, profileBD } from "../assets";
import { Info, Button, NftCard } from "../components";
import { RxCopy, RxPlus } from "react-icons/rx";
import { PiDiscordLogo, PiTwitterLogo, PiInstagramLogo } from "react-icons/pi";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import nftData from "../data/nfts";

const Profile = () => {
	const info_data = [
		["Volume", 250],
		["NFTs Sold", 40],
		["Followers", 100],
	];
	return (
		<motion.div
			key="profile"
			initial={{ x: "100%", opacity: 0 }}
			animate={{
				x: 0,
				opacity: 1,
				transition: { duration: 0.5, type: "tween" },
			}}
			className="text-white">
			<div>
				<img src={profileBD} alt="" className="w-full" />
				<img
					src={Avatar9}
					alt=""
					className="w-30 h-30 rounded-[20px] translate-x-32 -translate-y-14"
				/>
			</div>
			<div className="pb-10 px-32">
				<div className="flex justify-between mb-3">
					<h3 className="font-semibold text-5xl mb-3">AnimaKid</h3>
					<div className="flex gap-4">
						<Button>
							<RxCopy />
							0xc0E3...B79C
						</Button>
						<Button outlined={2}>
							<RxPlus className="text-[#A259FF]" /> Follow
						</Button>
					</div>
				</div>
				<div className="flex gap-16">
					{info_data.map(([name, value], index) => (
						<Info name={name} value={value} key={index} />
					))}
				</div>
				<div className="my-7">
					<p className="font-secondary text-[#858584] mb-2">Bio</p>
					<p>The internet's friendliest designer kid.</p>
				</div>
				<div className="text-[#858584]">
					<p className="font-secondary mb-2">Links</p>
					<div className="flex gap-2">
						<BsGlobe className="text-2xl hover:cursor-pointer hover:text-[#A259FF] transition-all" />
						<PiDiscordLogo className="text-2xl hover:cursor-pointer hover:text-[#A259FF] transition-all" />
						<AiOutlineYoutube className="text-2xl hover:cursor-pointer hover:text-[#A259FF] transition-all" />
						<PiTwitterLogo className="text-2xl hover:cursor-pointer hover:text-[#A259FF] transition-all" />
						<PiInstagramLogo className="text-2xl hover:cursor-pointer hover:text-[#A259FF] transition-all" />
					</div>
				</div>
			</div>
			<div className="border-T-2 border border-[#3B3B3B] text-xl cursor-pointer font-semibold flex items-center py-3 justify-center">
				Created
				<span className="ml-2 bg-[#858584] py-1 px-[6px] rounded-full font-secondary font-normal text-sm">
					302
				</span>
			</div>
			<div className="py-20 px-3 flex gap-12 flex-wrap justify-center bg-[#3B3B3B] mb-[2px]">
				{nftData.slice(3, 12).map((nft, index) => (
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
			</div>
		</motion.div>
	);
};

export default Profile;
