import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ children }) => {
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
						{Math.floor((remTime % (1000 * 60)) / 1000)}
					</h6>
					<p className="text-sm font-secondary text-[#E0E0E0]">Seconds</p>
				</div>
			</div>
			<div className="mx-auto mt-3 w-fit">{children}</div>
		</div>
	);
};

export default Timer;
