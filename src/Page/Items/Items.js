import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleItem from "../SingleItem/SingleItem";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="w-75 mx-auto mt-4">
      <h2 className="text-center f-bold mb-4"> OUR ITEMS </h2>

      <div className="cart-style">
        {items.map((item) => (
          <SingleItem key={item._id} item={item}></SingleItem>
        ))}
      </div>
      <Link to="/manage">
        {" "}
        <Button
          className="text-center w-25 align-x-axis mt-5"
          variant="outline-dark"
        >
          Manage Item Here
        </Button>
      </Link>
    </div>
  );
};

export default Items;
