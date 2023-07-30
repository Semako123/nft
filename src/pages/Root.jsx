import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Root = () => {
	return (
		<div className="bg-[#2B2B2B] min-h-screen">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Root;
