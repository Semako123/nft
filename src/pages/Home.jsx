import React from "react";
import {
	Collections,
	Hero,
	TopCreators,
	Categories,
	Discover,
} from "../containers";

const Home = () => {
	return (
		<>
			<Hero />
			<Collections />
			<TopCreators />
			<Categories />
			<Discover />
		</>
	);
};

export default Home;
