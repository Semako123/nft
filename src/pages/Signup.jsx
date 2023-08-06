import React from "react";
import { AuthBg } from "../assets";
import { Button } from "../components";
import { PiUserCircle, PiEnvelope, PiPassword } from "react-icons/pi";
import { motion } from "framer-motion";

const Signup = () => {
	return (
		<motion.div
			key="auth"
			initial={{ x: "100%", opacity: 0 }}
			animate={{
				x: 0,
				opacity: 1,
				transition: { duration: 0.5, type: "just" },
			}}
			exit={{ x: "-100%", opacity: 0 }}>
			<div className="flex gap-x-16 text-white">
				<div className="">
					<img src={AuthBg} alt="" className="h-full" />
				</div>
				<div className="pt-20 lg:mr-20 w-[60%] pb-10">
					<h2 className="mb-5 text-5xl font-semibold w-fit">Create Account</h2>
					<p className="font-light mb-10 lg:w-[70%]">
						Welcome! enter your details and start creating, collecting and
						selling NFTs.
					</p>
					<div className="flex flex-col items-start gap-y-4 lg:w-[50%] text-slate-900 font-normal">
						<div className="w-full flex items-center">
							<PiUserCircle className="text-[#797979] text-2xl translate-x-8 -ml-6" />
							<input
								type="text"
								name=""
								id=""
								placeholder="Username"
								className="py-2 outline-none pr-5 pl-10 rounded-full w-full"
							/>
						</div>
						<div className="w-full flex items-center">
							<PiEnvelope className="text-[#797979] text-2xl translate-x-8 -ml-6" />
							<input
								type="email"
								name=""
								id=""
								placeholder="Email Address"
								className="py-2 outline-none pr-5 pl-10 rounded-full w-full"
							/>
						</div>
						<div className="w-full flex items-center">
							<PiPassword className="text-[#797979] text-2xl translate-x-8 -ml-6" />
							<input
								type="password"
								name=""
								id=""
								placeholder="Password"
								className="py-2 outline-none pr-5 pl-10 rounded-full w-full"
							/>
						</div>
						<div className="w-full flex items-center">
							<PiPassword className="text-[#797979] text-2xl translate-x-8 -ml-6" />
							<input
								type="password"
								name=""
								id=""
								placeholder="Confirm Password"
								className="py-2 outline-none pr-5 pl-10 rounded-full w-full"
							/>
						</div>
						<Button lg>Create Account</Button>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Signup;
