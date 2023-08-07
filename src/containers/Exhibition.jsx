import React from "react";
import { Avatar6, Eye, mushCol1 } from "../assets";
import { Button, Timer } from "../components";
import { Link } from "react-router-dom";

const Exhibition = () => {
	return (
		<div className="h-[640px] overflow-hidden my-16 relative">
			<img src={mushCol1} alt="" className="w-full -translate-y-80" />
			<div className="top-0 bg-gradient-to-b from-transparent to-[#A259FF] h-full w-full absolute"></div>
			<div className="absolute bottom-0 w-full pb-24 px-28 flex justify-between items-end">
				<div>
					<Link to="/profile">
					<div className="flex gap-2 items-center bg-[#3B3B3B] w-fit rounded-full py-2 px-4 text-white font-light text-sm mb-8 hover:cursor-pointer">
						<img src={Avatar6} alt="" className="rounded-full h-6 w-6" />
						<p>Shroomie</p>
					</div></Link>
					
					<h2 className="font-semibold text-white text-5xl mb-8">
						Magic Mashrooms
					</h2>
					<Link to="/exhibition">
						<Button light>
							<img src={Eye} alt="" />
							<p>See NFT</p>
						</Button>
					</Link>
				</div>
				<Timer />
			</div>
		</div>
	);
};

export default Exhibition;
