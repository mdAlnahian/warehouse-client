import React from 'react';
import { useParams } from 'react-router';

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

  const detailInfo = items?.find(item => item.id.toString() === id);

      //  console.log(typeof item.id.toString());
    //   console.log(typeof id);
        return (
    <div>
      <h1>product serial number is {id}</h1>
      {/* <h4>{detailInfo?.name}</h4> */}
    </div>
  );
};

export default ItemDetails;