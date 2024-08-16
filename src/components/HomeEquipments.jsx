/** @format */

import { useEffect,useState } from "react";
import { fetchCategory } from "../FetchCategoty";

const HomeEquipments= ({ selectCategory }) => {
	const [categories, setCategories] = useState([]);
	const [furnitures, setFurniture] = useState([]);
	const [decorations, setDecoration] = useState([]);

	useEffect(() => {
		// Fetch categories
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				// Find the URL for the "furnitures" category
				const furnituresCategory = fetchedCategories.find(
					(category) => category.slug === "furniture"
				);
				if (furnituresCategory) {
					console.log("furnitures Category URL:", furnituresCategory.url);

					// Fetch data from the furnitures category URL
					return fetch(furnituresCategory.url);
				} else {
					console.warn("furnitures category not found.");
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
				setFurniture(data.products || []); // Assuming the data has a 'products' key
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [selectCategory]);

	//decoration

	useEffect(() => {
		// Fetch categories
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				// Find the URL for the "beauty" category
				const decorationCategory = fetchedCategories.find(
					(category) => category.slug === "home-decoration"
				);
				if (decorationCategory) {
					console.log(
						"decoration Category URL:",
						decorationCategory.url
					);

					// Fetch data from the beauty category URL
					return fetch(decorationCategory.url);
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
				setDecoration(data.products || []); // Assuming the data has a 'products' key
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

			{furnitures.map((furniture, index) => (
				<div key={index}>
					<img src={furniture.thumbnail} alt='' />
				</div> // Adjust based on the actual data structure
			))}
			{decorations.map((decoration, index) => (
				<div key={index}>
					<img src={decoration.thumbnail} alt='' />
				</div> // Adjust based on the actual data structure
			))}
		</div>
	);
};

export default HomeEquipments
