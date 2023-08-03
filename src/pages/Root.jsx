import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { Footer } from "../containers";

const Root = () => {
	return (
		<div className="mx-auto">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
