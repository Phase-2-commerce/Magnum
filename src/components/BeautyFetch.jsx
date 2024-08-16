/** @format */

import React, { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty"; // Ensure this path is correct
import { data } from "autoprefixer";

const BeautyFetch = ({ selectCategory }) => {
	const [categories, setCategories] = useState([]);
	const [beauties, setBeauties] = useState([]);

	useEffect(() => {
		// Fetch categories
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				// Find the URL for the "beauty" category
				const beautyCategory = fetchedCategories.find(
					(category) => category.slug === "beauty"
				);
				if (beautyCategory) {
					console.log("Beauty Category URL:", beautyCategory.url);

					// Fetch data from the beauty category URL
					return fetch(beautyCategory.url);
				} else {
					console.warn("Beauty category not found.");
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
				setBeauties(data.products || []); // Assuming the data has a 'products' key
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [selectCategory]); // Dependency array to avoid infinite loop

	return (
		<div>
			<h2>Beauty Products</h2>

			{beauties.map((beauty, index) => (
				<div key={index}>
					<img src={beauty.thumbnail} alt='' />
				</div> // Adjust based on the actual data structure
			))}
		</div>
	);
};

export default BeautyFetch;
