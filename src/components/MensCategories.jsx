import React, { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty";

const MensCategories = ({ selectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetchCategory("https://dummyjson.com/products/categories")
      .then((fetchedCategories) => {
        setCategories(fetchedCategories);
        const shirtsCategory = fetchedCategories.find(
          (category) => category.slug === "mens-shirts"
        );
        if (shirtsCategory) return fetch(shirtsCategory.url);
        else return Promise.resolve(new Response(JSON.stringify([])));
      })
      .then((response) => response.json())
      .then((data) => setShirts(data.products || []))
      .catch((error) => console.error(error));
  }, [selectCategory]);

  useEffect(() => {
    fetchCategory()
      .then((fetchedCategories) => {
        setCategories(fetchedCategories);
        const shoesCategory = fetchedCategories.find(
          (category) => category.slug === "mens-shoes"
        );
        if (shoesCategory) return fetch(shoesCategory.url);
        else return Promise.resolve(new Response(JSON.stringify([])));
      })
      .then((response) => response.json())
      .then((data) => setShoes(data.products || []))
      .catch((error) => console.error(error));
  }, [selectCategory]);

  return (
    <div>
      <div className="title">Beauty Products</div>
      {shirts.map((shirt, index) => (
        <div key={index}>
          <img src={shirt.thumbnail} alt="" />
        </div>
      ))}
      {shoes.map((shoe, index) => (
        <div key={index}>
          <img src={shoe.thumbnail} alt="" />
        </div>
      ))}
    </div>
  );
};

export default MensCategories;
