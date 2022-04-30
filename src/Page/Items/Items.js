import React, { useEffect, useState } from "react";
import SingleItem from "../SingleItem/SingleItem";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="w-75 mx-auto mt-4">
      <h2 className="text-center f-bold mb-4"> OUR ITEMS </h2>
      <div className="cart-style">
        {items.map((item) => (
          <SingleItem key={item.id} item={item}></SingleItem>
        ))}
      </div>
    </div>
  );
};

export default Items;
