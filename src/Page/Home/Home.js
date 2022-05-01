import React, { useEffect, useState } from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import iphone from "./iphone.png";
import apple7 from "./apple7.png";
import apple6 from "./apple6.png";
import SingleItem from "../SingleItem/SingleItem";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  // js code for showing 1st 6 items
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      {/*---------------------------------------------------
                          jsx for banner
       --------------------------------------------------- */}
      <div className="pt-1 home inner-items container-margin">
        <h1 className="home-text pt-1 mt-5">
          We are the best retailer of{" "}
          <span className="highlighted-text">Apple</span> branded smartphone in
          Bangladesh...
          <br />
        </h1>
        <div className="carousel-container mb-3">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={iphone} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={apple6} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={apple7} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      {/*--------------- -----------------------------------------
                          jsx for first 6 items 
      ----------------------------------------------------------
       */}
      <div>
        <div className="w-75 mx-auto mt-5">
          <h2 className="text-center f-bold mt-4 mb-5"> OUR ITEMS</h2>
          <div className="cart-style">
            {items.slice(0, 6).map((item) => (
              <SingleItem key={item.id} item={item}></SingleItem>
            ))}
          </div>
          <Link to="/items">
            {" "}
            <Button
              className="text-center w-25 align-x-axis mt-5"
              variant="outline-dark"
            >
               SEE ALL 
               
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
