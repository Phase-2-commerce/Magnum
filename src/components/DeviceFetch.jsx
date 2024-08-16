/** @format */

import React, { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty"; // Ensure this path is correct
import { data } from "autoprefixer";

const   DeviceFetch = ({ selectCategory }) => {
	const [categories, setCategories] = useState([]);
	const [laptops, setLaptop] = useState([]);
  const [tabs, setTab] = useState([]);
  const [smartphones, setSmart] = useState([]);
  const [mobiles, setMobile] = useState([]);


  
  

  //dresses
  
	useEffect(() => {
		// Fetch categories
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				// Find the URL for the "dresses" category
				const laptopsCategory = fetchedCategories.find(
					(category) => category.slug === "laptops"
				);
				if (laptopsCategory) {
					console.log("laptops Category URL:", laptopsCategory.url);

					// Fetch data from the laptops category URL
					return fetch(laptopsCategory.url);
				} else {
					console.warn("laptops category not found.");
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
				setLaptop(data.products || []); // Assuming the data has a 'products' key
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
  }, [selectCategory])
  
  //shoes

useEffect(() => {
	// Fetch categories
	fetchCategory()
		.then((fetchedCategories) => {
			console.log("Fetched Categories:", fetchedCategories);
			setCategories(fetchedCategories);

			// Find the URL for the "beauty" category
			const tabscategory = fetchedCategories.find(
				(category) => category.slug === "tablets"
			);
			if (tabscategory) {
				console.log("tabCategory URL:", tabscategory.url);

				// Fetch data from the beauty category URL
				return fetch(tabscategory.url);
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
			setTab(data.products || []); // Assuming the data has a 'products' key
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
		});
}, [selectCategory]);
  
  //jewellery
	useEffect(() => {
		// Fetch categories
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				// Find the URL for the "jewellery" category
				const smartphonesCategory = fetchedCategories.find(
					(category) => category.slug === "womens-smartphones"
				);
				if (smartphonesCategory) {
					console.log("smartphones Category URL:", smartphonesCategory.url);

					// Fetch data from the smartphones category URL
					return fetch(smartphonesCategory.url);
				} else {
					console.warn("smartphones category not found.");
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
				 setSmart(data.products || []); // Assuming the data has a 'products' key
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [selectCategory]);

	//tops

	useEffect(() => {
		// Fetch categories
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				// Find the URL for the "fragarance" category
				const mobilesCategory = fetchedCategories.find(
					(category) => category.slug === "mobile-accessories"
				);
				if (mobilesCategory) {
					console.log("Fragrance Category URL:", mobilesCategory.url);

					// Fetch data from the beauty category URL
					return fetch(mobilesCategory.url);
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
				setMobile(data.products || []); // Assuming the data has a 'products' key
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

			{laptops.map((laptop, index) => (
				<div key={index}>
					<img src={laptop.thumbnail} alt='' />
				</div>
			))}
			{tabs.map((tab, index) => (
				<div key={index}>
          <img src={tab.thumbnail} alt='' />
          
				</div>
			))}
			{smartphones.map((smartphone, index) => (
				<div key={index}>
					<img src={smartphone.thumbnail} alt='' />
				</div>
			))}
			{mobiles.map((mobile, index) => (
				<div key={index}>
					<img src={mobile.thumbnail} alt='' />
				</div>
			))}
		
		</div>
	);
};

export default DeviceFetch;
