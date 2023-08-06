import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { Footer } from "../containers";
import ScrollToTop from "../utils/ScrollToTop";

const Root = () => {
	return (
		<div className="mx-auto overflow-x-hidden">
			<ScrollToTop />
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
