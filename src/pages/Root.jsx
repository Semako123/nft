import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Root = () => {
	return (
		<div className="min-h-screen container mx-auto">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Root;
