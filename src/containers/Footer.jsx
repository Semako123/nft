import React from "react";
import { Button } from "../components";
import { Link } from "react-router-dom";
import { Storefront, logo } from "../assets";
import { PiDiscordLogo, PiTwitterLogo, PiInstagramLogo } from "react-icons/pi";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
	return (
		<div className="text-[#CCC] font-light py-10 px-36 bg-[#3B3B3B] flex flex-wrap gap-y-14 lg:flex-row flex-col">
			<div className="mr-auto">
				<div className="flex gap-3 items-center mb-7">
					<img src={Storefront} alt="" />
					<img src={logo} alt="" />
				</div>
				<p className="mb-4 w-[90%]">NFT marketplace UI created with React.</p>
				<p className="mb-4">Join our community</p>
				<div className="flex gap-3">
					<PiDiscordLogo className="hover:text-[#A259FF] hover:cursor-pointer transition-all text-4xl " />
					<AiOutlineYoutube className="hover:text-[#A259FF] hover:cursor-pointer transition-all text-4xl " />
					<PiTwitterLogo className="hover:text-[#A259FF] hover:cursor-pointer transition-all text-4xl " />
					<PiInstagramLogo className="hover:text-[#A259FF] hover:cursor-pointer transition-all text-4xl " />
				</div>
			</div>
			<div className="mr-auto">
				<h5 className="font-secondary text-white font-bold text-xl mb-7">
					Explore
				</h5>
				<p className="mb-4 hover:text-[#A259FF] transition-all">
					<Link>Marketplace</Link>
				</p>
				<p className="mb-4 hover:text-[#A259FF] transition-all">
					<Link>Ranking</Link>
				</p>
				<p className="mb-4 hover:text-[#A259FF] transition-all">
					<Link to="/wallet">Connect a Wallet</Link>
				</p>
			</div>
			<div>
				<h5 className="font-secondary text-white font-bold text-xl mb-7">
					Join Our Weekly Digest
				</h5>
				<p className="mb-4 w-[60%]">
					Get exclusive promotions & updates straight to your inbox.
				</p>
				<div className="flex text-white font-normal">
					<input
						type="text"
						className="pl-[25px] outline-none text-slate-950 pr-[45px] py-[15px] rounded-[20px] -mr-10"
						placeholder="Enter your email here"
					/>
					<Button>Subscribe</Button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
