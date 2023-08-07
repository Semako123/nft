import React from "react";
import { motion } from "framer-motion";

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
			Profile
		</motion.div>
	);
};

export default Profile;
