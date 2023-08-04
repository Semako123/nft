import React from "react";
import { Coinbase, Metamask, WalletBg, WalletConnect } from "../assets";
import { Button } from "../components";

const ConnectWallet = () => {
	return (
		<div className="flex gap-x-16 text-white">
			<div className="">
				<img src={WalletBg} alt="" className="h-full" />
			</div>
			<div className="pt-20 lg:mr-20 w-[60%] pb-10">
				<h2 className="mb-5 text-5xl font-semibold w-fit">Connect Wallet</h2>
				<p className="font-light">Choose a wallet you want to connect. </p>
				<p className="font-light mb-10">There are several wallet providers.</p>
				<div className="flex flex-col gap-5">
					<Button outlined={1} dark>
						<img src={Metamask} alt="" className="w-7 h-7" />
						Metamask
					</Button>
					<Button outlined={1} dark>
						<img src={WalletConnect} alt="" className="w-7 h-7" />
						Wallet Connect
					</Button>
					<Button outlined={1} dark>
						<img src={Coinbase} alt="" className="w-7 h-7" />
						Coinbase
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ConnectWallet;
