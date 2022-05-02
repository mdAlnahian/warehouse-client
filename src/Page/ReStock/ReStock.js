import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './ReStock.css'

const ReStock = () => {

    const {id}=useParams();

    const [item, setItem] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setItem(data));
    
    },[])


    const handleRestock=(event)=>{
        event.preventDefault();
        // const q =item.quantity;
        // const quantity = event.target.quantity.value + q;
        const quantity = event.target.quantity.value ;
        const updatedItem = {quantity};

        // const item = { quantity };

         const url = `http://localhost:5000/item/${id}`;
        
         fetch(url, {
           method: "PUT",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(updatedItem)
         })
         .then(res => res.json())
         .then(data => {
             console.log('success',data);
             alert('Quantity updated successfully!!');
             event.target.reset();
         })


    }


  return (
    <div className="text-center">
      <h2 className="mt-5">ReStock Item of : {item.name}</h2>
      <h3 className="mt-2">{item.quantity} </h3>
      <div className="w-25 mx-auto">
        <form onSubmit={handleRestock}>
          <input
            className="w-100 mt-5 mb-4 p-3 re-input"
            type="number"
            name="quantity"
            placeholder="Add New Quantity"
          />
          <br />
          <Button variant="outline-dark" className="w-100">
            ReStock Item
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReStock;
