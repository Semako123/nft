import React from "react";
import { logo, Storefront } from "../assets/index";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
	const navLinks = [
		["Marketplace", "/market"],
		["Ranking", "ranking"],
		["Connect a wallet", "/wallet"],
	];
	return (
		<nav className="px-[50px] h-[100px] flex items-center justify-between">
			<div className="flex gap-[12px] items-center">
				<img src={Storefront} alt="" />
				<img src={logo} alt="NFT Marketplace" className="w-[200px]" />
			</div>
			<div className="flex gap-3 items-center">
				<ul className="flex gap-3">
					{navLinks.map(([name, link]) => (
						<li>
							<Link to={link}>{name}</Link>
						</li>
					))}
				</ul>
				<Button>Sign Up</Button>
			</div>
		</nav>
	);
};

export default Navbar;
