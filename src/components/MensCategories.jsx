/** @format */

import React, { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty"; // Ensure this path is correct
import { data } from "autoprefixer";

const MensCategories = ({ selectCategory }) => {
	const [categories, setCategories] = useState([]);
	const [shirts, setShirts] = useState([]);
	const [shoes, setShoes] = useState([]);

	useEffect(() => {
		// Fetch categories
		fetchCategory("https://dummyjson.com/products/categories")
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				// Find the URL for the "shirts" category
				const shirtsCategory = fetchedCategories.find(
					(category) => category.slug === "mens-shirts"
				);
				if (shirtsCategory) {
					console.log("shirts Category URL:", shirtsCategory.url);

					// Fetch data from the shirts category URL
					return fetch(shirtsCategory.url);
				} else {
					console.warn("shirts category not found.");
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
				setShirts(data.products || []); // Assuming the data has a 'products' key
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [selectCategory]);

	//fragrance

	useEffect(() => {
		// Fetch categories
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				// Find the URL for the "shoes" category
				const shoesCategory = fetchedCategories.find(
					(category) => category.slug === "mens-shoes"
				);
				if (shoesCategory) {
					console.log("shoes Category URL:", shoesCategory.url);

					// Fetch data from the shoes category URL
					return fetch(shoesCategory.url);
				} else {
					console.warn("shoes category not found.");
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
				console.log('data');
				setShoes(data.products || []); // Assuming the data has a 'products' key
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [selectCategory]);
	console.log();
	return (
		<div>
			<div className='w-[300px] h-[26px] text-[20px] font-normal font-poppins leading-[26px] mb-[70px]'>
				Beauty Products
			</div>

			{shirts.map((shirt, index) => (
				<div key={index}>
					<img src={shirt.thumbnail} alt='' />
				</div> // Adjust based on the actual data structure
			))}
			{shoes.map((shoe, index) => (
				<div key={index}>
					<img src={shoe.thumbnail} alt='' />
				</div> // Adjust based on the actual data structure
			))}
		</div>
	);
};

export default MensCategories
