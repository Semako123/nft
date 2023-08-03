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

const Home = () => {
	return (
		<>
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
		</>
	);
};

export default Home;
