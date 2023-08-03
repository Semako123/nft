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
			title: "Setup Your Wallet",
			img: collection,
			content:
				"Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
			title: "Setup Your Wallet",
			img: earning,
			content:
				"Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
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
