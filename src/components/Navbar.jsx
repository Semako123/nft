import React from "react";
import { logo, Storefront, User } from "../assets/index";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
	const navLinks = [
		["Marketplace", "/marketplace"],
		["Ranking", "ranking"],
		["Connect a wallet", "/wallet"],
	];
	return (
		<nav className="px-[50px] h-[100px] flex items-center justify-between container mx-auto">
			<Link to="/">
				<div className="flex gap-[12px] items-center">
					<img src={Storefront} alt="" />
					<img src={logo} alt="NFT Marketplace" className="w-[200px]" />
				</div>
			</Link>

			<div className="flex gap-3 items-center">
				<ul className="flex gap-3">
					{navLinks.map(([name, link], index) => (
						<li className="text-white text-base px-5 py-3" key={index}>
							<Link to={link}>{name}</Link>
						</li>
					))}
				</ul>
				<Link to="/auth">
					<Button>
						<img src={User} alt="" />
						<p>Sign Up</p>
					</Button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
