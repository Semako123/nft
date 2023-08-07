import React from "react";
import { motion } from "framer-motion";
import { Avatar9, profileBD } from "../assets";

const Profile = () => {
	return (
		<motion.div
			key="profile"
			initial={{ x: "100%", opacity: 0 }}
			animate={{
				x: 0,
				opacity: 1,
				transition: { duration: 0.5, type: "tween" },
			}}
			className="text-white">
			<div>
				<img src={profileBD} alt="" className="w-full" />
				<img src={Avatar9} alt="" className="w-30 h-30 rounded-[20px] translate-x-32 -translate-y-14" />
            </div>
            <div className="py-10 px-32">
<div></div>
<div></div>
<div></div>
<div></div>
            </div>
		</motion.div>
	);
};

export default Profile;
