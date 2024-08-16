/** @format */

import React, { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty"; // Ensure this path is correct
import { data } from "autoprefixer";

const   WomenFetch = ({ selectCategory }) => {
	const [categories, setCategories] = useState([]);
	const [bags, setBags] = useState([]);
  const [dresses, setDresses] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [jewellery, setjewellery] = useState([]);
  const [tops, setTops] = useState([])

  useEffect(() => {
		// Fetch categories
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				// Find the URL for the "bags" category
				const bagsCategory = fetchedCategories.find(
					(category) => category.slug === "womens-bags"
				);
				if (bagsCategory) {
					console.log("bags Category URL:", bagsCategory.url);

					// Fetch data from the bags category URL
					return fetch(bagsCategory.url);
				} else {
					console.warn("bags category not found.");
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
				setBags(data.products || []); // Assuming the data has a 'products' key
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
  }, [selectCategory]);

  //dresses
  
	useEffect(() => {
		// Fetch categories
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				// Find the URL for the "dresses" category
				const dressesCategory = fetchedCategories.find(
					(category) => category.slug === "womens-dresses"
				);
				if (dressesCategory) {
					console.log("dresses Category URL:", dressesCategory.url);

					// Fetch data from the dresses category URL
					return fetch(dressesCategory.url);
				} else {
					console.warn("dresses category not found.");
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
				setDresses(data.products || []); // Assuming the data has a 'products' key
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
			const shoescategory = fetchedCategories.find(
				(category) => category.slug === "womens-shoes"
			);
			if (shoescategory) {
				console.log("shoesCategory URL:", shoescategory.url);

				// Fetch data from the beauty category URL
				return fetch(shoescategory.url);
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
			setShoes(data.products || []); // Assuming the data has a 'products' key
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
				const jewelleryCategory = fetchedCategories.find(
					(category) => category.slug === "womens-jewellery"
				);
				if (jewelleryCategory) {
					console.log("jewellery Category URL:", jewelleryCategory.url);

					// Fetch data from the jewellery category URL
					return fetch(jewelleryCategory.url);
				} else {
					console.warn("jewellery category not found.");
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
				 setjewellery(data.products || []); // Assuming the data has a 'products' key
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
				const topsCategory = fetchedCategories.find(
					(category) => category.slug === "tops"
				);
				if (topsCategory) {
					console.log("Fragrance Category URL:", topsCategory.url);

					// Fetch data from the beauty category URL
					return fetch(topsCategory.url);
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
				setTops(data.products || []); // Assuming the data has a 'products' key
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

			{dresses.map((dress, index) => (
				<div key={index}>
					<img src={dress.thumbnail} alt='' />
				</div>
			))}
			{shoes.map((shoe, index) => (
				<div key={index}>
          <img src={shoe.thumbnail} alt='' />
          
				</div>
			))}
			{jewellery.map((jewel, index) => (
				<div key={index}>
					<img src={jewel.thumbnail} alt='' />
				</div>
			))}
			{tops.map((top, index) => (
				<div key={index}>
					<img src={top.thumbnail} alt='' />
				</div>
			))}
			{bags.map((bag, index) => (
				<div key={index}>
					<img src={bag.thumbnail} alt='' />
				</div>
			))}
			
		</div>
	);
};

export default  WomenFetch;
