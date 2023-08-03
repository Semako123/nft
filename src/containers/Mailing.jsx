import React from "react";
import { Envelope, mailing } from "../assets";
import { Button } from "../components";

const Mailing = () => {
	return (
		<div className="px-20 py-12 text-white">
			<div className="w-full p-14 bg-[#3B3B3B] rounded-[20px] flex gap-20 items-center">
				<img
					className="w-[425px] h-[310px] rounded-[20px]"
					src={mailing}
					alt=""
				/>
				<div className="w-[40%]">
					<h3 className="text-5xl font-semibold mb-3">Join Our Weekly Digest</h3>
					<p className="text-base font-light capitalize">Get exclusive promotions & updates straight to your inbox.</p>
					<div className="flex mt-10">
						<input type="text" className="pl-[25px] outline-none text-slate-950 pr-[45px] py-[15px] rounded-[20px] -mr-10" placeholder="Enter your email here"/>
						<Button>
							<img src={Envelope} alt="" />
							Subscribe
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mailing;
