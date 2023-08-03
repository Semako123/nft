import React from "react";
import { InfoCard } from "../components";
import { collection, earning, wallet } from "../assets";

const HIW = () => {
	const info = [
		{
			title: "Setup Your Wallet",
			img: wallet,
			content:
				"Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
			title: "Create Collection",
			img: collection,
			content:
				"Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
			title: "Start Earning",
			img: earning,
			content:
				"Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
		},
	];
	return (
		<div className="px-20 py-12 text-white">
			<h3 className="font-semibold text-4xl mb-2">How It Works</h3>
			<p className="text-base mb-14 font-light">Find Out How To Get Started</p>
			<div className="flex justify-between">
				{info.map((info) => (
					<InfoCard img={info.img} title={info.title}>
						{info.content}
					</InfoCard>
				))}
			</div>
		</div>
	);
};

export default HIW;
