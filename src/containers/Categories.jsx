import React from "react";
import { Category } from "../components";
import { nftCategories } from "../data/nfts";

const Categories = () => {
	return (
		<div className="px-20 py-12 text-white">
			<h3 className="font-semibold text-4xl mb-14">Browse Categories</h3>
			<div className="flex flex-wrap justify-between gap-y-10">
				{nftCategories.map(({ name, icon, image }) => (
					<Category name={name} img={image} icon={icon} />
				))}
			</div>
		</div>
	);
};

export default Categories;
