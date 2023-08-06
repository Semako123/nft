import React from "react";
import {
	Collections,
	Hero,
	TopCreators,
	Categories,
	Discover,
	Exhibition,
	HIW,
	Mailing,
} from "../containers";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
	return (
		<AnimatePresence>
			<motion.div
				key="home"
				initial={{ x: "100%", opacity: 0 }}
				animate={{ x: 0, opacity: 1, transition: { duration: 0.5 ,  type: "just" } }}
				exit={{ x: "-100%", opacity: 0 }}>
				<div className="container mx-auto">
					<Hero />
					<Collections />
					<TopCreators />
					<Categories />
					<Discover />
				</div>
				<Exhibition />
				<div className="container mx-auto">
					<HIW />
					<Mailing />
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Home;
