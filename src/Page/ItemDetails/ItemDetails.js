import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ItemDetails.css'



const ItemDetails = () => {
  const { id } = useParams();

  const [item,setItem]=useState({});

  useEffect(()=>{
    const url = `http://localhost:5000/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  },[])


        return (
          <div>
            <div className="single-data-info">
              <div className="">
                <img className='w-100' src={item.img} alt="" srcset="" />
                <div>
                  <h2>{item.name}</h2>
                  <p>DESCRIPTION : {item.description}</p>
                  <h5>Quantity:{item.quantity}</h5>
                  <h4>Price: ${item.price} per unit</h4>
                  <h5>Supplier: {item.supplier}</h5>
                  <Button
                    // onClick={() => moveToItemDetails(_id)}
                    className="w-100 mt-3"
                    variant="outline-dark"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
};

export default ItemDetails;