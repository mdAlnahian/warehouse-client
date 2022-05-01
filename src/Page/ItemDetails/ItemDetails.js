import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ItemDetails.css'

const items =[
    {
      "id": 1,
      "name": "Iphone 13 pro Max",
      "description": "this is the best smartphone currently all over the world.You can get it from us in a cheaper price",
      "img": "https://i.ibb.co/WgHBThy/iphone.png",
      "price": 799,
      "quantity": 30,
      "supplier": " Pr-RETAILER"
    },
    {
      "id": 2,
      "name": "Iphone 13",
      "description": "this is the best smartphone currently all over the world.You can get it from us in a cheaper price",
      "img": "https://i.ibb.co/HPvvDZR/apple6.png",
      "price": 899 ,
      "quantity": 25,
      "supplier": " Pr-RETAILER"
    },
    {
      "id": 3,
      "name": "Iphone 13 pro",
      "description": "this is the best smartphone currently all over the world.You can get it from us in a cheaper price",
      "img": "https://i.ibb.co/dMgBKG5/apple3.png",
      "price": 999 ,
      "quantity": 99,
      "supplier": " Pr-RETAILER"
    },
    {
      "id": 4,
      "name": "Iphone 13 mini",
      "description": "this is the best smartphone currently all over the world.You can get it from us in a cheaper price",
      "img": "https://i.ibb.co/hVMhFwx/apple7.png",
      "price": 699 ,
      "quantity": 77,
      "supplier": " Pr-RETAILER"
    },
    {
      "id": 5,
      "name": "Iphone 12",
      "description": "this is the best smartphone currently all over the world.You can get it from us in a cheaper price",
      "img": "https://i.ibb.co/HPvvDZR/apple6.png",
      "price": 799,
      "quantity": 66,
      "supplier": " Pr-RETAILER"
    },
    {
      "id": 6,
      "name": "Iphone 13 xl",
      "description": "this is the best smartphone currently all over the world.You can get it from us in a cheaper price",
      "img": "https://i.ibb.co/hVMhFwx/apple7.png",
      "price": 999,
      "quantity": 55,
      "supplier": " Pr-RETAILER"
    },
    {
      "id": 7,
      "name": "Iphone 12 XMAX",
      "description": "this is the best smartphone currently all over the world.You can get it from us in a cheaper price",
      "img": "https://i.ibb.co/WgHBThy/iphone.png",
      "price": 199 ,
      "quantity": 66,
      "supplier": " Pr-RETAILER"
    },
    {
      "id": 8,
      "name": "Iphone 12 pro Max",
      "description": "this is the best smartphone currently all over the world.You can get it from us in a cheaper price",
      "img": "https://i.ibb.co/dMgBKG5/apple3.png",
      "price": 599,
      "quantity": 11,
      "supplier": " Pr-RETAILER"
    },
    {
      "id": 9,
      "name": "Iphone 11",
      "description": "this is the best smartphone currently all over the world.You can get it from us in a cheaper price",
      "img": "https://i.ibb.co/hVMhFwx/apple7.png",
      "price": 499,
      "quantity": 50,
      "supplier": " Pr-RETAILER"
    },
    {
      "id": 10,
      "name": "Iphone 13",
      "description": "this is the best smartphone currently all over the world.You can get it from us in a cheaper price",
      "img": "https://i.ibb.co/WgHBThy/iphone.png",
      "price": 399,
      "quantity": 33,
      "supplier":" Pr-RETAILER"
    }

]

const ItemDetails = () => {
  const { id } = useParams();

  const [item,setItem]=useState({});

  useEffect(()=>{
    const url = `http://localhost:5000/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
      // console.log(item);
      // console.log(setItem);
  },[])

  // const detailInfo = items?.find(item => item.id === id);
  // console.log(detailInfo)
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