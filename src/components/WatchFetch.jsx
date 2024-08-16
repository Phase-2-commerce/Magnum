/** @format */

import React, { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty";

const WatchFetch = ({ selectCategory }) => {
	const [categories, setCategories] = useState([]);
	const [menwatches, setMen] = useState([]);
	const [wmenwatches, setwmen] = useState([]);

	useEffect(() => {
		fetchCategory("https://dummyjson.com/products/categories")
			.then((fetchedCategories) => {
				setCategories(fetchedCategories);
				const menwatchesCategory = fetchedCategories.find(
					(category) => category.slug === "mens-watches"
				);
				if (menwatchesCategory) return fetch(menwatchesCategory.url);
				else return Promise.resolve(new Response(JSON.stringify([])));
			})
			.then((response) => response.json())
			.then((data) => setMen(data.products || []))
			.catch((error) => console.error(error));
	}, [selectCategory]);

	useEffect(() => {
		fetchCategory()
			.then((fetchedCategories) => {
				setCategories(fetchedCategories);
				const wmenwatchesCategory = fetchedCategories.find(
					(category) => category.slug === "womens-watches"
				);
				if (wmenwatchesCategory) return fetch(wmenwatchesCategory.url);
				else return Promise.resolve(new Response(JSON.stringify([])));
			})
			.then((response) => response.json())
			.then((data) => setwmen(data.products || []))
			.catch((error) => console.error(error));
	}, [selectCategory]);

	return (
		<div>
			<div className='title'>Beauty Products</div>
			{menwatches.map((menwatch, index) => (
				<div key={index}>
					<img src={menwatch.thumbnail} alt='' />
				</div>
			))}
			{wmenwatches.map((wmenwatch, index) => (
				<div key={index}>
					<img src={wmenwatch.thumbnail} alt='' />
				</div>
			))}
		</div>
	);
};

export default WatchFetch;
