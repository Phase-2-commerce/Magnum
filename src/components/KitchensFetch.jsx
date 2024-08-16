/** @format */

import React from "react";
import { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty"; // Ensure this path is correct
import { data } from "autoprefixer";

const KitchensFetch = ({ selectCategory }) => {
	const [categories, setCategories] = useState([]);
	const [kitchens, setKitchens] = useState([]);

	useEffect(() => {
		// Fetch categories
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				// Find the URL for the "beauty" category
				const kitchenCategory = fetchedCategories.find(
					(category) => category.slug === "kitchen-accessories"
				);
				if (kitchenCategory) {
					console.log("kitchens Category URL:", kitchenCategory.url);

					// Fetch data from the kitchens category URL
					return fetch(kitchenCategory.url);
				} else {
					console.warn("kitchens category not found.");
					return Promise.resolve(new Response(JSON.stringify([]))); // Resolve with empty data if not found
				}
			})
			.then((response) => {
				// Check if response is ok
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.json(); // Parse the response body as JSON
			})
			.then((data) => {
				console.log(data);
				setKitchens(data.products || []); // Assuming the data has a 'products' key
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [selectCategory]);

	return (
		<div>
			<div className='w-[300px] h-[26px] text-[20px] font-normal font-poppins leading-[26px] mb-[70px]'>
				Beauty Products
			</div>

			{kitchens.map((kitchen, index) => (
				<div key={index}>
					<img src={kitchen.thumbnail} alt='' />
				</div> // Adjust based on the actual data structure
			))}
		</div>
	);
};

export default KitchensFetch;
