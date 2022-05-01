import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SingleItem.css";

const SingleItem = ({ item }) => {
  const { name, _id, description, img, quantity, price, supplier } = item;

  const navigate = useNavigate();
  const moveToItemDetails = () => {
    navigate(`/item/${_id}`);
  };

  return (
    <div className="background">
      <div className="back-card-dtyle">
        <img src={img} alt="" srcset="" />
        <div>
          <h3>{name}</h3>
          <h6>DESCRIPTION : {description}</h6>
          <h6>Quantity:{quantity}</h6>
          <h4>Price: ${price} per unit</h4>
          <h5>Supplier: {supplier}</h5>
          <Button
            onClick={() => moveToItemDetails(_id)}
            className="w-100 mt-3"
            variant="outline-dark"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
