import React from "react";
import {
	Collections,
	Hero,
	TopCreators,
	Categories,
	Discover,
	Exhibition,
} from "../containers";

const Home = () => {
	return (
		<>
			<Hero />
			<Collections />
			<TopCreators />
			<Categories />
			<Discover />
			<Exhibition />
		</>
	);
};

export default Home;
