/** @format */

import React, { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty"; // Ensure this path is correct
import { data } from "autoprefixer";

const BeautyFetch = ({ selectCategory }) => {
	const [categories, setCategories] = useState([]);
	const [beauties, setBeauties] = useState([]);
	const [fragrances, setFragrances] = useState([]);
	const [skincare, setSkincare] = useState([]);

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
	}, [selectCategory]);

	//fragrance

	useEffect(() => {
		// Fetch categories
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				// Find the URL for the "beauty" category
				const fragranceCategory = fetchedCategories.find(
					(category) => category.slug === "fragrances"
				);
				if (fragranceCategory) {
					console.log(
						"Fragrance Category URL:",
						fragranceCategory.url
					);

					// Fetch data from the beauty category URL
					return fetch(fragranceCategory.url);
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
				setFragrances(data.products || []); // Assuming the data has a 'products' key
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [selectCategory]);

	//skincare
	useEffect(() => {
		// Fetch categories
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				// Find the URL for the "beauty" category
				const skincareCategory = fetchedCategories.find(
					(category) => category.slug === "skin-care"
				);
				if (skincareCategory) {
					console.log("skincare Category URL:", skincareCategory.url);

					// Fetch data from the skincare category URL
					return fetch(skincareCategory.url);
				} else {
					console.warn("skincare category not found.");
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
				setSkincare(data.products || []); // Assuming the data has a 'products' key
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

			{beauties.map((beauty, index) => (
				<div key={index}>
					<img src={beauty.thumbnail} alt='' />
				</div> // Adjust based on the actual data structure
			))}
			{fragrances.map((frangrance, index) => (
				<div key={index}>
					<img src={frangrance.thumbnail} alt='' />
				</div> // Adjust based on the actual data structure
			))}
			{skincare.map((skincare, index) => (
				<div key={index}>
					<img src={skincare.thumbnail} alt='' />
				</div> // Adjust based on the actual data structure
			))}
		</div>
	);
};

export default BeautyFetch;
