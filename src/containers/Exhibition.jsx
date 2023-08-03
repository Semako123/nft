import React from "react";
import { Avatar6, Eye, mushCol1 } from "../assets";
import { Button } from "../components";
import { useState, useEffect } from "react";

const Exhibition = () => {
    const [currentTime, setCurrentTime] = useState(new Date().getTime());
    //eslint-disable-next-line
	const [deadline, setDeadline] = useState(currentTime + 1000 * 60 * 60 * 60);
	const [remTime, setRemTime] = useState(deadline - currentTime);

	useEffect(() => {
		setTimeout(() => {
			setCurrentTime(new Date().getTime());
			setRemTime(deadline - currentTime);
		}, 500);
	});

	return (
		<div className="h-[640px] overflow-hidden my-16 relative">
			<img src={mushCol1} alt="" className="w-full -translate-y-80" />
			<div className="top-0 bg-gradient-to-b from-transparent to-[#A259FF] h-full w-full absolute"></div>
			<div className="absolute bottom-0 w-full pb-24 px-28 flex justify-between items-end">
				<div>
					<div className="flex gap-2 items-center bg-[#3B3B3B] w-fit rounded-full py-2 px-4 text-white font-light text-sm mb-8 hover:cursor-pointer">
						<img src={Avatar6} alt="" className="rounded-full h-6 w-6" />
						<p>Shroomie</p>
					</div>
					<h2 className="font-semibold text-white text-5xl mb-8">
						Magic Mashrooms
					</h2>
					<Button light>
						<img src={Eye} alt="" />
						<p>See NFT</p>
					</Button>
				</div>
				<div className="px-8 py-8 bg-[#3B3B3B80] backdrop-blur rounded-[20px] text-white">
					<p className="text-[#E0E0E0] font-secondary mb-3 text-sm">
						Auction ends in:
					</p>
					<div className="flex gap-2">
						<div className="flex flex-col items-center">
							<h6 className="text-5xl font-secondary font-semibold">
								{Math.floor(remTime / (1000 * 60 * 60))}
							</h6>
							<p className="text-sm font-secondary text-[#E0E0E0]">Hours</p>
						</div>
						<span className="text-5xl">:</span>
						<div className="flex flex-col items-center">
							<h6 className="text-5xl font-secondary font-semibold">
								{Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60))}
							</h6>
							<p className="text-sm font-secondary text-[#E0E0E0]">Minutes</p>
						</div>
						<span className="text-5xl">:</span>
						<div className="flex flex-col items-center">
							<h6 className="text-5xl font-secondary font-semibold">
								{Math.floor((remTime % (1000 * 60)) / (1000))}
							</h6>
							<p className="text-sm font-secondary text-[#E0E0E0]">Seconds</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Exhibition;
